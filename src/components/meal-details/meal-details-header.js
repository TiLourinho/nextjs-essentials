import Image from "next/image";

import styles from "./meal-details.module.css";

export default function MealDetailsHeader({ meal }) {
  return (
    <header className={styles.header}>
      <div className={styles.image}>
        <Image src={meal.image} alt={meal.title} fill />
      </div>
      <div className={styles.headerText}>
        <h1>{meal.title}</h1>
        <p className={styles.creator}>
          by <a href={`mailto: ${meal.creator_email}`}>{meal.creator}</a>
        </p>
        <p className={styles.summary}>{meal.summary}</p>
      </div>
    </header>
  );
}
