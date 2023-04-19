import { Checkbox, TextField, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";
import React from "react";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import { IUser } from "types/User";
import { Button } from "../Button";
import { createUser } from "redux-state/reducers/UsersReducer";

const RegisterForm = () => {
  
const dispatch = useAppDispatch()
const allUsers = useAppSelector(state => state.users)

  const style = {
    width: "100%",
    display: "flex",
    padding: "20px 0",
  };
  const inputStyle = {
    margin: "10px 0",
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<IUser>();

  const onSubmit: SubmitHandler<IUser> = (data) => {
    fetch('https://localhost:57680/Api/CreateNewUser', {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      }).then(response => console.log(response.json()))
    console.log(data)
    // return dispatch(createUser(data))
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ ...style, flexDirection: "column" }}
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
        <Button type={"submit"}>Register</Button>
        
      </form>
    </>
  );
};

export default RegisterForm;
