import React from "react";
import "../src/styles.css";
import Signup from "./signup";

function Register() {
  const [user, setUser] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNum: ""
  });

  const registerUser = (values) => {
    console.log("regster", values);
    setUser({
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      phoneNum: values.phoneNum
    });
  };

  const logOut = () => {
    console.log("logOut");
    setUser({ firstName: "" });
  };
  return (
    <>
      {user.firstName !== "" ? (
        <div>
          <h1>
            Welcome, <span>{user.firstName}</span>
          </h1>
          <br />
          <p>Last Name: {user.lastName}</p>
          <p>Email: {user.email}</p>
          <p>Telephone number: {user.phoneNum}</p>
          <button onClick={logOut}>Log Out</button>
        </div>
      ) : (
        <Signup registerUser={registerUser} />
      )}
    </>
  );
}

export default Register;
