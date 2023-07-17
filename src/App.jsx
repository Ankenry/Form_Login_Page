import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import React from "react";
import "./App.css";
import InputField from "./modules/auth/component/LoginForm/InputUsername";
import Password from "./modules/auth/component/LoginForm/PasswordUser";
import getAPI from "./modules/auth/Pages/LoginPage/getAPI";

function App() {
  getAPI();

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="body">
          <div className="Login-page">
            <div className="main">
              <div className="top">
                <AccountCircleIcon />
                <h1>Sign in</h1>
              </div>
              <div className="middle">
                <div className="middle-top">
                  <div className="mdl-input_top">
                    <InputField />
                  </div>
                  <Password />
                </div>

                <div className="middle-bottom">
                  {/* button sign in */}
                  <button className="mdl-btm_summit">SIGN IN</button>
                  <div className="mdl-btm_bottom">
                    <a
                      className="mdl-btm_btm_a"
                      href="../register/register.jsx"
                    >
                      Forgot Password?
                    </a>
                    <a className="mdl-btm_btm_a" href="">
                      Don't have account? Sign Up
                    </a>
                  </div>
                </div>
              </div>
              <div className="bottom">
                <div className="bt-main">
                  <span>
                    Copyright @ <u>Your Website</u> 2023
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default App;
