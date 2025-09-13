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
    text="Collaborated with top tech firms and institutions, driving 2.8x revenue growth and 85% customer satisfaction with AI-powered full-stack solutions serving 2M+ users monthly."
    link="/about"
    btnText="Learn more"
  />
  ),
  3: (
    <InfoBox
      text="Led AI-driven projects boosting performance by 200% and delivering $10M+ in value across scalable web applications. Curious about the impact?"
      link="/projects"
      btnText="Visit my portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Ready to elevate your team with 3.2x order value increases and real-time solutions? Let’s discuss your next project."
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
