"use client";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

const StateSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("zubuz-counter");
      if (section) {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
        setIsVisible(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="section dark-bg zubuz-section-padding5">
      <div id="zubuz-counter"></div>
      <div className="container">
        <div className="zubuz-counter-wrap2">
          {/* Stat 1 */}
          <div className="zubuz-counter-data light">
            <h2 className="zubuz-counter-number">
              <span>{isVisible ? <CountUp end={97} duration={5} /> : 97}</span>
              <em>%</em>
            </h2>
            <p>User satisfaction across all AI tools</p>
          </div>

          {/* Stat 2 */}
          <div className="zubuz-counter-data light">
            <h2 className="zubuz-counter-number">
              <span>
                {isVisible ? <CountUp end={5000} duration={5} /> : 5000}
              </span>
              <em>+</em>
            </h2>
            <p>Businesses using our Mission Control Dashboard</p>
          </div>

          {/* Stat 3 */}
          <div className="zubuz-counter-data light">
            <h2 className="zubuz-counter-number">
              <span>
                {isVisible ? <CountUp end={120} duration={5} /> : 120}
              </span>
              <em>K</em>
            </h2>
            <p>AI-powered campaigns launched monthly</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StateSection;
