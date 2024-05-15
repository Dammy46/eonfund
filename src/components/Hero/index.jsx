import React, { useEffect, useRef } from "react";
import Navbar from "../Navbar";
import "./hero.css";
import { BsArrowUpRight } from "react-icons/bs";
import { useLenis } from "@studio-freight/react-lenis";
import gsap from "gsap";
const Hero = () => {
  const circle = useRef(null);
  let timeline = useRef(null);
  let timeoutId = null;
  const lenis = useLenis(({ scroll }) => {});

  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    timeline.current
      .to(
        circle.current,
        {
          top: "-25%",
          width: "200%",
          right: "100",
          left: "-100",
          margin: "auto",
          duration: 0.4,
          ease: "power3.in",
        },
        "enter"
      )
      .to(
        circle.current,
        { top: "-150%", width: "125%", duration: 0.25 },
        "exit"
      );
  }, []);
  const manageMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    timeline.current.tweenFromTo("enter", "exit");
  };

  const manageMouseLeave = () => {
    timeoutId = setTimeout(() => {
      timeline.current.play();
    }, 300);
  };
  return (
    <section className="app-hero">
      <Navbar />
      <div className="container hero-content">
        <h2>
          Fueling <br /> Innovation
        </h2>
        <div className="flex hero-info">
          <p className="hero-desc">
            <span>
              Eonfund ignites African startups with $10k-$100k investments,
              fostering tech pioneers poised to build lasting businesses.
            </span>
          </p>
          <a
            href="https://t.co/obRmbwRdhr"
            target="_blank"
            className="apply-fund-btn"
          >
            <button
              className="flex"
              style={{ overflow: "hidden" }}
              onMouseEnter={() => {
                manageMouseEnter();
              }}
              onMouseLeave={() => {
                manageMouseLeave();
              }}
            >
              <span>Apply for funding</span>
              <BsArrowUpRight />
              <div
                ref={circle}
                style={{ backgroundColor: "#0a2440" }}
                className="circle"
              ></div>
            </button>
          </a>
        </div>
      </div>
      <a
        href="#investment"
        onClick={() => lenis.scrollTo("#investment")}
        id="scroll-btn"
      ></a>
      <div className="building" />
      <div className="hero-title">
        <h2 className="h2">Fueling</h2>
        <h2 className="h2">Innovation</h2>
      </div>
    </section>
  );
};

export default Hero;
