import { useEffect,createContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { data } from "../App";
import { Button } from "@mui/material";
import '../App.css'

const Logout = () => {
    const {setUserEmail} = useContext(data)
    const navigate = useNavigate()
    async function  handleLogout (){
         localStorage.clear();
         setUserEmail(null)
         navigate('/')
    }

    return(
        <>
          
            <Button id="logoutbtn"
              onClick={() => {
                handleLogout();
              }}
            >
              Logout
            </Button>
       
        </>
      );
};

export default Logout