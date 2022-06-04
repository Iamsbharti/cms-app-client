import React, { Fragment, useState, useEffect } from "react";
import "../css/App.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { loginByPwdApi, multifactorLoginApi } from "../apis/userApis";

const MultifactorLogin = () => {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [securityQuestion, setSecuriyQuestion] = useState("");
  const [securityAnswer, setSecurityAnswer] = useState("");
  const [loginResponse, setLoginResponse] = useState();
  const [showMultifactor, setShowMultifactor] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "securityQuestion":
        setSecuriyQuestion(value);
        break;
      case "securityAnswer":
        setSecurityAnswer(value);
        break;
      default:
    }
  };
  const handleClearForm = () => {
    setPassword("");
    setEmail("");
  };
  const handleLoginByPassword = async (event) => {
    event.preventDefault();
    console.log("Handle login by password::", email, password);
    let loginDetails = { email, password };
    let pwdLoginResponse = loginByPwdApi(loginDetails);
    console.log("pwd login repsonse::", pwdLoginResponse);
  };
  const handleMultifactorLogin = async () => {};
  return (
    <Fragment>
      <div className="login-header">Login</div>
      <div className="login-form">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 0, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div className="form-group login-block-alignment">
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              type="text"
              className="form-control login-input"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </div>
          <br />
          <div className="form-group">
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              className="form-control login-input"
              id="exampleInputPassword1"
              name="password"
              placeholder="Password"
              value={password}
              onChange={handleChange}
            />
          </div>
          <br />

          <div className="btn__div">
            <Button
              variant="contained"
              type="submit"
              className="btn btn-primary btn-sm btn-block login-btn"
              onClick={handleLoginByPassword}
            >
              Submit
            </Button>
            <div className="forgot__pwd__div">
              <span onClick={() => history.push("/register")}>New User?</span>
            </div>
          </div>
        </Box>
      </div>
      {showMultifactor && (
        <>
          <div className="login-header" hidden={showMultifactor}>
            Multi-factor Authentication
          </div>
          <div className="login-form" hidden={showMultifactor}>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 0, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <div className="form-group login-block-alignment">
                <TextField
                  id="outlined-basic"
                  label="Security Question"
                  variant="outlined"
                  type="text"
                  className="form-control login-input"
                  aria-describedby="emailHelp"
                  placeholder="Security Question"
                  value={"Enter que"}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group login-block-alignment">
                <TextField
                  label="Security Answer"
                  variant="outlined"
                  type="text"
                  className="form-control login-input"
                  id="exampleInputPassword2"
                  placeholder="Security Answer"
                  onChange={handleChange}
                />
              </div>
              <div className="btn__div">
                <Button
                  variant="contained"
                  type="submit"
                  className="btn btn-primary btn-sm btn-block login-btn"
                  onClick={handleMultifactorLogin}
                >
                  Submit
                </Button>
                <div className="forgot__pwd__div">
                  <span onClick={() => history.push("/register")}>
                    New User?
                  </span>
                </div>
              </div>
            </Box>
          </div>
        </>
      )}
      <div>
        <span>{}</span>
      </div>
    </Fragment>
  );
};
export default MultifactorLogin;
