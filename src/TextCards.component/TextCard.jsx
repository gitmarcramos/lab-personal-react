import React from "react";
import "./TextCard.css";
import Image from "../Image.component/Image";

export default function TextCard({ data }) {
  return (
    <div className="TextCard">
      <Image source={data.source} />
      <h2>{data.title}</h2>
      <p>{data.body}</p>
    </div>
  );
}
