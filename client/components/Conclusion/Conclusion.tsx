import React from "react";
import styles from "./Conclusion.module.scss";
import { Typography } from "@mui/material";

const Conclusion = () => {
  return (
    <div className={styles.conclusion_wr}>
      <div className={styles.conclusion_descr}>
        <div className={styles.conclusion_descr_title}>
          <Typography variant="h3">Bringing you the </Typography>
          <Typography variant="h3">best audio gear</Typography>
        </div>
        <Typography variant="body1">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </Typography>
      </div>
      <img className={styles.conclusion_img} src="ConclusionImg.png" alt="" />
    </div>
  );
};

export default Conclusion;
