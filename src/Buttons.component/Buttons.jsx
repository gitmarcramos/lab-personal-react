import React from "react";
import "./buttons.css";

export default function Buttons({text}) {
  return <button className="btn">{text.text}</button>;
}
