import React from "react";
import Link from "next/link";
import logo from "../public/icons/logo.svg";
import Image from "next/image";
import PageLinks from "@/constants/links";
import { FaAlignRight } from "react-icons/fa";

interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link href="/">
            <Image src={logo} alt="logo" />
          </Link>
          <button type="button" className="toggle-btn" onClick={toggleSidebar}>
            <FaAlignRight />
          </button>
        </div>
        <PageLinks styleClass="nav-links"></PageLinks>
      </div>
    </nav>
  );
};

export default Navbar;