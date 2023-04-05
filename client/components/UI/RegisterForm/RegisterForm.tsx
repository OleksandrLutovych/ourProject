import { Checkbox, TextField, Typography } from "@mui/material";
import { display } from "@mui/system";
import React from "react";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import { Button } from "../Button";

type Inputs = {
  name: string;
  email: string;
  password: string;
};

const RegisterForm = () => {
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
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ ...style, flexDirection: "column" }}
      >
        <TextField
          type="text"
          label="Name"
          variant="outlined"
          sx={inputStyle}
          {...register('name')}
        />
        <TextField
          type="email"
          label="Email Address"
          variant="outlined"
          sx={inputStyle}
          {...register('email')}
        />
        <TextField
          type="password"
          variant="outlined"
          label="Password"
          sx={inputStyle}
          {...register('password')}
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
        <input type="submit" />
      </form>
    </>
  );
};

export default RegisterForm;
