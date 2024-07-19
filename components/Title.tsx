import React from "react";

interface titleProps {
  title: string;
}

const Title: React.FC<titleProps> = ({ title }) => {
  return (
    <div className="section-title">
      <h2>{title || "default title"}</h2>
      <div className="underline"></div>
    </div>
  );
};

export default Title;