import { makeStyles, Theme, Paper, Typography, Box, Button, Avatar, Grid } from "@material-ui/core";
import clsx from "clsx";
import { register } from "../utils/constants";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { Dispatch, useEffect, useState } from "react";
import FormElements from "../components/common/FormElements";
import { registerSchema } from "../utils/schemas";
import { useDispatch } from "react-redux";
import { registerAction } from "../redux/actions/auth";

const useStyles = makeStyles((theme: Theme) => ({
  register_container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: `${theme.spacing(20)}vh`,
    "& .MuiPaper-root": {
      padding: theme.spacing(6),
    },
    "& h4": {
      marginBottom: theme.spacing(4),
    },
    "& .theme-form-container": {
      display: "flex",
      flexDirection: "column",
    },
    "& .MuiFormControl-root": {
      margin: theme.spacing(0, 0, 3, 0),
    },
    "& .theme-btn-container": {
      display: "flex",
      justifyContent: "center",
      margin: theme.spacing(4, 0),
    },
    "& a": {
      color: theme.palette.primary.main,
      textDecoration: "none",
      "&:hover": {
        cursor: "pointer",
      },
    },
    "& .MuiPaper-rounded": {
      width: 400
    }
  },
  avatar: {
    width: theme.spacing(14),
    height: theme.spacing(14),
    marginBottom: theme.spacing(4),
    float: 'right'
  }
}));

const Register: React.FC = (props:any) => {
  const classes = useStyles();
  const [formValues, setFormValues] = useState<any>({});
  const dispatch = useDispatch<Dispatch<any>>();

  const formik:any = useFormik<any>({
    initialValues: formValues,
    validationSchema: registerSchema,
    onSubmit: (values) => {
      handleSubmit(values)
    }
  });
  
  const handleSubmit = (values: any):void => {
    let payload = {
      ...values,
      userImage: formValues.preview,
      confirm_password: undefined,
      role: 'user'
    }
    dispatch(registerAction(payload, ()=>{
      props.history.push('/');
    }))
  }

  const handleImage = (value: any, dataURL: string):void => {
    setFormValues((prev:any) => ({...prev, preview: dataURL}))
    formik.setFieldValue("userImage", value)
  }

  useEffect(()=>{
    let handlers = {
      "userImage": handleImage
    }
    register['handlers'] = handlers;
    // eslint-disable-next-line
  },[])

  return (
    <div className={clsx(classes.register_container)}>
      <Paper>
        <Typography variant="h4">SIGN UP</Typography>
        {formValues.preview && <Avatar className={classes.avatar} src={formValues.preview} alt='user' />}
        <form onSubmit={formik.handleSubmit} autoComplete="off">
          <Grid container spacing={2} onChange={formik.handleChange}>
              {register.fields?.map((item: any, i: number) => (
                <Grid key={i} item xs={12} sm={12}>
                  <FormElements
                    {...item}
                    helperText={formik.errors[item.name]}
                    value={formik.values[item.name]}
                    handleChange={register.handlers?.[item.name]}
                  />
                </Grid>
              ))}
          </Grid>
          <Box className="theme-btn-container">
            <Button type="submit" color="primary" variant="contained">Submit</Button>
          </Box>
        </form>
        <Link to="/">
          <Typography variant="caption">Already have an account</Typography>
        </Link>
      </Paper>
    </div>
  );
};

export default Register;
