import React from "react";
import "./about.css";
import { BsArrowRight } from "react-icons/bs";
import Conference from "../../assets/images/conference.jpg";
const About = () => {
  return (
    <section id="investment" className="app-about">
      <div className="container">
        <p className="section-tag">
          <span>What are we looking for</span>
        </p>
        <h2 className="section-desc">
          <span>Identifying Technical Founders with Transformative Ideas</span>
        </h2>
      </div>
      <div className="grid">
        <div className="grid-item">
          <div className="grid-container">
            <div className="grid-box">
              <div className="icon-wrap flex">
                <BsArrowRight />
              </div>
              <p className="grid-desc">
                <span>
                  Building scalable business in global markets with
                  billion-dollar potential.
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="grid-item">
          <div className="grid-container">
            <div className="grid-box">
              <div className="icon-wrap flex">
                <BsArrowRight />
              </div>
              <p className="grid-desc">
                <span>
                  Operating in a core team including at least one technical
                  founder.
                </span>
              </p>
            </div>
          </div>
        </div>{" "}
        <div className="grid-item">
          <div className="grid-container">
            <div className="grid-box">
              <div className="icon-wrap flex">
                <BsArrowRight />
              </div>
              <p className="grid-desc">
                <span>
                  Utilizing emerging technologies such as AI, Blockchain, and
                  IoT.
                </span>
              </p>
            </div>
          </div>
        </div>{" "}
        <div className="grid-item">
          <div className="grid-container">
            <div className="grid-box">
              <div className="icon-wrap flex">
                <BsArrowRight />
              </div>
              <p className="grid-desc">
                <span>Developing solutions that address tangible problems</span>
              </p>
            </div>
          </div>
        </div>{" "}
        <div className="grid-item">
          <div className="grid-container">
            <div className="grid-box">
              <div className="icon-wrap flex">
                <BsArrowRight />
              </div>
              <p className="grid-desc">
                <span>
                  Demonstrating clear market demand with a capital efficient
                  business model
                </span>
              </p>
            </div>
          </div>
        </div>{" "}
        <div className="grid-item">
          <div className="grid-img">
            <img src={Conference} alt="conference" />
          </div>
        </div>{" "}
      </div>
    </section>
  );
};

export default About;
