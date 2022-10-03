import Logout from "./components/Logout";
import "./AgentPagecss.css";
import { Button, CircularProgress } from "@mui/material";
import { useEffect, useContext, useState } from "react";
import { data } from "./App";
import { useNavigate } from "react-router-dom";

const AgentPage = () => {
  let { userToken,setDocID,docID } = useContext(data);
  const {setDocDeets,docDeets} = useContext(data)
  const [docs, setDocs] = useState(null);
  const navigate = useNavigate()


  useEffect(() => {
    fetch("https://intellirisk-api.web.app/files", {
      headers: {
        "Content-Type": "application/json",
        Authorization: userToken,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setDocs(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, [userToken]);

  return (
    <>
      <div id="agentpageheader">
        Agent page
        <Logout />
      </div>
      <div id="wscroll">
      <div id="scroll-container">
        <div id="scrlhdr"></div>
      {docs?
      
        docs.map((doc) => {
          return(<div key={doc._id} id="itemcontainer">
            <p >{(doc.file.name)}</p>
            <div id="btn-container">
             <Button onClick={()=>{localStorage.setItem("docid", doc._id)
            localStorage.setItem("docdeets", true)
            navigate("/docdetails")}} 
            id="detailsbtn">see details</Button>
             </div>
          </div>)
        }):
        <div id="spinners">
        <CircularProgress color="secondary" />
        <CircularProgress color="success" />
        <CircularProgress color="inherit" />
        </div>
        }
        </div>
        </div>
    </>
  );
};

export default AgentPage;
