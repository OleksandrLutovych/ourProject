import { Box, Button, Typography } from "@mui/material";
import React from "react";

interface IProductDescription {
  title1: string;
  title2: string;
  descr: string;
}

const ProductDescription: React.FC<IProductDescription> = ({
  title1,
  title2,
  descr,
}) => {
  return (
    <div style={{marginRight: '95px',}}>
      <Box sx={{mb: 2}}>
        <Typography variant="h2">{title1}</Typography>
        <Typography variant="h2">{title2}</Typography>
      </Box>
      <Typography variant="body1" sx={{mb: 3}}>{descr}</Typography>
      <Button variant="contained" color="secondary">
        SEE PRODUCT
      </Button>
    </div>
  );
};

export default ProductDescription;
