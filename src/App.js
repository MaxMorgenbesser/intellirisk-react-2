import { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import GoogleLogin from "./components/GoogleLogin";
import Logout from "./components/Logout";
import Uploadfile from "./components/Uploadfile";
import AgentPage from "./AgentPage";
import DocDetails from "./components/DocDetails";
import MaintainableDocDetails from "./components/MaintainableDocDetails";
// import { useNavigate } from "react-router-dom";

export const data = createContext("");


function App() {
  
  const [docDeets,setDocDeets] = useState(localStorage.getItem("docdeets"))
  const [userEmail, setUserEmail] = useState(
    localStorage.getItem("intellirisk-email")
  );
  const [userToken, setUserToken] = useState(
    localStorage.getItem("accessToken")
  );

  return (
    <data.Provider value={{setUserEmail,userToken,setUserToken,docDeets,setDocDeets}}>
      <BrowserRouter>
        <Routes>
        
          {!userEmail && (
            <Route
              index
              element={
                <div id="google-btn">
                  <GoogleLogin />
                </div>
              }
            />
          )}

          {(userEmail && userEmail === "maxwellmorgenbesser@gmail.com") ||
          userEmail === "neilins71@gmail.com" ? (
            <>
            <Route
              index
              element={
                <>
                 <AgentPage/>
                </>
              }
            />
              <Route path="/docdetails" element={<><MaintainableDocDetails/></>}/>
              </>

          ) : (
            <Route
              index
              element={
                <>
                <div id="acc-header">
                  <h1>Welcome accountant</h1>
                  <Logout />
                  </div>
                  <Uploadfile />
                  <br />
                </>
              }
            />
          )}
        </Routes>
      </BrowserRouter>
    </data.Provider>
  );
}

export default App;
