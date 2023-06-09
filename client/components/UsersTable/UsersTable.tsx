import {
  Table,
  TableContainer,
  TableRow,
  TableCell,
  TableBody,
  TableHead,
  Paper,
  Button,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";
import Link from "next/link";
import React, { useEffect } from "react";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import { getUsersFetch } from "redux-state/reducers/UsersReducer";

interface IUserTableProps {
  searchedUser: string;
}

const UsersTable = ({ searchedUser }: IUserTableProps) => {
  const { users, error } = useAppSelector((users) => users.users);
  const dispatch = useAppDispatch();

  const searchUs = users.filter((user) =>
    user.name.toLowerCase().startsWith(searchedUser.toLowerCase())
  );

  useEffect(() => {
    dispatch(getUsersFetch());
  }, [dispatch]);
  console.log(searchUs);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {searchUs &&
            searchUs.map((user) => (
              <TableRow
                key={user.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                hover
              >
                <TableCell component="th" scope="row">
                  <Link href={`/patient`}>{user.name}</Link>
                </TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.address.street}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>
                  <Button>
                    <ModeEditIcon />
                  </Button>
                  <Button>
                    <DeleteIcon />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UsersTable;
