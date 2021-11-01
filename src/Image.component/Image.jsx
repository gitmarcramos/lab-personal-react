import React from "react";
import "./Image.css";

export default function Image({ source }) {
  return (
    <div>
      <img className="image" src={source.src} alt={source.alt} />
    </div>
  );
}
