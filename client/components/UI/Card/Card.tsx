import React from "react";
import styles from "./Card.module.scss";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

export interface IProducts {
  id: number;
  name: string;
  img: string;
  path: string;
}

const Card: React.FC<IProducts> = ({ name, img, path }) => {
  return (
    <div className={styles.card_wrapper}>
      <img src={img} alt={name} className={styles.main_img}/>
      <div className={styles.bottom_part}>
        <span className={styles.description}>{name}</span>
        <a href={path} className={styles.card_button}>
          <span>shop</span>
          <ArrowForwardIosOutlinedIcon />
        </a>
      </div>
    </div>
  );
};

export default Card;
