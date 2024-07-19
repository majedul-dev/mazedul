import React from "react";
import SocialLinks from "../constants/socials";
import Link from "next/link";
import Image from "next/image";
import hero from "../public/hero-img.png";

const Hero = () => {
  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>I am majedul</h1>
            <h4>freelance modern web designer & developer</h4>
            <Link href="/contact" className="btn">
              contact me
            </Link>
            <a
              href="https://drive.google.com/file/d/1M4-EXvpwmSTTSDrpUgvDU_gB9QtRTLma/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="btn"
              style={{ marginLeft: "1rem" }}
            >
              My Resume
            </a>
            <SocialLinks />
          </div>
        </article>
        <Image src={hero} className="hero-img" alt="hero image" />
      </div>
    </header>
  );
};

export default Hero;