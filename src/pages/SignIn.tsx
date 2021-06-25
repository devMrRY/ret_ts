import { makeStyles, Theme, Paper, Typography } from "@material-ui/core";
import PluggableForm from "../components/common/PluggableForm";
import clsx from "clsx";
import { signin } from "../utils/constants";

const useStyles = makeStyles((theme: Theme) => ({
  signin_container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: `${theme.spacing(20)}vh`,
    "& .MuiPaper-root": {
      padding: theme.spacing(6),
    },
    "& h4": {
      color: theme.palette.primary.main,
      marginBottom: theme.spacing(4),
    },
    "& .form-container": {
      display: "flex",
      flexDirection: "column",
    },
    "& .MuiFormControl-root": {
      margin: theme.spacing(0, 0, 3, 0),
    },
  },
}));

const SignIn: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.signin_container)}>
      <Paper>
        <Typography variant="h4">SIGN IN</Typography>
        <PluggableForm config={signin} />
      </Paper>
    </div>
  );
};

export default SignIn;
