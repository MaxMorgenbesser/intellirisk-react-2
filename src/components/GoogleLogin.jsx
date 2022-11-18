import { firebaseConfig } from "./FirebaseConfig";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { data } from "../App";
import { useContext } from "react";
import "./GoogleLogin.css";

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
            <h1>IntelliRisk</h1>

            <h3> Using Data to Increase Revenue in the Insurance Sale!</h3>
          </div>
        </div>
        <div id="header-right">
          <img
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
          style={{height:"50%"}}
            src="https://firebasestorage.googleapis.com/v0/b/intellirisk-mvp.appspot.com/o/btn_google_signin_dark_focus_web%402x.png?alt=media&token=7a9736a2-34de-40ed-9333-3f54e617e0d3"
          />
        {/* </button> */}
        
        </div>
      </div>
      <div id="section3">

        </div>
    </>
  );
}
