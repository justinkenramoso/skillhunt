import { TextField, FormHelperText } from "@mui/material";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import styled from "styled-components";
import React, { useState, useEffect, useRef } from "react";
import { getStorage, setStorage } from "../data/LocalStorage";
import bits from "../images/backgrounds/bits.svg";
import { Link } from "react-router-dom";

const StyledForm = styled.div`
  padding-top: 8vh;
  padding-bottom: 5vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 20px;
  padding-right: 20px;
`;

//Debouncing
const Debounce = (func, timeout = 800) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
};

export default function Register() {
  const errorInitial = {
    firstName: false,
    lastName: false,
    userName: false,
    email: false,
    password: false,
    confirmPassword: false,
    address: false,
    city: false,
    zipCode: false,
  };
  const formRef = useRef("");
  const firstNameRef = useRef("");
  const lastNameRef = useRef("");
  const userNameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const confirmPasswordRef = useRef("");
  const addressRef = useRef("");
  const cityRef = useRef("");
  const zipCodeRef = useRef("");
  const [id, setId] = useState(Date.now());
  const [register, setRegister] = useState(getStorage("register"));
  const [error, setError] = useState(errorInitial);

  //function validation on input onChange
  const validate = (e) => {
    //initialize id and value using destructuring object
    const { id, value } = e.target;

    if (value.length === 0) {
      //if input isEmpty set error to TRUE
      const newObj = {};
      newObj[id] = true;
      setError((prevError) => ({ ...prevError, ...newObj }));
    } else {
      switch (id) {
        case "userName":
          //if userName already excess set error to TRUE
          register.some(
            (person) => person.userName.toLowerCase() === value.toLowerCase()
          )
            ? setError((prevError) => ({ ...prevError, userName: true }))
            : setError((prevError) => ({ ...prevError, userName: false }));
          break;
        case "email":
          //if email already excess or email pattern invalid set error to TRUE
          const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          !pattern.test(value) ||
          register.some(
            (person) => person.email.toLowerCase() === value.toLowerCase()
          )
            ? setError((prevError) => ({ ...prevError, email: true }))
            : setError((prevError) => ({ ...prevError, email: false }));
          break;
        case "confirmPassword":
          //if confirmpassword is not equal to password set error to TRUE
          value !== passwordRef.current.value
            ? setError((prevError) => ({ ...prevError, confirmPassword: true }))
            : setError((prevError) => ({
                ...prevError,
                confirmPassword: false,
              }));
          break;
        default:
          //if no more error set Error to FALSE
          const newObj = {};
          newObj[id] = false;
          setError((prevError) => ({ ...prevError, ...newObj }));
          break;
      }
    }
  };

  //function run on Signup button click
  const handleSubmit = (e) => {
    //preventing submit default
    e.preventDefault();

    //These are the new input values using useRef hook
    const inputValues = {
      id: id,
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      userName: userNameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      confirmPassword: confirmPasswordRef.current.value,
      address: addressRef.current.value,
      city: cityRef.current.value,
      zipCode: zipCodeRef.current.value,
    };

    //checking if there are errors
    let isValid = true;

    for (let x in error) {
      error[x] && (isValid = false);
    } //checking state error object if there is true
    // for (let x of register) { (inputValues.id === x.id) && (isValid = false)}  //info already exist in register
    //    console.log(inputValues.id === x.id)
    //   // (x === inputValues) && (isValid = false)
    // }

    //run only when all inputs is valid
    if (isValid) {
      setRegister([...register, inputValues]);

      //reset all useRef input fields
      formRef.current.reset();
    }
  };

  return (
    <StyledForm style={{ backgroundImage: `url(${bits})` }}>
      <Paper elevation={6} sx={{ borderRadius: "20px", padding: "0 20px" }}>
        <form className="p-3" onSubmit={handleSubmit} ref={formRef}>
          <h3 className="login-header">
            Create <span className="color1">Account</span>
          </h3>
          <div className="row mt-4">
            <div className="col">
              <TextField
                fullWidth
                autoFocus
                size="small"
                id="firstName"
                label="First Name"
                variant="outlined"
                inputRef={firstNameRef}
                onChange={Debounce(validate, 1000)}
                error={error.firstName}
              />
              {error.firstName && (
                <FormHelperText error>
                  please enter a valid input
                </FormHelperText>
              )}
            </div>
            <div className="col">
              <TextField
                size="small"
                fullWidth
                id="lastName"
                label="Last Name"
                inputRef={lastNameRef}
                onChange={Debounce(validate, 1000)}
                error={error.lastName}
              />
              {error.lastName && (
                <FormHelperText error>
                  please enter a valid input
                </FormHelperText>
              )}
            </div>
          </div>
          <div className="my-3">
            <TextField
              fullWidth
              id="userName"
              label="Username"
              variant="outlined"
              inputRef={userNameRef}
              onChange={Debounce(validate, 1000)}
              error={error.userName}
            />
            {error.userName && (
              <FormHelperText error>
                Username already Exist or Invalid
              </FormHelperText>
            )}
          </div>
          <div className="my-3">
            <TextField
              fullWidth
              id="email"
              label="Email"
              type="text"
              inputRef={emailRef}
              error={error.email}
              onChange={Debounce(validate, 1000)}
            />
            {error.email && (
              <FormHelperText error>
                Email already Exist or Invalid
              </FormHelperText>
            )}
          </div>
          <div className="my-3">
            <TextField
              fullWidth
              id="password"
              label="Password"
              type="password"
              inputRef={passwordRef}
              error={error.password}
              onChange={Debounce(validate, 1000)}
            />
            {error.password && (
              <FormHelperText error>Invalid password</FormHelperText>
            )}
          </div>
          <div className="my-3">
            <TextField
              fullWidth
              id="confirmPassword"
              label="Confirm Password"
              type="password"
              inputRef={confirmPasswordRef}
              error={error.confirmPassword}
              onChange={Debounce(validate, 1000)}
            />
            {error.confirmPassword && (
              <FormHelperText error>Invalid confirm password</FormHelperText>
            )}
          </div>
          <div className="my-3">
            <TextField
              fullWidth
              id="address"
              label="Address"
              variant="outlined"
              inputRef={addressRef}
              error={error.address}
              onChange={Debounce(validate, 1000)}
            />
            {error.address && (
              <FormHelperText error>Invalid input</FormHelperText>
            )}
          </div>
          <div className="row">
            <div className="col-lg-6 mb-3">
              <TextField
                label="City"
                id="city"
                inputRef={cityRef}
                error={error.city}
                onChange={Debounce(validate, 1000)}
              />
              {error.city && (
                <FormHelperText error>Invalid input</FormHelperText>
              )}
            </div>
            <div className="col-lg-6 mb-3">
              <TextField
                fullWidth
                id="zipCode"
                label="Zip Code"
                variant="outlined"
                type="number"
                inputRef={zipCodeRef}
                error={error.zipCode}
                onChange={Debounce(validate, 1000)}
              />
              {error.zipCode && (
                <FormHelperText error>Invalid input</FormHelperText>
              )}
            </div>
          </div>
          <div className="row p-3">
            <div className="col-12 my-2">
              <Button fullWidth variant="contained" type="submit">
                Sign Up
              </Button>
            </div>
            <div className="col-12 my-2">
              <Link to="/login" style={{ textDecoration: "none" }}>
                <Button fullWidth variant="outlined">
                  Sign In Instead
                </Button>
              </Link>
            </div>
          </div>
        </form>
      </Paper>
    </StyledForm>
  );
}
