import React from "react";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <>
      <Wrapper>
        <nav>
          <Logo />
        </nav>
        <div className="container page">
          {/* info */}
          <div className="info">
            <h1>
              job <span>tracking</span> app
            </h1>
            <p>
             Introducing the ultimate job search app, seamlessly connecting seekers and employers. Tailored algorithms match skills to positions, streamlining the hiring process. Personalized notifications alert users to relevant opportunities. User-friendly interface, intuitive navigation, and real-time updates make job hunting efficient. Elevate your career with our innovative job search app today!
            </p>
            <Link to="/register" className="btn btn-hero">
              Login/Register
            </Link>
          </div>
         <img
            src="https://cdn-icons-png.flaticon.com/512/2936/2936630.png"
            alt="job hunt"
            className="img main-img"
          />
        </div>
      </Wrapper>
    </>
  );
}

export default Landing;
