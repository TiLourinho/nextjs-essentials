import Link from "next/link";

export default function MainHeaderNav() {
  return (
    <nav>
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
