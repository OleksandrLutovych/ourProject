import Link from "next/link";
import React from "react";
import styles from "./Logo.module.scss";

const Logo = () => {
  return (
    <div>
      <Link href="/" className={styles.logo} />
    </div>
  );
};

export default Logo;
