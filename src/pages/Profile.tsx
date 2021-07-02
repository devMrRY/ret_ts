import React, { Dispatch, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Theme, Button, Grid, Typography, Avatar } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { profile } from "../utils/constants";
import { useFormik } from "formik";
import FormElements from "../components/common/FormElements";
import FileUpload from "../components/FormItems/FileUpload";
import { profileSchema } from "../utils/schemas";
import { getUserById, updateUser } from '../redux/actions/user';
import { getFromLocalStorage } from "../utils/helper";
import Header from '../components/common/Header';

const useStyles = makeStyles((theme: Theme) => ({
  dashboard_container: {
    padding: theme.spacing(5),
    "& h4": {
      marginBottom: theme.spacing(4),
    },
    "& .theme-form-container": {
      display: "flex",
      flexDirection: "column",
    },
    "& .theme-btn-container": {
      display: "flex",
      justifyContent: "center",
      margin: theme.spacing(4, 0),
    },
    "& .MuiPaper-rounded": {
      width: 380
    }
  },
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    marginBottom: theme.spacing(4)
  },
  img_container: {
    '& input[type="file"]':{
      display: 'none'
    }
  }
}));

const Profile = (props:any) => {
  const classes = useStyles();
  const fileRef = React.createRef<any>();
  const dispatch = useDispatch<Dispatch<any>>();
  const [formValues, setFormValues] = useState<any>({});
  const [preview, setPreview] = useState<any>(true);
  const [edit, setEdit] = useState<any>(false);
  const selectedUser = useSelector(({ users }: any) => users.activeUser);
  const loggedInUser = JSON.parse(getFromLocalStorage("token") || "");

  useEffect(()=>{
    const id = props.match.params.userId
    if(props.location.pathname.includes('edit') && (loggedInUser.role === "admin" || loggedInUser.id.toString() === id.toString())){
      setEdit(true)
    }
    if(!selectedUser){
      dispatch(getUserById(`/${id}`))
    }
    // eslint-disable-next-line
  },[])
  
  useEffect(()=>{
    setPreview(selectedUser?.userImage)
    delete selectedUser?.userImage;
    setFormValues((prev: object) => ({ ...prev, ...selectedUser }))
  },[selectedUser])

  const formik:any = useFormik<any>({
    initialValues: formValues,
    validationSchema: profileSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      handleSubmit(values)
    }
  });

  const handleSubmit = (values: any):void => {
    let payload = {
      ...values,
      userImage: preview
    }
    dispatch(updateUser(payload.id, payload))
  }

  const handleImage = (value: any, dataURL: string):void => {
    setPreview(dataURL)
    formik.setFieldValue("userImage", value)
  }

  const handleFile = () => {
    edit && fileRef.current.click()
  }

  const handleCancel = () => {
    setPreview(selectedUser?.userImage)
    delete selectedUser?.userImage;
    setFormValues((prev: any) => ({ ...prev, ...selectedUser }))
  }

  return (
    <>
      <Header />
      <Box className={classes.dashboard_container}>
        <Typography variant="h4">Profile</Typography>
        <Box className={classes.img_container}>
          <FileUpload 
            handleChange={handleImage}
            label="file"
            name="file"
            helperText={formik.errors['userImage']}
            ref={fileRef}
          />
        </Box>
        {preview && <Avatar onClick={handleFile} className={classes.avatar} src={preview.toString() || formValues.userImage} alt='user' />}
        <form onSubmit={formik.handleSubmit} autoComplete="off">
          <Grid container spacing={2} onChange={formik.handleChange}>
              {profile.fields?.map((item: any, i: number) => (
                <Grid key={i} item md={6} sm={12}>
                  <FormElements
                    {...item}
                    helperText={formik.errors[item.name]}
                    value={formik.values[item.name]}
                    disabled={!edit}
                  />
                </Grid>
              ))}
          </Grid>
          {edit && (<Box className="theme-btn-container">
            <Button type="submit" color="primary" variant="contained">Submit</Button>&nbsp;&nbsp;
            <Button color="secondary" variant="contained" onClick={handleCancel}>Cancel</Button>
          </Box>)}
        </form>
      </Box>
    </>
  );
};

export default Profile;
