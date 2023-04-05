import { ShoppingCartOutlined } from "@mui/icons-material";
import PersonIcon from "@mui/icons-material/Person";
import Button from "@mui/material/Button";
import { Container } from "@mui/system";
import { LoginModal } from "components/LoginModal";
import { Logo } from "components/Logo";
import Link from "next/link";
import React, { useState } from "react";
import style from "./Navigation.module.scss";

const Navigation = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

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
          <div className="">
            <Button onClick={handleOpen}>
              <PersonIcon />
            </Button>
            <Button>
              <ShoppingCartOutlined />
            </Button>
          </div>
        </nav>
      </Container>
      
      <LoginModal isOpen={isModalOpen} handleClose={handleClose} />
    </>
  );
};

export default Navigation;
