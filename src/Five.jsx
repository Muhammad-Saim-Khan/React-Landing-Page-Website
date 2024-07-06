import React from "react";
import "./App.css";
import Button from "./botton";

export default function Courses() {
  const Courses = [
    {
      src: "../src/assets/images/Course1.png",
      name: "UX Design",
      lesson: "5 lesseons",
      title: "Dave conservatoire is the Entirely free online",
      std: "56 Students",
      price: "$72.00",
    },
    {
      src: "../src/assets/images/Course2.png",
      name: "UX Design",
      lesson: "5 lesseons",
      title: "Strategy law and Organization foundation",
      std: "77 Students",
      price: "$68.00",
    },
    {
      src: "../src/assets/images/Course3.png",
      name: "UX Design",
      lesson: "5 lesseons",
      title: "Python for Data Science & Machine Learning",
      std: "77 Students",
      price: "$86.00",
    },
    {
      src: "../src/assets/images/Course4.png",
      name: "UX Design",
      lesson: "4 lesseons",
      title: "The complete web develop Ment bootcamp.",
      std: "77 Students",
      price: "$68.00",
    },
  ];
  return (
    <div>
      {" "}
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 d-flex flex-column align-items-center ">
            <h1 className={"heading"}>Popular Courses</h1>
            <img src="../src/assets/images/strip.png" alt="" />
          </div>
        </div>
      </div>
      <div className={`container-fluid px-3 px-md-5`}>
        <div className="row row-gap-4 mt-5">
          {Courses.map((e, i) => {
            return (
              <div className="col-lg-3" key={i}>
                <div className={"CourseBg"}>
                  <div>
                    <img src={e.src} alt="" className="w-100" />
                  </div>
                  <div className={"CourseBg px-3 py-2"}>
                    <div className={"uxDesign"}>
                      <h5>{e.name}</h5>
                      <p>{e.lesson}</p>
                    </div>
                    <div className={"courseTile"}>
                      <p className="fs-5">{e.title}</p>
                    </div>
                    <hr />
                    <div className={"price"}>
                      <p>{e.std}</p>
                      <h4>{e.price}</h4>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="row text-center mt-5">
          <Button text="Veiw All Courses" />
        </div>
      </div>
    </div>
  );
}
