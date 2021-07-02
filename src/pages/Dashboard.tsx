import React, { Dispatch, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Box, Theme, IconButton } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserAction, usersListAction, setActiveUserAction } from "../redux/actions/user";
import { Delete, Edit, Visibility } from '@material-ui/icons';
import Alert from "../components/common/Alert";
import { getFromLocalStorage } from "../utils/helper";
import Search from '../components/common/search';
import Header from '../components/common/Header';

const useStyles = makeStyles((theme: Theme) => ({
  table: {
    minWidth: 650,
  },
  dashboard_container: {
    padding: theme.spacing(5),
  },
  search_container: {
    display: 'flex',
    justifyContent: 'flex-end',
    '& #search-box' :{
      width: 300
    }
  }
}));

const Dashboard = (props:any) => {
  const classes = useStyles();
  const dispatch = useDispatch<Dispatch<any>>()
  const [activeId, setActiveId] = useState<number>(-1);
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [list, setList] = useState<any>([]);

  const loggedInUser = JSON.parse(getFromLocalStorage("token")!);
  const users = useSelector(({ users }: any) => users.users);
  
  useEffect(()=>{
    if(users?.length){
      setList(users)
    }
  },[users])

  useEffect(() => {
    dispatch(usersListAction());
    // eslint-disable-next-line
  }, []);

  const handleDelete = (id:number) => {
    setActiveId(id);
    toggleAlert();
  }
  
  const handleView = (id:number, path: string) => {
    let user = users.find((item:any) => item.id === id);
    dispatch(setActiveUserAction(user))
    props.history.push(`/${path}/${id}`)
  }
  
  const toggleAlert = ():void => {
    setShowAlert((prev: Boolean) => !prev);
  }
    
  const onConfirm = ():void => {
    dispatch(deleteUserAction(`/${activeId}`));
    toggleAlert();
  }

  const handleSearch = (value:string):void => {
    setList(users.filter((el:any)=> (
      el.email.toLowerCase().includes(value.toLowerCase()) || el.firstname.toLowerCase().includes(value.toLowerCase()) ||
      (el.lastname && el.lastname.toLowerCase().includes(value.toLowerCase()))
    )))
  }

  const handleClear = ():void => {
    setList(users)
  }

  return (
    <>
      <Alert
        open={showAlert}
        message={'Are you sure you want to delete this user ?'}
        onConfirm={onConfirm}
        onCancel={toggleAlert}
        showActions={true}
      />
      <Header />
      <Box className={classes.dashboard_container}>
        <Box className={classes.search_container}>
          <Search label="Search by name/email" handleSubmit={handleSearch} handleClear={handleClear} />
        </Box>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="left">Email</TableCell>
                <TableCell align="left">Phone</TableCell>
                <TableCell align="left">Address</TableCell>
                <TableCell align="left">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {list?.map((row: any) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {`${row.firstname} ${row.lastname || ''}`}
                  </TableCell>
                  <TableCell align="left">{row.email}</TableCell>
                  <TableCell align="left">{row.phone}</TableCell>
                  <TableCell align="left">{row.address}</TableCell>
                  <TableCell align="left">
                    <IconButton color="primary" size="small" aria-label="upload picture" onClick={() => handleView(row.id, 'view')}>
                      <Visibility />
                    </IconButton>
                    {(loggedInUser.role === "admin" || loggedInUser.id.toString() === row.id.toString()) && <IconButton color="inherit" size="small" aria-label="upload picture" onClick={() => handleView(row.id, 'edit')}>
                        <Edit />
                      </IconButton>
                    }
                    {loggedInUser.role === "admin" && <IconButton color="secondary" size="small" aria-label="upload picture" onClick={() => handleDelete(row.id)}>
                      <Delete />
                    </IconButton>}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default Dashboard;
