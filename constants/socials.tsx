import React from "react";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaGithubSquare,
} from "react-icons/fa";

interface SocialLink {
  id: number;
  url: string;
}

const data: SocialLink[] = [
  {
    id: 1,
    url: "https://web.facebook.com/majedul956",
  },
  {
    id: 2,
    url: "https://www.linkedin.com/in/majedul-dev",
  },
  {
    id: 5,
    url: "https://twitter.com/mazedul_dev",
  },
  {
    id: 3,
    url: "https://github.com/majedul-dev",
  },
];

interface Props {
  styleClass?: string;
}

const SocialLinks: React.FC<Props> = ({ styleClass }) => {
  const socialIconClass = "social-icon"; // Class for social icons
  const links = data.map((link) => {
    let icon = null;

    switch (link.id) {
      case 1:
        icon = <FaFacebookSquare />;
        break;
      case 2:
        icon = <FaLinkedin />;
        break;
      case 5:
        icon = <FaTwitterSquare />;
        break;
      case 3:
        icon = <FaGithubSquare />;
        break;
      default:
        break;
    }

    return (
      <li key={link.id}>
        <a
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <span className={socialIconClass}>{icon}</span>
        </a>
      </li>
    );
  });

  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  );
};

export default SocialLinks;