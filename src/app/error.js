"use client";

export default function Error({ error }) {
  // O Next.js pode passar uma props para detalher o erro { error }

  return (
    <main className="error">
      <h1>An error ocurred!</h1>
      <p>Failed to fetch meal data. Please try again later.</p>
      <br />
      <span>{`Error message: "${error.message}"`}</span>
    </main>
  );
}
