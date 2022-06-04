import { baseUrl } from "./apiUtil";
import axios from "axios";
export const loginByPwdApi = async ({ email, password }) => {
  console.log("login apicall::", email, password, baseUrl);
  try {
    let response = await axios.post(`${baseUrl}/user/login/password`, {
      email: email,
      password: password,
    });
    console.log("login-res::", response.data);
    // save user login response to local storage
    localStorage.setItem("user", JSON.stringify(response.data.data));
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
export const multifactorLoginApi = async ({ que, email, answer }) => {
  console.log("login multifactor apicall::", que, email, answer);
  try {
    let response = await axios.post(`${baseUrl}/user/login/multi-factor`, {
      email: email,
      securityQuestion: que,
      securityAnswer: answer,
    });
    console.log("login-res::", response.data);
    // save user login response to local storage
    localStorage.setItem("user", JSON.stringify(response.data.data));
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
export const registerApi = async (userDetails) => {
  console.log("register api call", userDetails);
  const { userName, email, mobile, password } = userDetails;
  try {
    let response = await axios.post(`${baseUrl}/api/v1/cms/register`, {
      name: userName,
      email: email,
      mobile: mobile,
      password: password,
    });
    console.log("register-res::", response.data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
export const logoutUser = () => {
  console.debug("user logout func");
  localStorage.removeItem("user");
};
