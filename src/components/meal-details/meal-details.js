import styles from "./meal-details.module.css";

export default function MealDetails({ meal }) {
  return (
    <main>
      <p
        className={styles.instructions}
        dangerouslySetInnerHTML={{
          __html: meal.instructions,
        }}
      />
    </main>
  );
}
