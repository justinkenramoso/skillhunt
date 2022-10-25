import { TextField } from "@mui/material";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import styled from "styled-components";
import React, { useState, useEffect, useRef } from "react";
import { getStorage } from "../data/LocalStorage";

const StyledForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

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
    <div className="login">
      <StyledForm>
        <Paper elevation={6} sx={{ borderRadius: "20px", padding: "0 10px" }}>
          <div className="p-3">
            <h3>Sign In</h3>
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
            <div className="mt-1 ms-1">
              <Link href="#" underline="hover">
                {"Forgot password?"}
              </Link>
            </div>
            <div className="row mt-3 p-3">
              <div className="col-12 my-2">
                <Button fullWidth variant="contained" onClick={handleSubmit}>
                  Sign In
                </Button>
              </div>
              <div className="col-12 my-2">
                <Button fullWidth variant="outlined" type="submit">
                  Create an Account
                </Button>
              </div>
            </div>
          </div>
        </Paper>
      </StyledForm>
    </div>
  );
}
