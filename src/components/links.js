import Link from "next/link";

export default function Links() {
  const routes = [
    {
      path: "/",
      label: "Home",
    },
    {
      path: "/meals",
      label: "Meals",
    },
    {
      path: "/meals/share",
      label: "Share",
    },
    {
      path: "/community",
      label: "Community",
    },
  ];

  return (
    <>
      {routes.map(({ path, label }, index) => (
        <>
          <span key={`${label}-${index}`}>
            <Link href={path}>{label}</Link>
          </span>
          {index < routes.length - 1 && <span key={index}> | </span>}
        </>
      ))}
    </>
  );
}
