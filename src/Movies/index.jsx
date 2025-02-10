import React from "react";
import "./styles.css";
import { useParams } from "react-router-dom";
import { Header } from "../components";
import Footer from "../components/Footer/Footer";
import { MOVIES_TO_WATCH } from "../utils/data";

const Movies = () => {
  const { id } = useParams();

  const filteredMovie = MOVIES_TO_WATCH.filter((movie) => movie.id === id);
  const { name, brief_intro, download_links, image } = filteredMovie[0] || {};

  return (
    <section className="landing_page">
      <Header />
      <section className="movie_section_wrapper">
        <div className="movie_section_img">
          <img src={image} alt="" />
          <h3>Click Links Download or Watch</h3>
          <ul>
            {download_links?.map((links, index) => (
              <li key={index}>
                <a  href={links} rel="noopener noreferrer">
                  Download link {index + 1}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="movie_section_text">
          <h2>{name}</h2>
          <p>{brief_intro}</p>
        </div>
      </section>
      <Footer />
    </section>
  );
};

export default Movies;
