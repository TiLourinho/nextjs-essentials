import MealsHeader from "@/src/components/meals/meals-header";
import MealsGrid from "@/src/components/meals/meals-grid";
import { getMeals } from "@/src/lib/meals";
import styles from "./page.module.css";

export default async function MealsPage() {
  const meals = await getMeals();

  return (
    <>
      <MealsHeader />
      <main className={styles.main}>
        <MealsGrid meals={meals} />
      </main>
    </>
  );
}
