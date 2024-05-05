"use client";

export default function Error({ error }) {
  // O Next.js pode passar uma props para detalher o erro { error }

  return (
    <main className="error">
      <h1>An error ocurred!</h1>
      <p>Failed to create meal.</p>
      <br />
      <span>{`Error message: "${error.message}"`}</span>
    </main>
  );
}
