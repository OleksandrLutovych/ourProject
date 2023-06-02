import {
  Box,
  Button,
  IconButton,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import UserNavigation from "components/UserNavigation/UserNavigation";
import UsersTable from "components/UsersTable/UsersTable";
import React, { useState } from "react";
import { searchType } from "./const";
import { useRouter } from "next/router";

const index = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [searchPhone, setsearchPhone] = useState<string>("");
  const [searchEmail, setSsearchEmail] = useState<string>("");
  const router = useRouter()
  const searchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(searchText);
    setSearchText("");
  };
  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <div>
      <UserNavigation>
        <Box>
          <Box sx={{ display: "flex", my: 2 }}>
            {searchType.map(({ label, placeholder }) => (
              <Box flexGrow={1}>
                <Typography>{label}</Typography>
                <Paper component="form" onSubmit={searchSubmit} sx={{ mx: 1, width: "250px" }}>
                  <InputBase
                    sx={{ ml: 1, flex: 1, }}
                    placeholder={placeholder}
                    value={searchText}
                    onChange={handleChangeSearch}
                  />
                  <IconButton type="submit" aria-label="search">
                    <SearchIcon />
                  </IconButton>
                </Paper>
              </Box>
            ))}
            <Button variant="contained" onClick={() => router.push('/patients/new-patient')}>Create patient</Button>
          </Box>
        </Box>
        <UsersTable searchedUser={searchText} />
      </UserNavigation>
    </div>
  );
};

export default index;
