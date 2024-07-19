import Link from "next/link";
import React from "react";

interface Props {
  styleClass?: string; // The styleClass prop is optional
}

const data = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "projects",
    url: "/projects",
  },
  {
    id: 4,
    text: "about",
    url: "/about",
  },
  {
    id: 5,
    text: "contact",
    url: "/contact",
  },
];

const tempLinks = data.map((link) => (
  <li key={link.id}>
    <Link href={link.url}>{link.text}</Link>
  </li>
));

const PageLinks: React.FC<Props> = ({ styleClass }) => {
  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>
      {tempLinks}
    </ul>
  );
};

export default PageLinks;