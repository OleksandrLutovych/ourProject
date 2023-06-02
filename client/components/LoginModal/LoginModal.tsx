import { IconButton, Modal, Tab, Tabs, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { RegisterForm } from "components/UI/RegisterForm";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { SignInForm } from "components/UI/SignInForm";

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
        <Box sx={{ ...style, width: 400, height: 700 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
            <Typography variant="h4">Come on in</Typography>
            <IconButton color="default" onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Box>
            <Tabs value={value} onChange={handleChange}>
              <Tab value="signIn" label="Sign In" />
              <Tab value="singUp" label="Register user" />
            </Tabs>
          </Box>
          <Box>{value === "signIn" ? <SignInForm /> : <RegisterForm />}</Box>
        </Box>
      </Modal>
    </>
  );
};

export default LoginModal;
