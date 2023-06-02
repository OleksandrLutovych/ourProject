import { Button, TextField, Typography } from "@mui/material";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IUser } from "types/User";
import { formStyle, inputStyle, style } from "./style";

const CreatePatient = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>();

  const onSubmit: SubmitHandler<IUser> = async (data) => {
    console.log(data);
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
          type="email"
          label="Email Address"
          variant="outlined"
          sx={inputStyle}
          {...register("email")}
        />

        <Typography>
          By registering, you agree to our <a href="">Terms & Conditions</a>,
          <a href="">Privacy and Cookie Policy</a>, and to join our loyalty
          programme
        </Typography>
        <label style={{ ...style, alignItems: "start" }}>
          <Typography>
            Sign up and never miss out on exclusive member rewards, tailored new
            arrivals and new launches. Unsubscribe at the bottom of our emails.
            <a href="">Find out more</a>
          </Typography>
        </label>
        <Button type="submit" color="secondary" variant="contained">
          Create
        </Button>
      </form>
    </>
  );
};

export default CreatePatient;
