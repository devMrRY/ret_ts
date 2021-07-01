import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Snackbar from "@material-ui/core/Snackbar";
import { Alert, AlertTitle } from "@material-ui/lab";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearToastAction } from "../../redux/actions/user";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 400,
      "& > * + *": {
        marginTop: theme.spacing(2),
      },
    },
  })
);

export default function Toastr({ onClose }: any) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { message, type, open } = useSelector(({common}:any)=> common.toast);

    useEffect(()=>{
        setTimeout(()=>{
            dispatch(clearToastAction())
        },3000)
    },[open])

  return (
    <div className={classes.root}>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        onClose={onClose}
      >
        <Alert severity={type} onClose={onClose}>
          <AlertTitle>{type}</AlertTitle>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}

Toastr.defaultProps = {
    onClose: () => {}
}