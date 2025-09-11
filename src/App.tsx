import Message from "./Message";

import './style/firstSection.css';
import './style/secondSection.css';
import './style/thirdSection.css';
import './style/appStyle.css';
import './style/forthSection.css';

import React, { useEffect, useState, useRef } from "react";

function App(){
  const totalSections = 4;
  const [currentSection, setCurrentSection] = useState(0);
  const [progress, setProgress] = useState(0); // Progress between sections
  const isScrolling = useRef(false);

  // Handle wheel events for smooth section navigation
  const handleWheel = (event: WheelEvent): void => {
const path = event.composedPath();

  const isInsideFrosted = path.some((el) =>
    (el as HTMLElement)?.classList?.contains?.('frosted-container')
  );

  if (isInsideFrosted) {
    return; // Let frosted-container handle its own scroll
  }



    event.preventDefault();
    if (isScrolling.current) return;

    if (event.deltaY > 0 && currentSection < totalSections - 1) {
      isScrolling.current = true;
      setCurrentSection((prev) => prev + 1);
      animateProgress(1);
    } else if (event.deltaY < 0 && currentSection > 0) {
      isScrolling.current = true;
      setCurrentSection((prev) => prev - 1);
      animateProgress(-1);
    }
  };

  // Animate progress between sections
  const animateProgress = (direction: number) => {
    let start = 0;
    const duration = 800;
    const step = () => {
      start += 10;
      setProgress((prev) => prev + direction * (10 / duration));
      if (start < duration) {
        requestAnimationFrame(step);
      } else {
        setProgress(0);
        isScrolling.current = false;
      }
    };
    requestAnimationFrame(step);
  };

  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [currentSection]);

  useEffect(() => {
    window.scrollTo({
      top: currentSection * window.innerHeight,
      behavior: "smooth",
    });
  }, [currentSection]);

  return (
  <div>

    <div className="background"></div> {/* Background div */}
    <div><Message /></div>
  
    <div className="dots-container">
      {Array.from({ length: totalSections }).map((_, index) => (
        <div
          key={index}
          className={`dot ${currentSection === index ? "active" : ""}`}
          style={{
              backgroundColor: index === currentSection ? "white" : "gray",
            }}
            onClick={() => setCurrentSection(index)}
        ></div>
      ))}
    </div>
  </div>

  );
}

export default App;

