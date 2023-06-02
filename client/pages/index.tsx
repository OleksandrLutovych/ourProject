import { Box, Button, Container, Typography } from "@mui/material";
import { axiosInstance } from "api/instance";
import { Header } from "components";
import { Conclusion } from "components/Conclusion";
import { Footer } from "components/Footer";
import { ProductDescription } from "components/ProductDescription";
import { Products } from "components/Products";
import React from "react";
import styles from "styles/pages/Home.module.scss";

const index = () => {
  return (
    <div>
      <Header />
      <Products />
      <main>
        <Container maxWidth="lg">
          <div className={styles.orange_card}>
            <img src="ZX9Speaker.png" alt="ZX9Speaker" />
            <ProductDescription
              title1="ZX9"
              title2="SPEAKER"
              descr="Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound."
            />
          </div>
          <div className={styles.grey_card}>
            <div className={styles.grey_card_descr}>
              <Typography variant="h4" sx={{ mb: 3 }}>
                ZX7 SPEAKER
              </Typography>
              <Button variant="contained" color="secondary">
                SEE PRODUCT
              </Button>
            </div>
          </div>
          <div className={styles.double_card}>
            <Box sx={{ width: "50%", borderRadius: "8px" }}>
              <img src="YX1wireless.png" alt="" />
            </Box>
            <Box
              sx={{
                backgroundColor: "#F1F1F1",
                ml: 2,
                width: "50%",
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "column",
                borderRadius: "8px",
                padding: "101px 198px 101px 95px",
              }}
            >
              <Typography variant="h4" sx={{ mb: 3 }}>
                YX1 EARPHONES
              </Typography>
              <Button variant="contained" color="secondary">
                SEE PRODUCT
              </Button>
            </Box>
          </div>
          <Conclusion />
        </Container>
      </main>
      <Footer />
    </div>
  );
};

// export async function getServerSideProps() {
//   const response = await axiosInstance.get('');
//   const data = response.data;

//   return {
//     props: {
//       data,
//     }
//   }
// }

export default index;
