import Link from "next/link";

import styles from "./main-header.module.css";

export default function MainHeaderNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href={"/meals"}>Browse Meals</Link>
        </li>
        <li>
          <Link href={"/community"}>Foodies Community</Link>
        </li>
      </ul>
    </nav>
  );
}
