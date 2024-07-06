import React from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function Blogs() {
  const blogObj = [
    {
      src: "../src/assets/images/Blog1.jpg",
      date: "April 18",
      heading: "Education",
      title: "Kids future Schools & Corona Prevent to Growth",
      author: "Charlie Doyle",
    },
    {
      src: "../src/assets/images/Blog2.jpg",
      date: "April 18",
      heading: "Education",
      title: "Echooling future Schools & social Innovation",
      author: "Charlie Doyle",
    },
    {
      src: "../src/assets/images/Blog3.jpg",
      date: "April 18",
      heading: "Education",
      title: "7 Learning system design tips For better eLearning",
      author: "Charlie Doyle",
    },
    {
      src: "../src/assets/images/Blog1.jpg",
      date: "April 18",
      heading: "Education",
      title: "Why schools should continue remote study",
      author: "Charlie Doyle",
    },
  ];
  return (
    <div className={"container-fluid blogs px-3 px-md-5"}>
      <div className="row">
        <div className="col-12 text-center">
          <div className="container mt-5">
            <div className="row">
              <div className="col-12 d-flex flex-column align-items-center ">
                <h1 className={"heading"}>Echooling News and Blogs</h1>
                <img src="../src/assets/images/strip.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        {blogObj.map((e, i) => {
          return (
            <div className={"col-12 col-lg-3 mt-5"} key={i}>
              <div className={"blogCard"}>
                <div className={"blogPhoto"}>
                  <img src={e.src} alt="" className="w-100" />
                  <div className={"date"}>{e.date}</div>
                </div>
                <div className={"blogsDetails px-2 py-2"}>
                  <h6>{e.heading}</h6>
                  <p className="">{e.title}</p>
                  <span>
                    {" "}
                    <FontAwesomeIcon icon={faUser} />
                    {e.author}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
