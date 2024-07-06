import React from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebookF,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
  return (
    <div className="container-fluid COlor px-5 py-5 mt-5">
      <div className="row row-gap-4">
        <div className="col-lg-3 text-white d-flex flex-column gap-3 px-0 px-md-5">
          <div>
            <img src="../src/assets/images/logo2.png" alt="" />
          </div>
          <p>
            There are course and event custom post types so you can easily
            create and manage course, events.
          </p>
          <div className={"contacts"}>
            <p>
              <FontAwesomeIcon icon={faPhone} /> +(402) 762 441 83
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} /> info@echooling.com
            </p>
          </div>
        </div>
        <div className={"footerlist col-lg-3 px-0 px-md-5"}>
          <h2 className="text-white">About</h2>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Courses</a>
            </li>
            <li>
              <a href="#">Events</a>
            </li>
            <li>
              <a href="#">Career</a>
            </li>
            <li>
              <a href="#">Become a Teacher</a>
            </li>
            <li>
              <a href="#">Contacts</a>
            </li>
          </ul>
        </div>

        <div className={"footerlist col-lg-3 px-0 px-md-5"}>
          <h2 className="text-white">Useful Links</h2>
          <ul>
            <li>
              <a href="#">Browse Library</a>
            </li>
            <li>
              <a href="#">Library</a>
            </li>
            <li>
              <a href="#">Partners</a>
            </li>
            <li>
              <a href="#">News & Blog</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Tutorials</a>
            </li>
          </ul>
        </div>
        <div className={"footerlist col-lg-3 text-white px-0 px-md-5"}>
          <h2>Newsletter</h2>
          <div>
            <p>Get the latest Echooling news delivered to you inbox</p>
            <div className={"inpBox"}>
              <input type="text" placeholder="Enter Your Email" />
              <div className={"inpArrow"}>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="text-white" />
      <div className="row ">
        <div className="col-12 col-lg-6 text-white d-flex justify-content-center justify-content-lg-start">
          <div className={"copyright"}>
            <p>
              © 2022 <span>Echooling.</span> All Rights Reserved
            </p>
          </div>
        </div>
        <div className="col-12 col-lg-6 text-white">
          <div className="d-flex gap-3 justify-content-center justify-content-lg-end">
            <p className={"follow"}>Follow us</p>
            <div className={"scoial"}>
              <FontAwesomeIcon icon={faFacebookF} />
            </div>
            <div className={"scoial"}>
              <FontAwesomeIcon icon={faTwitter} />
            </div>
            <div className={"scoial"}>
              <FontAwesomeIcon icon={faLinkedinIn} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
