import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa"; // Import Font Awesome Arrow Up
import "./BackToTop.css";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={`back-to-top ${isVisible ? "show" : ""}`}>
      <button onClick={scrollToTop} className="back-to-top-btn">
        <FaArrowUp />
      </button>
    </div>
  );
};

export default BackToTop;
