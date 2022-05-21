import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Signin() {
  const [userData, setUserData] = useState({ Email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState({ value: "" });
  const data = JSON.parse(localStorage.getItem("User"));
  const history = useHistory();
  const handleInputChange = (e) => {
    setUserData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data) {
      if (userData.Email === "" || userData.password === "") {
        setErrorMessage((prevState) => ({
          value: "Empty Email/password field",
        }));
      } else if (
        userData?.Email == data?.email &&
        userData.password == data?.password
      ) {
        window.sessionStorage.setItem("token", data?.loginToken);
        localStorage.setItem("isAuthenticated", "true");
        window.location.pathname = "/";
      } else {
        setErrorMessage((prevState) => ({
          value: "Invalid Email/password",
        }));
      }
    } else {
      setErrorMessage((prevState) => ({ value: "Invalid Email/password" }));
    }
  };
  const signup = () => {
    history.push("/signup");
  };
  return (
    <div className="text-center">
      <h1>Signin User</h1>
      <form style={{ display: "inline-block" }}>
        <div>
          <label>Email</label>
          <input
            // className="form-control"
            type="email"
            name="Email"
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div>
          <label>Password</label>
          <input
            // className="form-control"
            type="password"
            name="password"
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <button type="submit" className="button" onClick={handleSubmit}>
          Submit
        </button>

        {errorMessage.value && (
          <p className="text-danger"> {errorMessage.value} </p>
        )}
      </form>
      <h2>If not registered please signup</h2>

      <button className="button" onClick={signup}>
        Click to Sign Up
      </button>
    </div>
  );
}

export default Signin;
