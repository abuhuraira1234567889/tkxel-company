import React, { useState } from "react";
import "./navbar.css";
// import logo from "../../component/";

import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function () {
  const [click, setClick] = useState(false);
  const handleclick = () => {
    setClick(!click);
  };
  return (
    <>
      <div className="navbar-wrapper">
        <div className="navbar-main">
          <div className="navbar-logo">
            <img src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-5a0369c/wp-content/themes/tkxel/assets/images/Logo-WhiteBackground.svg" />
          </div>
          <div className={click ? "navbar-menu" : "navbar-none"}>
            <ul>
              <li>
                <a href="">Services</a>
              </li>
              <li>
                <a href=""> Client </a>
              </li>
              <li>
                <a href="">Company </a>
              </li>
              <li>
                <a href=""> Podcast </a>
              </li>
              <li>
                <a href="">Resource </a>
              </li>
              <li>
                <a href=""> 5715548110 </a>
              </li>

              <button>Contact</button>
            </ul>
          </div>
          <div className="response" onClick={handleclick}>
            <FontAwesomeIcon
              className="icon-clr"
              icon={click ? faXmark : faBars}
            />
          </div>
        </div>
      </div>
    </>
  );
}
