import Link from "next/link";

import logoImg from "@/src/assets/logo.png";

export default function MainHeaderImage() {
  return (
    <Link href={"/"}>
      <img src={logoImg.src} alt="A plate with food on it" />
      NextLevel Food
    </Link>
  );
}
