import { makeStyles, Theme, Paper, Typography, TextField, Box, Button } from "@material-ui/core";
import clsx from "clsx";
import { register } from "../utils/constants";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { useState } from "react";
import FormElements from "../components/common/FormElements";
import { registerSchema } from "../utils/schemas";

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
}));

const Register: React.FC = () => {
  const classes = useStyles();
  const [formValues] = useState<any>({});

  const formik = useFormik({
    initialValues: formValues,
    validationSchema: registerSchema,
    onSubmit: (values) => {
      handleSubmit(values)
    }
  });
  
  const handleSubmit = (values: any) => {
    console.log(values)
  }

  // const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   e.stopPropagation();
  //   formik.setFieldValue("userImage", 'e.target.files?.[0]', true)
  // }
  
  return (
    <div className={clsx(classes.register_container)}>
      <Paper>
        <Typography variant="h4">SIGN UP</Typography>
        <form onSubmit={formik.handleSubmit} autoComplete="off">
          <Box onChange={formik.handleChange}>
            {register.fields?.map((item: any, i: number) => (
              <Box key={i}>
                <FormElements
                  {...item}
                  variant="outlined"
                  helperText={formik.errors[item.name]}
                  value={formik.values[item.name]}
                />
              </Box>
            ))}
            <Box>
              <TextField 
                error={Boolean(formik.errors.userImage)}
                helperText={formik.errors.userImage}
                value={formik.values.userImage}
                name="userImage"
                label="User Image"
                type="file"
                variant="standard"
                onChange={formik.handleChange}
              />
            </Box>
          </Box>
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
