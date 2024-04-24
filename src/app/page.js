import Link from "next/link";

import Header from "@/src/components/header";

export default function Home() {
  return (
    <main>
      <Header />
      <p>🔥 Let&apos;s get started! 🔥</p>
      <span>
        <Link href="/about">About Us</Link>
      </span>{" "}
      <span>
        <Link href="/blog">Blog</Link>
      </span>
    </main>
  );
}
