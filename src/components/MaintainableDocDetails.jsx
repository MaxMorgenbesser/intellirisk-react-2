import { data } from "../App";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import Logout from "./Logout";
import { InsuranceList } from "./InsuranceList";
import "./DocDetails.css";

export default function MaintainableDocDetails() {
  const navigate = useNavigate();
  const { userToken } = useContext(data);
  const [docID, setDocID] = useState(localStorage.getItem("docid"));
  const [docData, setDocData] = useState();
  const [updateVal, setUpdateVal] = useState();
  const [types, setTypes] = useState([]);
  const [suggested, setSuggested] = useState([]);
  const [somewhat, setSomewhat] = useState([]);

  useEffect(() => {
    if (docData) {
      // console.log(types);
      types.map((type) => {
        if (docData.insuranceTypes[type] === 0.5 && !somewhat.includes(type)) {
          setSomewhat((somewhat) => [...somewhat, type]);
          // console.log("this is the somewhat array", somewhat)
        }
        if (docData.insuranceTypes[type] === 1 && !suggested.includes(type)) {
          setSuggested((suggested) => [...suggested, type]);
        }
      });
    }
  }, [types, setTypes]);

  useEffect(() => {
    if (updateVal) {
      update();
    }
  }, [setUpdateVal, updateVal]);

  const update = () => {
    setSomewhat(somewhat.filter(item=>(
      item !== Object.keys(updateVal).toString()
    )))
    setSuggested(suggested.filter(item=>
      item !== Object.keys(updateVal).toString() 
    ))
    fetch("https://intellirisk-api.web.app/updatefile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: userToken,
      },
      body: JSON.stringify({
        id: docID,
        types: {
          [Object.keys(updateVal).toString()]: Number(
            Object.values(updateVal).toString()
          ),
        },
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setDocData(data);
        setTypes(Object.keys(data.insuranceTypes));
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetch(`https://intellirisk-api.web.app/files/${docID}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: userToken,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setDocData(data);
        setTypes(Object.keys(data.insuranceTypes));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div id="header">
        <Logout />
        <Button onClick={() => navigate("/")}>go back</Button>
      </div>
      <div id="name">{docData && <h1>{docData.file.name}</h1>}</div>
      {docData && (
        <div id="col-cntnr">
          <div>
            <h2>These items are highly suggested</h2>
            <ul>
              {suggested &&
                suggested.map((type) => (
                  <>
                    <li>{type}</li>
                    <Button onClick={() => setUpdateVal({ [type]: 0 })}>
                      Set false
                    </Button>
                    <Button onClick={() => setUpdateVal({ [type]: 0.5 })}>
                      Set somewhat true
                    </Button>
                  </>
                ))}
            </ul>
          </div>

          <div>
            <h2>These items are somewhat suggested</h2>
            <ul>
              {somewhat &&
                somewhat.map((type) => (
                  <>
                    <li>
                      {type}
                      <Button onClick={() => setUpdateVal({ [type]: 1 })}>
                        Set fully true
                      </Button>
                      <Button onClick={() => setUpdateVal({ [type]: 0 })}>
                        Set false
                      </Button>
                    </li>
                  </>
                ))}
            </ul>
          </div>
          <div>
            
            {somewhat && suggested ? (
              <>
                <h2>These Items can be added</h2>
                <ul>
                  {docData && (
                    <div id="add">
                      {InsuranceList.map((item) => (
                        <>
                          {!somewhat.includes(item) &&
                            !suggested.includes(item) && (
                              <>
                                <li>{item}</li>
                                <Button
                                  onClick={() => setUpdateVal({ [item]: 0.5 })}
                                >
                                  Set this somewhat true
                                </Button>
                                <Button
                                  onClick={() => setUpdateVal({ [item]: 1 })}
                                >
                                  Set this fully true
                                </Button>
                              </>
                            )}
                        </>
                      ))}
                    </div>
                  )}
                </ul>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      )}

      {docData && (
        <embed src={docData.file.base64} width="1000px" height="1000px" />
      )}
    </>
  );
}
