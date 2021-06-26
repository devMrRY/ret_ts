import React from "react";
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
import { usersListAction } from "../redux/actions/user";
import { Delete, Visibility } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) => ({
  table: {
    minWidth: 650,
  },
  dashboard_container: {
    padding: theme.spacing(5),
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const users = useSelector(({ users }: any) => users.users);

  useEffect(() => {
    dispatch(usersListAction());
    // eslint-disable-next-line
  }, []);

  const handleDelete = (id:number) => {
      alert(id)
  }

  const handleView = (id:number) => {
    alert(id)
  }

  return (
    <Box className={classes.dashboard_container}>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Address</TableCell>
              <TableCell align="left">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users?.map((row: any) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.firstname}
                </TableCell>
                <TableCell align="left">{row.email}</TableCell>
                <TableCell align="left">{row.address}</TableCell>
                <TableCell align="left">
                  <IconButton color="primary" size="small" aria-label="upload picture" onClick={() => handleView(row.id)}>
                    <Visibility />
                  </IconButton>
                  <IconButton color="primary" size="small" aria-label="upload picture" onClick={() => handleDelete(row.id)}>
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Dashboard;
