import React, { ReactNode } from "react";
import styles from "./Button.module.scss";

interface IButton {
  children: ReactNode;
  onClick?: () => void;
  type?: "submit" | "reset" | "button";
  style?: any;
}

const Button: React.FC<IButton> = ({ children, onClick, type, style }) => {
  return (
    <button onClick={onClick} className={styles.btn} type={type} style={style}>
      {children}
    </button>
  );
};

export default Button;
