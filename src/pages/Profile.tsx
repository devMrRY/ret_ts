import React, { Dispatch, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Box, Theme, IconButton, Button, Grid, Typography, Avatar } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usersListAction } from "../redux/actions/user";
import { Delete, Visibility } from '@material-ui/icons';
import { profile } from "../utils/constants";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import FormElements from "../components/common/FormElements";
import { profileSchema } from "../utils/schemas";

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
  }
}));

const Profile = (props:any) => {
  const classes = useStyles();
  const dispatch = useDispatch<Dispatch<any>>();
  const [formValues, setFormValues] = useState<any>({ userImage: true });
  const selectedUser = useSelector(({ users }: any) => users.activeUser);

  useEffect(()=>{
    if(!selectedUser){
      // dispatch(()=>{})
    }
  },[])

  useEffect(()=>{
    setFormValues((prev: object) => ({ ...prev, ...selectedUser }))
  },[selectedUser])

  const formik:any = useFormik<any>({
    initialValues: formValues,
    validationSchema: profileSchema,
    onSubmit: (values) => {
      handleSubmit(values)
    }
  });
  
  const handleSubmit = (values: any):void => {
    let payload = {
      ...values,
      userImage: formValues.userImage,
      confirm_password: undefined
    }
  }

  const handleImage = (value: any, dataURL: string):void => {
    setFormValues((prev:any) => ({...prev, userImage: dataURL}))
    formik.setFieldValue("userImage", value)
  }
  console.log(formik.values)
  return (
    <Box className={classes.dashboard_container}>
      <Typography variant="h4">Profile</Typography>
      {formValues.userImage && <Avatar className={classes.avatar} src={formValues.userImage} alt='user' />}
      <form onSubmit={formik.handleSubmit} autoComplete="off">
        <Grid container spacing={2} onChange={formik.handleChange}>
            {profile.fields?.map((item: any, i: number) => (
              <Grid key={i} item xs={12} sm={12}>
                <FormElements
                  {...item}
                  helperText={formik.errors[item.name]}
                  value={formik.values[item.name]}
                />
              </Grid>
            ))}
        </Grid>
        <Box className="theme-btn-container">
          <Button type="submit" color="primary" variant="contained">Submit</Button>
        </Box>
      </form>
    </Box>
  );
};

export default Profile;
