import React, { Fragment } from "react";
import "../css/App.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      user: "",
      loginResponse: "",
      time: "",
      securityQuestion: "",
      securityAnswer: "",
    };
  }

  handleChange(e, field, value) {
    e.preventDefault();
    this.setState({
      [field]: value,
    });
  }

  handleSubmit(e) {
    console.log("login submit component");
    e.preventDefault();
    let userInfo = {
      email: this.state.email,
      password: this.state.password,
    };
    console.log("userInfo:", userInfo);
    this.props.userAction(userInfo);
  }
  componentDidUpdate(prevProps, _prevState) {
    // handle post login i.e. user state
    if (prevProps.user !== this.props.user) {
      console.log("user state has changed.");
      const { message, login_status } = this.props.user;
      toast.success(message);
      if (login_status !== "FAILED") {
        console.log("route to dashboard");
        this.setState({
          loginResponse: `Authentication Success :: Redirecting to home...`,
        });
        setTimeout(() => {
          this.props.history.push("/articles");
        }, 1500);
      } else {
        this.setState({
          loginResponse: `Authentication failed :: Try Again`,
        });
        setTimeout(() => this.setState({ loginResponse: "" }), 1500);
      }
    }
  }

  render() {
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
            <form onSubmit={(e) => this.handleSubmit(e)}>
              <div className="form-group login-block-alignment">
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  type="text"
                  className="form-control login-input"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  onChange={(e) =>
                    this.handleChange(e, "email", e.target.value)
                  }
                />
              </div>
              <div className="form-group">
                <TextField
                  label="Password"
                  variant="outlined"
                  type="password"
                  className="form-control login-input"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  onChange={(e) =>
                    this.handleChange(e, "password", e.target.value)
                  }
                />
              </div>
              <div className="btn__div">
                <Button
                  variant="contained"
                  type="submit"
                  className="btn btn-primary btn-sm btn-block login-btn"
                >
                  Submit
                </Button>
                <div className="forgot__pwd__div">
                  <span onClick={() => this.props.history.push("/register")}>
                    New User?
                  </span>
                </div>
              </div>
            </form>
          </Box>
        </div>
        <div className="login-header">Multi-factor Authentication</div>
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
                label="Security Question"
                variant="outlined"
                type="text"
                className="form-control login-input"
                aria-describedby="emailHelp"
                placeholder="Security Question"
                value={"Enter que"}
              />
            </div>
            <div className="form-group login-block-alignment">
              <TextField
                label="Security Answer"
                variant="outlined"
                type="text"
                className="form-control login-input"
                id="exampleInputPassword1"
                placeholder="Security Answer"
                onChange={(e) =>
                  this.handleChange(e, "password", e.target.value)
                }
              />
            </div>
            <div className="btn__div">
              <Button
                variant="contained"
                type="submit"
                className="btn btn-primary btn-sm btn-block login-btn"
              >
                Submit
              </Button>
              <div className="forgot__pwd__div">
                <span onClick={() => this.props.history.push("/register")}>
                  New User?
                </span>
              </div>
            </div>
          </Box>
        </div>
        <div>
          <span>{this.state.loginResponse}</span>
        </div>
      </Fragment>
    );
  }
}

export default Login;
