import Link from "next/link";

import MealsHeader from "@/src/components/meals/meals-header";
import MealsGrid from "@/src/components/meals/meals-grid";
import styles from "./page.module.css";

export default function MealsPage() {
  return (
    <>
      <MealsHeader />
      <main className={styles.main}>
        <MealsGrid meals={[]} />
      </main>
    </>
  );
}
