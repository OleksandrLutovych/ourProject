import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";
import Link from "next/link";
import React, { useEffect } from "react";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import { getUsersFetch } from "redux-state/reducers/UsersReducer";
import {
  Button,
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

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
    <TableContainer>
      <Table>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Address</Th>
            <Th>Phone</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {searchUs &&
            searchUs.map((user) => (
              <Tr key={user.name}>
                <Th>
                  <Link href={`/patient`}>{user.name}</Link>
                </Th>
                <Th>{user.email}</Th>
                <Th>{user.address.street}</Th>
                <Th>{user.phone}</Th>
                <Th>
                  <Button>
                    <ModeEditIcon />
                  </Button>
                  <Button>
                    <DeleteIcon />
                  </Button>
                </Th>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default UsersTable;
