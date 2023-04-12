import React, { ReactNode } from "react";
import styles from "./Button.module.scss";

interface IButton {
  children: ReactNode;
  onClick?: () => void;
  type?: "submit" | "reset" | "button";
}

const Button: React.FC<IButton> = ({ children, onClick, type }) => {
  return (
    <button onClick={onClick} className={styles.btn} type={type}>
      {children}
    </button>
  );
};

export default Button;
