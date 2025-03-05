import React from "react";
import GetStarted from "../GetStarted";
import HeaderLogo from "../../asset/footerlogo.png";
import { MdLocationPin } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import facebook from "../../asset/facebook.svg";
import instagram from "../../asset/instagram.svg";
import twitter from "../../asset/twitter.svg";
import Motion from "../Motion";
import MotionX from "../MotionX";
import MotionRight from "../MotionRight";

const Footer = () => {
  return (
    <footer id="contact">
      <GetStarted />
      <section className="footer_links">
        <div className="footer_links_item_one">
          <Motion>
            <img src={HeaderLogo} alt="" />
          </Motion>
          <MotionX>
            <p>We make it possible for you to easily get movies download</p>
          </MotionX>
        </div>
        <div className="footer_links_item_two">
          <Motion>
            <h3>Quick Links</h3>
          </Motion>
          <MotionX>
            <p>About us</p>
          </MotionX>
          <MotionRight>
            <p>Privacy policy</p>
          </MotionRight>
          <Motion>
            <p>Terms of service</p>
          </Motion>
        </div>
        <div className="footer_links_item_three">
          <Motion>
            <h3>Contact us</h3>
          </Motion>
          <MotionX>
            <div className="flex">
              <MdLocationPin size={18} color="white" style={{ width: "10%" }} />
              <p>Africa</p>
            </div>
          </MotionX>
          <MotionRight>
            <div className="flex">
              <AiOutlineMail size={18} color="white" style={{ width: "10%" }} />
              <p>
                <a href="mailto:support@movieseriesdownload.online">
                  support@movieseriesdownload.online
                </a>
              </p>
            </div>
          </MotionRight>
        </div>
      </section>
      <section className="footer_contact">
        <p>
          <Motion>© All Rights Reserved. 2025, Movie Series Download</Motion>
        </p>
        <div className="footer_icon_section">
          <MotionX>
            <img src={facebook} alt="" />
          </MotionX>
          <Motion>
            <img src={instagram} alt="" />
          </Motion>
          <MotionRight>
            <img src={twitter} alt="" />
          </MotionRight>
        </div>
        <div></div>
      </section>
    </footer>
  );
};

export default Footer;
