import { makeStyles, Theme, Paper, Typography, Button, Box } from "@material-ui/core";
import clsx from "clsx";
import { signin } from "../utils/constants";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { loginSchema } from "../utils/schemas";
import { useEffect, useState } from "react";
import FormElements from "../components/common/FormElements";
import { loginAction } from "../redux/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import { checkAuth } from "../utils/helper";

const useStyles = makeStyles((theme: Theme) => ({
  signin_container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: `${theme.spacing(20)}vh`,
    "& .MuiPaper-root": {
      padding: theme.spacing(6),
      minWidth: 400,
    },
    "& h4": {
      marginBottom: theme.spacing(4),
    },
    "& .theme-form-container": {
      display: "flex",
      flexDirection: "column",
    },
    "& form": {
      marginBottom: theme.spacing(2),
    },
    "& .MuiFormControl-root": {
      margin: theme.spacing(0, 0, 3, 0),
    },
    "& .theme-btn-container": {
      display: "flex",
      justifyContent: "center",
    },
    "& a": {
      color: theme.palette.primary.main,
      textDecoration: "none",
      "&:hover": {
        cursor: "pointer",
      },
    },
  },
  register_link: {
    marginTop: theme.spacing(2),
  },
}));

function SignIn(props:any) {
  const classes = useStyles();
  const [formValues] = useState<any>({});
  const isAuth = useSelector(({auth}:any)=>auth.isAuth);

  useEffect(()=>{
    if(isAuth || checkAuth()){
      props.history.push('/dashboard');
    }
    // eslint-disable-next-line
  },[isAuth])

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: formValues,
    validationSchema: loginSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    }
  });

  const handleSubmit = (values: any) => {
    let query = `?email=${values.email}&password=${values.password}`;
    dispatch(loginAction(query));
  };

  return (
    <Box className={clsx(classes.signin_container)}>
      <Paper>
        <Typography variant="h4">SIGN IN</Typography>
        <form onSubmit={formik.handleSubmit} autoComplete="off">
          <Box onChange={formik.handleChange}>
            {signin.fields?.map((item: any, i: number) => (
              <Box key={i}>
                <FormElements
                  {...item}
                  variant="outlined"
                  helperText={formik.errors[item.name]}
                  value={formik.values[item.name]} />
              </Box>
            ))}
          </Box>
          <Box className="theme-btn-container">
            <Button type="submit" color="primary" variant="contained">Submit</Button>
          </Box>
        </form>
        <Link to="/register">
          <Typography variant="caption">Create an Account</Typography>
        </Link>
      </Paper>
    </Box>
  );
}

export default SignIn;
