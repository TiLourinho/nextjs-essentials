import MainHeaderImage from "./main-header-img";
import MainHeaderNav from "./main-header-nav";
import MainHeaderBackground from "./main-header-background";
import styles from "./main-header.module.css";

export default function MainHeader() {
  return (
    <header className={styles.header}>
      <MainHeaderBackground />
      <MainHeaderImage />
      <MainHeaderNav />
    </header>
  );
}
