import { firebaseConfig } from "./FirebaseConfig";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { data } from "../App";
import { useContext } from "react";
import "./GoogleLogin.css";
import headshot from "../Assets/neil-headshot.jpeg";

export default function GoogleLogin() {
  const { setUserEmail, setUserToken } = useContext(data);

  const navigate = useNavigate();
  const connectAuth = () => {
    const app = initializeApp(firebaseConfig);
    return getAuth(app);
  };

  const handleGoogleLogin = async () => {
    const auth = connectAuth();
    const provider = new GoogleAuthProvider();
    const user = await signInWithPopup(auth, provider).catch((err) =>
      console.log(err)
    );
    if (user) {
      console.log(user.user);
      setUserEmail(user.user.email);
      setUserToken(user.user.accessToken);
      localStorage.setItem("accessToken", user.user.accessToken);
      localStorage.setItem("intellirisk-email", user.user.email);
      navigate("/");
    }
  };

  return (
    <>
      <div id="header-container">
        <div id="header-left">
          <div id="header-txt">
            <h1 style={{ fontSize: "50px" }}>IntelliRisk</h1>

            <h3 style={{ fontSize: "25px" }}>
              {" "}
              Using Data to Increase Revenue in the Insurance Sale!
            </h3>
          </div>
        </div>
        <div id="header-right">
          <img
            id="headerimg"
            style={{ borderRadius: "50%" }}
            src="https://firebasestorage.googleapis.com/v0/b/intellirisk-mvp.appspot.com/o/Screen%20Shot%202022-11-16%20at%201.20.57%20PM.png?alt=media&token=abbadadd-a645-44b3-83fa-a285ca502e4c"
          />
        </div>
      </div>
      <div id="secondcontainer">
        <div>
          <div id="secondleft">
            <h2>Mission Statement</h2>
            <h4>
              Companies of all sizes will enjoy the cost savings and benefits of
              Risk Management that the Fortune 500 and many large companies
              already receive. A data-driven, objective process replaces the
              subjective insurance buying process.
            </h4>
          </div>
        </div>
        <div id="login-btn">
          <h2>To see a demo click below!</h2>
          {/* <button onClick={() => handleGoogleLogin()}> */}
          <img
            id="image"
            onClick={() => handleGoogleLogin()}
            style={{ height: "50%" }}
            src="https://firebasestorage.googleapis.com/v0/b/intellirisk-mvp.appspot.com/o/btn_google_signin_dark_focus_web%402x.png?alt=media&token=7a9736a2-34de-40ed-9333-3f54e617e0d3"
          />
          {/* </button> */}
        </div>
      </div>
      <div id="section3">
        <img
          id="third-left"
          style={{ borderRadius: "50%" }}
          src="https://firebasestorage.googleapis.com/v0/b/intellirisk-mvp.appspot.com/o/Screen%20Shot%202022-11-16%20at%201.20.57%20PM.png?alt=media&token=abbadadd-a645-44b3-83fa-a285ca502e4c"
        />
        <h3 id="third-right">
          A broken, archaic, non-transparent, and friction filled insurance
          buying process ensures that your clients spend too much for insurance
          and may not be properly covered. intellRisk Solutions utilizes a
          company's financials to match exposures to the necessary insurance
          needed to mitigate that risk.{" "}
        </h3>
      </div>
      <div id="fourth">
        <div id="fourth-left">
          <img style={{ height: "30vh" }} src={headshot}></img>
        </div>
        <div id="fourth-right">
          <h2>Our Founder</h2>
          <h3>
            Neil A Levy CPA, MBA our founder is a former CPA and also an analyst
            at an investment bank before becoming a risk manager in the
            insurance industry for over 15 years. He sold his insurance agency
            to a large Private Equity company and has seen how his large
            company's enjoy a sophisticated and cost efficient insurance buying
            experience while his medium to smaller insurance clients suffer.{" "}
          </h3>
        </div>
      </div>
      <div id="fifth-container">
        <h2>The Future</h2>
        <ul id="list">
          <li>CPA dashboard: A home page for the CPA to manage documents.</li>
          <li>
            Collaborative Tools: The ability to allow agents to work with CPA's
            and organizations with ease.
          </li>
          <li>
            Pre-Fill Application: Allow users to create documents with a easy to
            read, single format.
          </li>
        </ul>
      </div>
      <div id="footer">
        <p>Social media coming soon</p>
      </div>
    </>
  );
}
