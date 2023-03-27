import { ShoppingCartOutlined } from "@mui/icons-material";
import Button from "@mui/material/Button";
import { Container } from "@mui/system";
import { Logo } from "components/Logo";
import Link from "next/link";
import React from "react";
import style from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <>
      <Container maxWidth="lg">
        <nav className={style.nav}>
          <Logo />
          <ul>
            <li>
              <Link href="/home">Home</Link>
            </li>
            <li>
              <Link href="/headphones">Headphones</Link>
            </li>
            <li>
              <Link href="/speakers">Speakers</Link>
            </li>
            <li>
              <Link href="/earphones">Earphones</Link>
            </li>
          </ul>
          <Button>
            <ShoppingCartOutlined />
          </Button>
        </nav>
      </Container>
    </>
  );
};

export default Navigation;
