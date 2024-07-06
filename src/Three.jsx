import React from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
export default function CampusLeft({ src }) {
  return (
    <div className="container">
      <div className="row row-gap-3">
        <div className=" col-lg-1 col-12">
          <img src={src} alt="" />
        </div>
        <div className={"campuscompo col-lg-8 col-12"}>
          <h5>Do More,Stress Less</h5>
          <p className="fs-6">
            Why I say old chap that is spiffing he legged it in my flat easy
            peasy.
          </p>
        </div>
        <div
          className={
            "col-lg-2 col-12 d-flex justify-content-start justify-content-lg-end"
          }
        >
          <div className={"arrowLeft"}>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>
      </div>
    </div>
  );
}
