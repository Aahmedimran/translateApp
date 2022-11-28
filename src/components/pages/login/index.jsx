import React, { useState, useContext, useEffect } from "react";
import { createHeaders } from "../../Api/index";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../contexts/context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './index.css'
import loginRobot from '../../../assets/loginRobot.png'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'




const Login = () => {
  let {state, dispatch } = useContext(GlobalContext);
  const [username, setUserName] = useState("");
  const apiUrl = "REACT_APP_API_URL";
  const user = localStorage.getItem("username");
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/translate");
    }
  }, [navigate, user]);

  const createUser = async () => {
    if (!username) {
      toast.error("Please Provide a username");
      return
    } 

  

      try {
        const response = await fetch(apiUrl, {
          method: "post",
          headers: createHeaders(),
          body: JSON.stringify({
            username,
            translate: [],
          }),
        });
       
        console.log(response, "create");
        if (!response.ok) {
          throw new Error("Could not create user" + username);
        }
        const data = await response.json();
        console.log(data, "data");
        localStorage.setItem("username", username);
        dispatch({ type: "USER_LOGIN", payload: data });
        console.log(state.user,"user dispatch")
        navigate("/translate");
        toast.success("Login Success");
        return [null, data];
      } catch (error) {
        return [error.message, []];
      }
    
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <header className="header_login" >
        <p>Lost in Translate</p>
      </header>
      <div className="body_contianer_login">
        <div className="robo_img_login">
          <div>
            <img src={loginRobot} alt="" />
          </div>
        </div>
        <div className="userinput_login">
        <div>
          <form className="userinput_login_form"
            onSubmit={(e) => {
              createUser();
              e.preventDefault();
            }}
          >
            <input
              type="text"
              placeholder="Enter your name"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
            <button><BsFillArrowRightCircleFill className="userinput_login_button" /></button>
          </form>
        </div>
        </div>
      </div>
      <div className="footer_login">

        <div>

        </div>

      </div>

    </>
  );
};

export default Login;