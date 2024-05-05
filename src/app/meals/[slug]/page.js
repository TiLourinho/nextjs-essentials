import { notFound } from "next/navigation";

import MealDetailsHeader from "@/src/components/meal-details/meal-details-header";
import MealDetails from "@/src/components/meal-details/meal-details";
import { getMeal } from "@/src/lib/meals";

export async function generateMetadata({ params }) {
  const meal = getMeal(params.slug);

  if (!meal) notFound();

  return {
    title: meal.title,
    description: meal.summary,
  };
}

export default function MealPage({ params }) {
  const meal = getMeal(params.slug);

  if (!meal) notFound();

  meal.instructions = meal.instructions.replace(/\n/g, "<br />");

  return (
    <>
      <MealDetailsHeader meal={meal} />
      <MealDetails meal={meal} />
    </>
  );
}
