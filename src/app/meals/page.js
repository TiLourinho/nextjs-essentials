import { Suspense } from "react";

import MealsHeader from "@/src/components/meals/meals-header";
import MealsGrid from "@/src/components/meals/meals-grid";
import { getMeals } from "@/src/lib/meals";
import styles from "./page.module.css";

async function Meals() {
  const meals = await getMeals();

  return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
  return (
    <>
      <MealsHeader />
      <main>
        <Suspense
          fallback={<p className={styles.loading}>Fetching meals...</p>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
