import { Button, Checkbox, TextField, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { formStyle, inputStyle } from "../RegisterForm/RegisterForm";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useAuth0 } from "@auth0/auth0-react";

const SignInForm = () => {
  const { register, handleSubmit, formState } = useForm();
  const onSubmit = (data: any) => console.log(data);
  const { loginWithRedirect } = useAuth0();
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ ...formStyle, flexDirection: "column" }}
      >
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
        <label style={{ ...formStyle, alignItems: "start" }}>
          <Checkbox sx={{ padding: "0 5px 0 0" }} />
          <Typography>
            Keep me signed in.
            <a href="">What's this?</a>
          </Typography>
        </label>
        <Button>Forgot your password?</Button>

        <Button variant="contained" color="secondary" type="submit">
          Sign in
        </Button>

        <Typography>OR</Typography>
        <Button variant="outlined" color="inherit" startIcon={<GoogleIcon />}>
          <b>Continue With Google</b>
        </Button>
        <Button variant="outlined" color="inherit" startIcon={<AppleIcon />}>
          Continue With Apple
        </Button>
        <Button variant="outlined" color="inherit" startIcon={<FacebookIcon />}>
          Continue With Facebook
        </Button>
      </form>
    </>
  );
};

export default SignInForm;
