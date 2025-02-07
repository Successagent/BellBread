import React, { useState } from "react";
import "./Header.css";
import HeaderLogo from "../../asset/bell_bread.png";
import { HashLink as Link } from "react-router-hash-link";
import Button from "../Button/Button";
import hamburger from "../../asset/hamburger.svg";
import Motion from "../Motion";
import MotionX from "../MotionX";
import MotionRight from "../MotionRight";
import close from "../../asset/close.png";

const Header = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    setVisible(!visible);
  };

  return (
    <header>
      <div className="header_logo">
        <Motion>
          {/* <Link to={"/"}> */}
          <img src={HeaderLogo} alt="" />
          {/* </Link> */}
        </Motion>
      </div>
      <MotionX>
        <ul className="nav_list">
          <Link smooth to={"#about"}>
            About us
          </Link>
          <Link smooth to={"#process"}>
            Process
          </Link>
          <Link smooth to={"#faq"}>
            FAQs
          </Link>
        </ul>
      </MotionX>
      <MotionRight>
        <Button
          background={"white"}
          height={50}
          width={180}
          title={"Contact us"}
        />
      </MotionRight>
      <ul className={`mobile_list ${visible ? "open_menu" : ""}`}>
        <MotionRight>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: 25,
            }}
          >
            <img src={close} alt="" onClick={toggleVisible} />
            <Link
              smooth
              onClick={toggleVisible}
              to={"#about"}
              className="link_1"
            >
              About us
            </Link>
            <Link
              smooth
              onClick={toggleVisible}
              to={"#process"}
              className="link_2"
            >
              Process
            </Link>
            <Link smooth onClick={toggleVisible} to={"#faq"} className="link_3">
              FAQs
            </Link>
            <Link
              smooth
              onClick={toggleVisible}
              to={"#contact"}
              className="link_4"
            >
              Contact us
            </Link>
          </div>
        </MotionRight>
      </ul>
      <img
        className="hamburger"
        onClick={toggleVisible}
        src={hamburger}
        alt=""
      />
    </header>
  );
};

export default Header;
