import React from "react";
import { useState } from "react";

const About = () => {
  const [values, setvalues] = useState({
    username: "",
    password: "",
  });
  const [isSubmitted, setisSubmitted] = useState();
  const onsubmit = () => {
    setisSubmitted(values.username, values.password);
  };
  const onTextChange = (event, field) => {
    setvalues({ ...values, [field]: event.target.value });
  };
  // const fun = () => {
  //   console.log(values);
  // };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <label>Username</label>
        <input
          className="form-control"
          type="text"
          placeholder="enter your username"
          onChange={(event) => onTextChange(event, "username")}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <label>password</label>
        <input
          className="form-control"
          onChange={(event) => onTextChange(event, "password")}
          type="password"
          placeholder="enter your password"
        />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button onClick={onsubmit}>Submit</button>
        <button>Clear</button>
      </div>
      <div>
        <p>{isSubmitted}</p>
      </div>
   
    </div>
  );
};

export default About;