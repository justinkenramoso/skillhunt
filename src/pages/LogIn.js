import { TextField } from "@mui/material";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import React, { useState, useEffect, useRef } from "react";
import { getStorage } from "../data/LocalStorage";
import bits from "../images/backgrounds/bits.svg";
import login from "../images/login/login.svg";

export default function LogIn() {
  const [register, setRegister] = useState(getStorage("register"));

  const inputRef = useRef();

  useEffect(() => {
    //focus input element
    inputRef.current.focus();
    console.log(register);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div id="login" className="row" style={{ backgroundImage: `url(${bits})` }}>
      <div className="col-md-6 p-0">
        <div id="login-form">
          <Paper elevation={6} sx={{ borderRadius: "20px", padding: "0 10px" }}>
            <div className="p-3">
              <h3 className="login-header">
                Sign <span className="color1">In</span>
              </h3>
              <div className="my-3">
                <TextField
                  fullWidth
                  id="username"
                  label="Username"
                  variant="outlined"
                  ref={inputRef}
                />
              </div>
              <div className="mt-3">
                <TextField
                  fullWidth
                  id="password"
                  label="Password"
                  type="password"
                />
              </div>
              <div className="row mt-3 p-3">
                <div className="col-12 my-2">
                  <Button fullWidth variant="contained" onClick={handleSubmit}>
                    Sign In
                  </Button>
                </div>
                <div className="col-12 my-2">
                  <Link to="/register" style={{ textDecoration: "none" }}>
                    <Button fullWidth variant="outlined">
                      Create an Account
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </Paper>
        </div>
      </div>
      <div id="login-left" className="col-md-6 p-0">
        <img src={login} alt="" />
      </div>
    </div>
  );
}
