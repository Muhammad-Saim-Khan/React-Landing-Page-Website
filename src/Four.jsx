import React from "react";
import "./App.css";
import CampusLeft from "./Three";
import Button from "./botton";
import Campus1 from "../public/two.png";
import Campus2 from "../public/pencil.svg";
import Campus3 from "../public/growth.svg";
import Campus4 from "../public/Setting.svg";
import Campus5 from "../public/strip.png";
export default function Campus() {
  return (
    <div className={"campus container-fluid mt-5"}>
      <div className="row">
        <center>
          <div className="col-12">
            <h1 className={"heading"}>Campus Life</h1>
            <img src={Campus5} alt="" />
          </div>
        </center>
      </div>

      <div className="row mt-5 row-gap-5 ">
        <div className="col-lg-7  bg-white d-flex flex-column justify-content-center gap-2 px-1 px-lg-5 pb-4 pb-lg-0 pt-5">
          <CampusLeft src={Campus2} />
          <hr />
          <CampusLeft src={Campus3} />
          <hr />
          <CampusLeft src={Campus4} />
        </div>
        <div className="col-lg-5 d-flex justify-content-center px-0 px-lg-4 object-fit-cover">
          <img src={Campus1} alt="" className="w-100" />
        </div>
      </div>

      <div className="row my-5 pb-5">
        <div className="col-12 text-center w-100">
          <Button text="More About Compus Life" />
        </div>
      </div>
    </div>
  );
}
