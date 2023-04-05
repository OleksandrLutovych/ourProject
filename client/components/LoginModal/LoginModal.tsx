import { Modal, Tab, Tabs } from "@mui/material";
import { Box } from "@mui/system";
import { RegisterForm } from "components/UI/RegisterForm";
import React, { useState } from "react";

const LoginModal: React.FC<any> = ({ isOpen, handleClose }) => {
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    borderRadius: "8px",
    backgroundColor: "#FFFFFF",
    boxShadow: 24,
    p: 4,
  };

  const [value, setValue] = useState("signIn");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <h2 id="parent-modal-title">Come on in</h2>
          <Box>
            <Tabs value={value} onChange={handleChange}>
              <Tab value="signIn" label="Sign In" />
              <Tab value="singUp" label="Register user" />
            </Tabs>
          </Box>
          <Box>{value === "signIn" ? <h1>Sign in</h1> : <RegisterForm />}</Box>
        </Box>
      </Modal>
    </>
  );
};

export default LoginModal;
