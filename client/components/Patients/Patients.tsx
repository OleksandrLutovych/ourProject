import React, { useState } from "react";
import { Box, Flex, Button, Text, Input } from "@chakra-ui/react";
import { searchType } from "pages/patients/const";
import { useRouter } from "next/router";
import UsersTable from "components/UsersTable/UsersTable";

function Patients() {
  const router = useRouter();
  const [searchText, setSearchText] = useState<string>("");

  const searchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(searchText);
    setSearchText("");
  };
  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <Box>
      <Flex>
        {searchType.map(({ label, placeholder }) => (
          <Box flexGrow={1} key={label}>
            <Input placeholder={placeholder} onClick={handleChangeSearch}/>
          </Box>
        ))}
        <Button
          variant="outline"
          colorScheme="blue"
          onClick={() => router.push("/patients/new-patient")}
        >
          Create patient
        </Button>
      </Flex>
      <UsersTable searchedUser={searchText} />
    </Box>
  );
}

export default Patients;
