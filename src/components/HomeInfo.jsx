import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";
import { SITE_NAME } from "../constants";

// info box
const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    {/* info text */}
    <p className="font-medium sm:text-xl text-center">{text}</p>

    {/* info right arrow */}
    <Link to={link} className="neo-brutalism-white neo-btn" title={btnText}>
      {btnText}
      <img src={arrow} alt="Arrow" className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

// render content (based upon current user cursor location)
const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">{SITE_NAME.split(" ")[0]}</span>
      👋
      <br />An AI Full Stack Developer from Canada.
    </h1>
  ),
  2: (
    <InfoBox
    text="I have collaborated with leading technology firms and institutions to deliver AI powered full stack solutions that drove 2.8 times revenue growth, achieved 85 percent customer satisfaction, and served more than 2 million users each month."
    link="/about"
    btnText="Learn more"
  />
  ),
  3: (
    <InfoBox
      text="Led AI driven projects that boosted performance by 200 percent and delivered more than 15 million dollars in value across scalable web applications. Explore the projects to see the impact."
      link="/projects"
      btnText="Visit my portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Driving 3.2× order value through real-time, scalable solutions—building the next generation of high-impact products."
      link="/contact"
      btnText="Let's talk"
    />
  ),
};

// home info
const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
