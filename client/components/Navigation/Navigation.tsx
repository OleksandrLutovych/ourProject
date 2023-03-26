import { AppBar } from "@mui/material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import { Container } from "@mui/system";
import { Logo } from "components/Logo";
import Link from "next/link";
import React from "react";
import style from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <>
      <AppBar color="transparent" className={style.nav}>
        <Container maxWidth="md">
          <Toolbar>
            <Logo />
            <Button></Button>
            <Button></Button>
            <Button></Button>
            <Button></Button>
          </Toolbar>
        </Container>
      </AppBar>

      {/* <nav className={style.nav}>
        <ul>
          <li>
            <Link href="">Home</Link>
          </li>
          <li>
            <Link href="">Headphones</Link>
          </li>
          <li>
            <Link href="">Speakers</Link>
          </li>
          <li>
            <Link href="">Earphones</Link>
          </li>
        </ul>
      </nav> */}
    </>
  );
};

export default Navigation;
