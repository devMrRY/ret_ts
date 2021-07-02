import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { logoutAction } from '../../redux/actions/auth';
import { useDispatch } from 'react-redux';
import { getFromLocalStorage } from '../../utils/helper';
import { Link, useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      '& a':{
          textDecoration: 'none',
          color: theme.palette.common.white
      }
    },
  }),
);

export default function ButtonAppBar(props:any) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user:any = JSON.parse(getFromLocalStorage("token") || "");
  const history = useHistory();

  const handleLogout = () => {
    dispatch(logoutAction(()=>{
        history.push('/')
    }))
  }
  
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" className={classes.title}>
                <Link to="/dashboard">
                    REACT-TS
                </Link>
            </Typography>
          <Typography variant="body1">
            Hi {user?.name || ''}
          </Typography>
          <Button color="inherit" onClick={handleLogout}>Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
