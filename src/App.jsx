import React from "react";
import "./App.css";
import DarkVariantExample from "./Slider.jsx";
import NavScrollExample from "./Navbar.jsx";
import Cards from "./One.jsx";
import Platform from "./Two.jsx";
import Campus from "./Four.jsx";
import Courses from "./Five.jsx";
import States from "./Six.jsx";
import Review from "./Seven.jsx";
import Blogs from "./Eight.jsx";
import Footer from "./Nine.jsx";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebookF,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const App = () => {
  return (
    <div>
      {/* Header Start */}
      <header>
        <div className="gap">
          <p>
            <FontAwesomeIcon icon={faPhone} />
            &nbsp; (+1) 3344 999 999
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} />
            &nbsp; info@reactheme.com
          </p>
        </div>
        <div className="icon">
          <FontAwesomeIcon icon={faFacebookF} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faLinkedinIn} />
        </div>
      </header>
      {/* Header End */}
      {/* Navbar Start */}
      <NavScrollExample />
      {/* Navbar End */}
      {/* Slider Start */}
      <DarkVariantExample />
      {/* Slider End */}
      {/* Card Start */}
      <Cards />
      {/* Card End */}
      {/* Platform Start */}
      <Platform />
      {/* Platform End */}
      {/* Campus Start */}
      <Campus />
      {/* Campus End */}
      {/* Course Start */}
      <Courses />
      {/* Course End */}
      {/* Enrolled Start */}
      <States />
      {/* Enrolled End */}
      {/* Review Start */}
      <Review />
      {/* Review End */}
      {/* Blog Start */}
      <Blogs />
      {/* Blog End*/}
      {/* Footer Start */}
      <Footer />
      {/* Footer End */}
    </div>
  );
};
export default App;
