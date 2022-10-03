import { firebaseConfig } from "./FirebaseConfig";
import { initializeApp } from "firebase/app";
import {getAuth,signInWithPopup,GoogleAuthProvider} from "firebase/auth"
import { useNavigate } from "react-router-dom";
import { data } from "../App";
import { useContext } from "react";

export default function GoogleLogin() {
const {setUserEmail,setUserToken} = useContext(data)

const navigate = useNavigate()
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
      console.log(user.user)
      setUserEmail(user.user.email)
      setUserToken(user.user.accessToken)
      localStorage.setItem('accessToken', user.user.accessToken)
      localStorage.setItem('intellirisk-email', user.user.email)
      navigate('/')
      

    }

}

  return <><button onClick={()=>handleGoogleLogin()}>google login</button></>;
}
