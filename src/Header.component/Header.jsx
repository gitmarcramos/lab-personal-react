import React from "react";
import "./header.css";
import Image from "../Image.component/Image";
import { allImages } from "../App";

export default function Header() {
  return (
    <header className="header">
      <Image source={allImages[4]} />
      <Image source={allImages[5]} />
    </header>
  );
}
