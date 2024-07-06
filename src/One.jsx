import React from "react";
import "./App.css";
import Card1 from "../public/Card1.png";
import Card2 from "../public/Card2.png";
import Card3 from "../public/Card3.png";
import Card4 from "../public/Card4.png";
import Card5 from "../public/strip.png";
export default function Cards() {
  const cardObj = [
    {
      src: Card1,
      title: "Let's Talk Science",
    },
    {
      src: Card2,
      title: "Innovative Course",
    },
    {
      src: Card3,
      title: "Cloud Storage",
    },
    {
      src: Card4,
      title: "Online Education",
    },
  ];

  return (
    <div>
      {" "}
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 d-flex flex-column align-items-center ">
            <h1 className={"heading"}>Academics</h1>
            <img src={Card5} alt="" />
          </div>
        </div>
      </div>
      <div className="container-fluid  mt-5">
        <div className="row px-2  px-md-5 row-gap-5">
          {cardObj.map((e, i) => (
            <div className="card col-lg-3 col-12" key={i}>
              <div className="px-3">
                <div className="imgDiv">
                  <img src={e.src} alt={e.title} />
                  <div className="overlay"></div>
                </div>
                <div className="cardDetails">
                  <p>{e.title}</p>
                  <p>Learn More</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
