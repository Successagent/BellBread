import React, { useState } from "react";
import { Button, Header, MotionRight, Motion, MotionX } from "./components";
import intro from "./asset/Invincible_S3_December_Poster.webp";
import apple from "./asset/appstore.png";
import playstore from "./asset/playstore.png";
import {
  itemOne,
  itemThree,
  itemTwo,
  MOVIES_TO_WATCH,
  pinTabs,
} from "./utils/data";
import what1 from "./asset/what1.webp";
import what2 from "./asset/what2.webp";
import what3 from "./asset/what3.webp";
import faq from "./asset/faq.png";
import Footer from "./components/Footer/Footer";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const [tab, setTab] = useState(1);
  const [faqTab, setFaqTab] = useState(1);

  const toggleFaqTabs = (e) => {
    if (e.target.id === "1") {
      setFaqTab(1);
    } else if (e.target.id === "2") {
      setFaqTab(2);
    } else if (e.target.id === "3") {
      setFaqTab(3);
    } else if (e.target.id === "4") {
      setFaqTab(4);
    } else if (e.target.id === "5") {
      setFaqTab(5);
    }
  };

  return (
    <section className="landing_page">
      <Header />
      <section className="hero_section">
        <div className="hero_sect_text_container">
          <Motion>
            <h1 className="header_text">Our Top Trending Movie Of The Week</h1>
          </Motion>
          <MotionX>
            <p className="paragraph">
              Looking for the latest movies in high quality? Movie Series
              Download offers a vast collection of Hollywood, Bollywood, and
              regional films, available for fast and secure downloads.
            </p>
          </MotionX>
          <MotionRight>
            <div className="download_sect">
              <img src={apple} alt="" />
              <img src={playstore} alt="" />
            </div>
          </MotionRight>
          <MotionX>
            <p className="download_text">
              Download the mobile app from any store available to you.
            </p>
          </MotionX>
        </div>
        <div className="hero_sect_image_container">
          <img src={intro} alt="" />
        </div>
      </section>
      <section id="about" className="landing_section_two">
        {pinTabs.map((item, key) => {
          return (
            <div
              className={`pin_tabs ${tab === 1 && key === 0 ? "active" : ""}`}
              key={key}
            >
              <div className="pin_text_tab">
                <MotionX>
                  <p style={{ color: "white" }} className="paragraph">
                    {item.paragraph}
                  </p>
                </MotionX>
                <Motion>
                  <p
                    className="what_we_do_paragraph_text"
                    style={{ color: "white" }}
                  >
                    {item.title}
                  </p>
                </Motion>
                <MotionX>
                  <Button
                    color={"#178C49"}
                    background={"white"}
                    height={50}
                    width={212}
                    title={"Contact us"}
                  />
                </MotionX>
              </div>
            </div>
          );
        })}
      </section>
      <section id="process" className="what_we_do desktop_view">
        <div className="hero_text_container">
          <Motion>
            <h2>How it works</h2>
          </Motion>
        </div>
        <div className="what_we_do_items">
          <div className="what_image_container">
            <MotionX>
              <img src={MOVIES_TO_WATCH[0].image} alt="" />
            </MotionX>
          </div>
          <div className="what_hr">
            <div className="indicator">1</div>
            <div className="hrs">
              {itemOne.map((item, key) => {
                return <div key={key}></div>;
              })}
            </div>
          </div>
          <div className="what_text_container">
            <MotionRight>
              <h2>{MOVIES_TO_WATCH[0].name}</h2>
            </MotionRight>
            <Motion>
              <p>{MOVIES_TO_WATCH[0].brief_intro}</p>
            </Motion>
            <MotionX>
              <Link to={`/movies/${MOVIES_TO_WATCH[0]?.id}`}>
                <Button
                  background={"#3BD07B"}
                  color={"white"}
                  width={212}
                  height={50}
                  title={"Download now"}
                  action={() => ""}
                />
              </Link>
            </MotionX>
          </div>
        </div>
        <div
          className="what_we_do_items"
          style={{ flexDirection: "row-reverse", marginTop: 30 }}
        >
          <div className="what_image_container">
            <Motion>
              <img src={MOVIES_TO_WATCH[1].image} alt="" />
            </Motion>
          </div>
          <div className="what_hr">
            <div className="indicator">2</div>
            <div className="hrs">
              {itemOne.map((item, key) => {
                return <div key={key}></div>;
              })}
            </div>
          </div>
          <div className="what_text_container">
            <MotionRight>
              <h2>{MOVIES_TO_WATCH[1].name}</h2>
            </MotionRight>
            <MotionX>
              <p>{MOVIES_TO_WATCH[1].brief_intro}</p>
            </MotionX>
            <Motion>
              <Link to={`/movies/${MOVIES_TO_WATCH[1]?.id}`}>
                <Button
                  background={"#3BD07B"}
                  color={"white"}
                  width={212}
                  height={50}
                  title={"Download now"}
                  action={() => ""}
                />
              </Link>
            </Motion>
          </div>
        </div>
        <div className="what_we_do_items">
          <div className="what_image_container">
            <MotionX>
              <img src={MOVIES_TO_WATCH[2].image} alt="" />
            </MotionX>
          </div>
          <div className="what_hr">
            <div className="indicator">3</div>
            <div className="hrs">
              {itemOne.map((item, key) => {
                return <div key={key}></div>;
              })}
            </div>
          </div>
          <div className="what_text_container">
            <Motion>
              <h2>{MOVIES_TO_WATCH[2].name}</h2>
            </Motion>
            <MotionRight>
              <p>{MOVIES_TO_WATCH[2].brief_intro}</p>
            </MotionRight>
            <MotionX>
              <Link to={`/movies/${MOVIES_TO_WATCH[2]?.id}`}>
                <Button
                  background={"#3BD07B"}
                  color={"white"}
                  width={212}
                  height={50}
                  title={"Download now"}
                  action={() => ""}
                />
              </Link>
            </MotionX>
          </div>
        </div>
        <div className="what_we_do_items">
          <div className="what_image_container">
            <MotionX>
              <img src={MOVIES_TO_WATCH[3].image} alt="" />
            </MotionX>
          </div>
          <div className="what_hr">
            <div className="indicator">4</div>
            <div className="hrs">
              {itemOne.map((item, key) => {
                return <div key={key}></div>;
              })}
            </div>
          </div>
          <div className="what_text_container">
            <Motion>
              <h2>{MOVIES_TO_WATCH[3].name}</h2>
            </Motion>
            <MotionRight>
              <p>{MOVIES_TO_WATCH[3].brief_intro}</p>
            </MotionRight>
            <MotionX>
              <Link to={`/movies/${MOVIES_TO_WATCH[3]?.id}`}>
                <Button
                  background={"#3BD07B"}
                  color={"white"}
                  width={212}
                  height={50}
                  title={"Download now"}
                  action={() => ""}
                />
              </Link>
            </MotionX>
          </div>
        </div>
        <div
          style={{ flexDirection: "row-reverse", marginTop: 30 }}
          className="what_we_do_items"
        >
          <div className="what_image_container">
            <MotionX>
              <img src={MOVIES_TO_WATCH[4].image} alt="" />
            </MotionX>
          </div>
          <div className="what_hr">
            <div className="indicator">5</div>
            <div className="hrs">
              {itemOne.map((item, key) => {
                return <div key={key}></div>;
              })}
            </div>
          </div>
          <div className="what_text_container">
            <Motion>
              <h2>{MOVIES_TO_WATCH[4].name}</h2>
            </Motion>
            <MotionRight>
              <p>{MOVIES_TO_WATCH[4].brief_intro}</p>
            </MotionRight>
            <MotionX>
              <Link to={`/movies/${MOVIES_TO_WATCH[4]?.id}`}>
                <Button
                  background={"#3BD07B"}
                  color={"white"}
                  width={212}
                  height={50}
                  title={"Download now"}
                  action={() => ""}
                />
              </Link>
            </MotionX>
          </div>
        </div>
      </section>
      <section id="process" className="what_we_do mobile_view">
        <div className="hero_text_container">
          <Motion>
            <h2>How it works</h2>
          </Motion>
        </div>
        <div
          style={{ display: "flex", flexDirection: "row", padding: 20, gap: 0 }}
        >
          <div>
            <div className="what_hr">
              <div className="indicator">1</div>
              <div className="hrs">
                {itemThree.map((item, key) => {
                  return <div key={key}></div>;
                })}
              </div>
            </div>
            <div className="what_hr">
              <div className="indicator">2</div>
              <div className="hrs">
                {itemTwo.map((item, key) => {
                  return <div key={key}></div>;
                })}
              </div>
            </div>
            <div className="what_hr">
              <div className="indicator">3</div>
              <div className="hrs">
                {itemOne.map((item, key) => {
                  return <div key={key}></div>;
                })}
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 50,
              width: "100%",
            }}
          >
            <div className="what_we_do_items">
              <div className="what_image_container">
                <MotionX>
                  <img src={what1} alt="" />
                </MotionX>
              </div>
              <div className="what_text_container">
                <MotionRight>
                  <h2>Browse and Place Order</h2>
                </MotionRight>
                <Motion>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Ultricies volutpat
                    ut dignissim ornare nunc in. Est a tortor eget aenean
                    dignissim
                  </p>
                </Motion>
                <MotionX>
                  <Button
                    background={"#3BD07B"}
                    color={"white"}
                    width={212}
                    height={50}
                    title={"Download now"}
                  />
                </MotionX>
              </div>
            </div>
            <div
              className="what_we_do_items"
              style={{ flexDirection: "row-reverse", marginTop: 30 }}
            >
              <div className="what_image_container">
                <Motion>
                  <img src={what2} alt="" />
                </Motion>
              </div>

              <div className="what_text_container">
                <MotionRight>
                  <h2>Fast Delivery</h2>
                </MotionRight>
                <MotionX>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Ultricies volutpat
                    ut dignissim ornare nunc in. Est a tortor eget aenean
                    dignissim
                  </p>
                </MotionX>
                <Motion>
                  <Button
                    background={"#3BD07B"}
                    color={"white"}
                    width={212}
                    height={50}
                    title={"Download now"}
                  />
                </Motion>
              </div>
            </div>
            <div className="what_we_do_items">
              <div className="what_image_container">
                <MotionX>
                  <img src={what3} alt="" />
                </MotionX>
              </div>
              <div className="what_text_container">
                <Motion>
                  <h2>Receive and Enjoy</h2>
                </Motion>
                <MotionRight>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Ultricies volutpat
                    ut dignissim ornare nunc in. Est a tortor eget aenean
                    dignissim
                  </p>
                </MotionRight>
                <MotionX>
                  <Button
                    background={"#3BD07B"}
                    color={"white"}
                    width={212}
                    height={50}
                    title={"Download now"}
                  />
                </MotionX>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="faq" className="section_faq">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 50,
          }}
        >
          <Motion>
            <h1 style={{ textAlign: "center" }} className="header_text">
              FAQs
            </h1>
          </Motion>
        </div>
        <div>
          <div className="scrollble">
            <div className="what_image_container">
              <Motion>
                <Button
                  width={484}
                  height={50}
                  background={faqTab === 1 ? "#3BD07B" : "white"}
                  title={"How long will it take for my baked goods to arrive?"}
                  color={faqTab === 1 ? "white" : "#3BD07B"}
                  action={toggleFaqTabs}
                  id={1}
                />
              </Motion>
              <MotionRight>
                <Button
                  width={484}
                  height={50}
                  background={faqTab === 2 ? "#3BD07B" : "white"}
                  title={"Is there a delivery fee for my baked goods order?"}
                  color={faqTab === 2 ? "white" : "#3BD07B"}
                  action={toggleFaqTabs}
                  id={2}
                />
              </MotionRight>
              <MotionX>
                <Button
                  width={484}
                  height={50}
                  background={faqTab === 3 ? "#3BD07B" : "white"}
                  title={
                    "Can I customize my order or request special dietary options?"
                  }
                  color={faqTab === 3 ? "white" : "#3BD07B"}
                  action={toggleFaqTabs}
                  id={3}
                />
              </MotionX>
              <MotionRight>
                <Button
                  width={484}
                  height={50}
                  background={faqTab === 4 ? "#3BD07B" : "white"}
                  title={"What payment methods are accepted?"}
                  color={faqTab === 4 ? "white" : "#3BD07B"}
                  action={toggleFaqTabs}
                  id={4}
                />
              </MotionRight>
            </div>
          </div>
          <div className="what_hr">
            <div className="hrs">
              {itemOne.slice(0, 20).map((item, key) => {
                return <div key={key}></div>;
              })}
            </div>
          </div>
          <div className="what_text_container">
            <div>
              <Motion>
                <img src={faq} alt="" />
              </Motion>
              {faqTab === 1 ? (
                <MotionRight>
                  <p>
                    Delivery times vary depending on your location and bakery.
                    You can track your order in real-time to see the estimated
                    delivery time.
                  </p>
                </MotionRight>
              ) : faqTab === 2 ? (
                <MotionX>
                  <p>
                    Delivery fees may apply and are determined by the bakery and
                    your location. You can view any applicable fees during the
                    checkout process before confirming your order.
                  </p>
                </MotionX>
              ) : faqTab === 3 ? (
                <Motion>
                  <p>
                    Yes, you can customize your order and leave specific
                    instructions for the bakery. We offer options for dietary
                    preferences like gluten-free or vegan.
                  </p>
                </Motion>
              ) : faqTab === 4 ? (
                <MotionRight>
                  <p>
                    We accept a variety of payment methods, including
                    credit/debit cards. Your payment information is secure with
                    us.
                  </p>
                </MotionRight>
              ) : faqTab === 5 ? (
                <MotionX>
                  <p>
                    5Lorem ipsum dolor sit amet consectetur. Posuere morbi
                    feugiat nec sed rhoncus. Blandit massa quis volutpat amet
                    feugiat lectus ullamcorper ultrices tincidunt. Velit sit
                    morbi ut eu elementum porttitor fames nunc etiam. Sit varius
                    nisl et non velit nulla morbi. Nibh nulla justo quisque
                    tristique egestas.
                  </p>
                </MotionX>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </section>
  );
};

export default LandingPage;
