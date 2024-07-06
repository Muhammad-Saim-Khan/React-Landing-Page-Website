import React from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Review() {
  return (
    <div className={`container-fluid px-4 px-md-5 py-5 `}>
      <div className="row">
        <div className="col-12 text-center">
          <div className="container mt-5">
            <div className="row">
              <div className="col-12 d-flex flex-column align-items-center ">
                <h1 className={"heading"}>What our student saying</h1>
                <img src="../src/assets/images/strip.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={"row row-gap-5 reviewContain px-0 px-md-3 py-4 mt-5"}>
        <div className="col-12 col-lg-3 text-center text-lg-start">
          <div className="px-0 px-md-3">
            <img src="../src/assets/images/Three.png" />
          </div>
        </div>
        <div className="col-12 col-lg-7 d-flex flex-column gap-4 text-center text-lg-start">
          <div className={"Name"}>
            <h5>Justin Case</h5>
            <span>Student</span>
          </div>
          <div className={"review"}>
            <p className="fs-5 ">
              Nulla porttitor accumsan tincidunt. vamus magna justo, lacinia
              eget consectetur sed, convallis at tellus. Curabitur non nulla sit
              amet nisl tempus convallis quis ac lectus. Quisque velit nisi,
              pretium ut lacinia in.
            </p>
          </div>
          <div className={"Rating"}>
            <span className={"stars"}>
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </span>
            <span className="fw-bold">4.9</span>
            <span className="fw-sm">(14 Reviews)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
