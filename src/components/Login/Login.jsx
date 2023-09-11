import React from "react";
import { MyInfo } from "../base/baseLogin";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import fotom from "./uzuma.png"
import logo from "./uzumlogo.png"
const Login = () => {
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();

  function SubmitHandler(e) {
    e.preventDefault();
    let [login, password] = e.target.elements;
    if (login.value === MyInfo.login && password.value === MyInfo.passwrod) {
      navigate("/home");
    } else {
      messageApi.open({
        type: "error",
        content: "Login yoki password Xato",
      }
      );
    }
  }

  return (
  
    <div className="login-container">
      <img className="fotom" src={fotom} alt="" />
      {/* <img className="sklad " src="https://uzfillment.uz/wp-content/uploads/2023/02/1.png" alt="" /> */}
      {contextHolder}
      <form action="" className="form" onSubmit={SubmitHandler}>
        <div className="logodiv">
          <a href="https://www.uzum.uz">
            <img className="logo" src={logo} alt="" />
          </a>
          <h1 className="h"><a className="h" href="https://www.uzum.uz">Login In</a></h1>
        </div>
        
        <input type="text" placeholder="Username"/>
        <input type="text" placeholder="Password"/>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
