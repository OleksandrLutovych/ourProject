import React from "react";
import styles from "./Products.module.scss";
import { Box, Container } from "@mui/system";
import Card, { IProducts } from "components/UI/Card/Card";

const Products: React.FC = () => {
  const productsData = [
    {
      id: 1,
      name: "headphones",
      img: "./Headphones-home.png",
      path: "",
    },
    {
      id: 2,
      name: "speakers",
      img: "./Speakers-home.png",
      path: "",
    },
    {
      id: 3,
      name: "earphones",
      img: "./Earphones-home.png",
      path: "",
    },
  ];
  return (
    <>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            margin: "108px 0",
            justifyContent: "space-between",
          }}
        >
          {productsData.map((item: IProducts) => (
            <Card
              key={item.id}
              name={item.name}
              path={item.path}
              img={item.img}
              id={item.id}
            />
          ))}
        </Box>
      </Container>
    </>
  );
};

export default Products;
