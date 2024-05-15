import React, { useEffect, useRef } from "react";
import "./animatedbutton.css";
import { MdOutlineArrowForward } from "react-icons/md";
import gsap from "gsap";
const AnimatedButton = ({ children, ...attributes }) => {
  const circle = useRef(null);
  let timeline = useRef(null);
  let timeoutId = null;
  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    timeline.current
      .to(
        circle.current,
        {
          top: "-25%",
          width: "150%",
          right: "100",
          left: "-78",
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
    <button
      className="flex join-btn"
      style={{ overflow: "hidden" }}
      onMouseEnter={() => {
        manageMouseEnter();
      }}
      onMouseLeave={() => {
        manageMouseLeave();
      }}
      {...attributes}
    >
      <span> {children}</span> <MdOutlineArrowForward />
      <div
        ref={circle}
        style={{ backgroundColor: "#ffffff" }}
        className="circle"
      ></div>
    </button>
  );
};

export default AnimatedButton;
