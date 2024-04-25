import Link from "next/link";
import Image from "next/image";

import logoImg from "@/src/assets/logo.png";
import styles from "./main-header.module.css";

export default function MainHeaderImage() {
  return (
    <Link className={styles.logo} href={"/"}>
      <Image src={logoImg} alt="A plate with food on it" priority />
      NextLevel Food
    </Link>
  );
}
