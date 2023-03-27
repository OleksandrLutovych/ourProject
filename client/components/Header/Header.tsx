import { Container } from "@mui/material";
import { Box } from "@mui/system";
import { Navigation } from "components/Navigation";
import Button from "components/UI/Button/Button";
import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <Navigation />
      <Container maxWidth="lg">
        <div className={styles.header_content}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "left",
              mt: "129px",
              color: "#FFFFFF",
              width: "50%",
            }}
          >
            <span className={styles.title}>new product</span>
            <h1>XX99 MARK II HEADPHONES</h1>
            <span className={styles.description}>
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </span>
            <Button>SEE PRODUCT</Button>
          </Box>
          <div className={styles.img}></div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
