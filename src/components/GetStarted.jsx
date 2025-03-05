import React from "react";
import apple from "../asset/appstore.png";
import playstore from "../asset/playstore.png";
import MotionX from "./MotionX";
import Motion from "./Motion";
import MotionRight from "./MotionRight";

const GetStarted = () => {
  return (
    <section className="get_started_section">
      <div>
        <MotionX>
          <h2 style={{ color: "black" }}>Get started!</h2>
        </MotionX>
        <Motion>
          <p>
            Movie Series Download Got you covered on every movie of your choice
            to, to know more contact us{" "}
          </p>
        </Motion>
      </div>
      <MotionRight>
        <div className="download_sect">
          <img onClick={() => alert("Coming soon!")} src={apple} alt="" />
          <img onClick={() => alert("Coming soon!")} src={playstore} alt="" />
        </div>
      </MotionRight>
    </section>
  );
};

export default GetStarted;
