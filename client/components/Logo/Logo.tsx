import Link from "next/link";
import React from "react";
import styles from "./Logo.module.scss";

const Logo = () => {
  return (
    <>
      <Link href="/" className={styles.logo} />
    </>
  );
};

export default Logo;
