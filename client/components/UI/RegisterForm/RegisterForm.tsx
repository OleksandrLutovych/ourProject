import { Button, Checkbox, TextField, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";
import React from "react";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import { IUser } from "types/User";
import firebase from "firebase/app";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "pages/_app";
import { emit } from "process";

export const inputStyle = {
  margin: "10px 0",
};
export const formStyle = {
  width: "100%",
  display: "flex",
  padding: "20px 0",
};

const RegisterForm = () => {
  const dispatch = useAppDispatch();

  const style = {
    width: "100%",
    display: "flex",
    padding: "20px 0",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>();

  const onSubmit: SubmitHandler<IUser> = async (data) => {
    console.log(data);
    try {
      const createNewUser = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      const use = await createNewUser.user;
      console.log("Success!");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ ...formStyle, flexDirection: "column" }}
      >
        <TextField
          type="name"
          label="Name"
          variant="outlined"
          sx={inputStyle}
          {...register("name")}
        />
        <TextField
          type="lastName"
          label="Last Name"
          variant="outlined"
          sx={inputStyle}
          {...register("lastName")}
        />
        <TextField
          type="email"
          label="Email Address"
          variant="outlined"
          sx={inputStyle}
          {...register("email")}
        />
        <TextField
          type="password"
          variant="outlined"
          label="Password"
          sx={inputStyle}
          {...register("password")}
        />
        <Typography>
          By registering, you agree to our <a href="">Terms & Conditions</a>,
          <a href="">Privacy and Cookie Policy</a>, and to join our loyalty
          programme
        </Typography>
        <label style={{ ...style, alignItems: "start" }}>
          <Checkbox sx={{ padding: "0 5px 0 0" }} />
          <Typography>
            Sign up and never miss out on exclusive member rewards, tailored new
            arrivals and new launches. Unsubscribe at the bottom of our emails.
            <a href="">Find out more</a>
          </Typography>
        </label>
        <Button type="submit" color="secondary" variant="contained">
          Register
        </Button>
      </form>
    </>
  );
};

export default RegisterForm;
