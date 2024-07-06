import React from "react";
import "./App.css";

export default function Button({ text }) {
  return (
    <div className={"customBtn"}>
      <button className="">
        {text}
        <i className="ri-arrow-right-line"></i>
      </button>
    </div>
  );
}
