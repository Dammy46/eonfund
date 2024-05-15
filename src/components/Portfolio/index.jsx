import React from "react";
import "./portfolio.css";
import AnimatedButton from "../AnimatedButton";
import Fraqvest from "../../assets/svgs/fraqvest.svg";
import Oaksvale from "../../assets/svgs/oaksvale.svg";
import Shazzy from "../../assets/svgs/shazzy.svg";
import Gamebitty from "../../assets/svgs/gamebitty.svg";
import Amapiano from "../../assets/svgs/amapiano.svg";
const Portfolio = () => {
  const companies = [Fraqvest, Oaksvale, Shazzy, Gamebitty, Amapiano];
  return (
    <section className="app-portfolio">
      <div className="container">
        <h2 className="portfolio-title">
          <span>
            A minimum viable product (MVP) is not mandatory, but we expect to
            see a demo or prototype.
          </span>
        </h2>
        <h5 className="portfolio-desc">
          <span>
            We believe every significant solution begins with a bold idea, and
            we are here to support the realization of those ideas into impactful
            businesses.
          </span>
        </h5>
      </div>
      <div id="portfolio" className="investment-wrap">
        <div className="container">
          <div className="divider" />
          <div className="flex invest-content">
            <div className="invest-infos">
              <p className="invest-tag">
                <span>Our investment portfolio</span>
              </p>
              <h2 className="infos-title">
                Investing in Ideas That Solve <span>Critical Problems</span>
              </h2>
              <a href="" className="join-wrap">
                <AnimatedButton>See all companies</AnimatedButton>
              </a>
            </div>
            <div className="invest-companies">
              <div className="companies-grid">
                {companies.map((logo, index) => (
                  <div key={index} className="company-grid-item">
                    <div className="grid-logo">
                      <img src={logo} alt="company-logo" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
