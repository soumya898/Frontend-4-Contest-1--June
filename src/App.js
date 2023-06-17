import React, { useState } from "react";
// import { ReactDOM } from "react";

const App = () => {
  //   const [formDetails, setFormDetails] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [err, setErr] = useState("");
  const [succMsg, setSuccMsg] = useState("");
  const formValidation = (e) => {
    e.preventDefault();

    if (!name && !email && !password && !cPassword) {
      setErr("Please Enter valid details in all fields before signup");
      setSuccMsg("");
      return;
    }

    if (name === "" || !name.includes(" ")) {
      setErr("Full Name is Required");
      setSuccMsg("");
      return;
    }

    if (email === "" || !email.includes("@")) {
      setErr("Valid Email is Required");
      setSuccMsg("");
      return;
    }

    if (password === "" || password.length !== 6) {
      setErr("Password should have at least 6 characters");
      setSuccMsg("");
      return;
    }

    if (cPassword !== password) {
      setErr(
        `Password Mismatch. Please Enter same password in 'Confirm Password' field.`
      );
      setSuccMsg("");
      return;
    }

    setErr("");

    setSuccMsg("Congratulations, You have successfully signed up.");
  };

  return (
    <div className="app">
      <div className="form">
        <h1>SignUp</h1>
        <form>
          <input
            type="text"
            placeholder="Full Name"
            onChange={(e) => setName(e.target.value.trim())}
          />
          <br></br>
          <hr />
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value.trim())}
          />
          <br></br>
          <hr />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value.trim())}
          />
          <br></br>
          <hr />
          <input
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => setCPassword(e.target.value.trim())}
          />
          <br></br>
          <hr />
          <br></br>
          {err && <h4 id="err">{err}</h4>}
          {succMsg && <h4 id="success">{succMsg}</h4>}
          <br></br>
          <button onClick={formValidation}> SignUp </button>
        </form>
      </div>
    </div>
  );
};

export default App;
