import { ShoppingCartOutlined } from "@mui/icons-material";
import PersonIcon from "@mui/icons-material/Person";
import Button from "@mui/material/Button";
import { Container } from "@mui/system";
import { LoginModal } from "components/LoginModal";
import { Logo } from "components/Logo";
import React, { useState } from "react";
import { AppBar, Box, Toolbar } from "@mui/material";
import { NAVITEMS } from "lib/utils/constants";
import { styles } from "./styles";
import { useRouter } from "next/router";
import MenuIcon from "@mui/icons-material/Menu";

const Navigation = () => {
  const router = useRouter();
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  return (
    <>
      <AppBar
        component="nav"
        sx={styles}
        color="transparent"
        position="relative"
        elevation={0}
      >
        <Container maxWidth="lg">
          <Toolbar className="toolbar">
            <Box>
              <Button className="resp-menu">
                <MenuIcon />
              </Button>
              <Logo />
            </Box>
            <Box>
              {NAVITEMS.map((navitem) => (
                <Button
                  key={navitem.title}
                  className="link-btn"
                  onClick={() => router.push(navitem.path)}
                >
                  {navitem.title}
                </Button>
              ))}
            </Box>
            <Box>
              <Button className="users-btn" onClick={handleOpen}>
                <PersonIcon />
              </Button>
              <Button className="users-btn">
                <ShoppingCartOutlined />
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <LoginModal isOpen={isModalOpen} handleClose={handleClose} />
    </>
  );
};

export default Navigation;
