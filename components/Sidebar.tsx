import React from "react";
import Links from "../constants/links";
import SocialLinks from "../constants/socials";
import { FaTimes } from "react-icons/fa";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <aside className={`sidebar ${isOpen ? "show-sidebar" : ""}`}>
      <button className="close-btn" onClick={toggleSidebar}>
        <FaTimes />
      </button>
      <div className="side-container">
        <Links styleClass={`${isOpen ? "sidebar-links" : ""}`} />
        <SocialLinks styleClass={`${isOpen ? "sidebar-icons" : ""}`} />
      </div>
    </aside>
  );
};

export default Sidebar;