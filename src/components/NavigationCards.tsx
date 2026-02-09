import Link from "next/link";

const items = [
  {
    title: "About Me",
    href: "/about",
    img: "/images/nav-about.jpg",
  },
  {
    title: "Portfolio/Work",
    href: "/work",
    img: "/images/nav-publications.jpg",
  },
  {
    title: "Brand",
    href: "/brand",
    img: "/images/nav-experience.jpg",
  },
  {
    title: "Services",
    href: "/Services",
    img: "/images/nav-service.jpg",
  },
];

export default function NavigationCards() {
  return (
    <section className="navSection">
      <h2>Navigation</h2>

      <div className="navGrid">
        {items.map((item) => (
          <Link key={item.title} href={item.href} className="navCard">
            <img src={item.img} alt={item.title} />
            <div className="overlay" />
            <span>{item.title}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
