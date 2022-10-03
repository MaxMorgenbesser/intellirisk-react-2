import { useState } from "react";
import { Input, Button } from "@mui/material/";
import { useContext } from "react";
import { data } from "../App";
const Uploadfile = () => {
  const [filebase64, setFileBase64] = useState("");
  const [fileName, setFileName] = useState("");
  const { userToken,setUserToken } = useContext(data);
  // setUserToken(localStorage.getItem("accessToken"))
  const addFile = () => {
    //http://localhost:5050
    // hhttps://intellirisk-api.web.app/
    fetch("https://intellirisk-api.web.app/submitfile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization" : userToken
      },
      body: JSON.stringify({ base64: filebase64, name: fileName }),
    })
      .then((res) => res.json())
      .then((data) => {console.log(data)
      alert("Your file has been submitted to the agent")}
      )
      .catch((err) => console.log(err));
    setFileBase64("");
    setFileName("")
  };

  function convertFile(files) {
    if (files) {
      const fileRef = files[0] || "";
      const fileType = fileRef.type || "";
      console.log("This file upload is of type:", fileType);
      const reader = new FileReader();
      reader.readAsBinaryString(fileRef);
      reader.onload = (ev) => {
        // convert it to base64
        console.log(fileType);
        setFileBase64(`data:${fileType};base64,${btoa(ev.target.result)}`);
        console.log(filebase64);
      };
    }
  }

  return (
    <>
    
    <div id="uploadcontainer">
      <h4>Please enter the name of the person/company this document corresponds to.</h4>
      <Input id="name-input"
        value={fileName}
        onChange={(e) => setFileName(e.target.value)}
        type="search"
      />
      <br/>
      <Input
        id="upload"
        type="file"
        onChange={(e) => convertFile(e.target.files)}
        inputProps={{accept:"application/pdf"}}
      />
      <br/>
      {filebase64 && fileName && (
        <Button type="primary" id="docsubmit" onClick={addFile}>
          Submit
        </Button>
      )}
      <br/>
      {filebase64.indexOf("application/pdf") > -1  && <embed src={filebase64} width="1000px" height="1000px" />}
      </div>
    </>
  );
};

export default Uploadfile;
