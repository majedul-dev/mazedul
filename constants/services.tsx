import React from "react";
import { FaCode, FaSketch } from "react-icons/fa";
import { AiOutlineAntDesign } from "react-icons/ai";

interface Service {
  id: number;
  icon: JSX.Element;
  title: string;
  text: string;
}

const services: Service[] = [
  {
    id: 3,
    icon: (
      <span className="service-icon">
        <AiOutlineAntDesign />
      </span>
    ),
    title: "Front End",
    text: `I do front-end with HTML, CSS, and JavaScript for Static websites. But I am an expert on React/Redux for front-end development with complete On-Page SEO optimized. I will provide the most priority on Responsive design and form validation and also other most important staff.`,
  },
  {
    id: 2,
    icon: (
      <span className="service-icon">
        <FaSketch />
      </span>
    ),
    title: "Back End",
    text: `I am an expert for back-end development on Node/Express Js. I will create Rest APIs for website/web-application such as e-commerce and blog website. The APIs will have an authentication system for users and admin. An admin will control the application with a protected route.`,
  },
  {
    id: 1,
    icon: (
      <span className="service-icon">
        <FaCode />
      </span>
    ),
    title: "Full-stack Development",
    text: `I do full-stack development with MERN stacks. For full-stack projects, the project will be divided into two parts for distinguishing the price one for the front-end and another for the back-end. The application shall have a CMS for admin. With content upload, and ready to use the complete application will be handover to the customer.`,
  },
];

export default services;