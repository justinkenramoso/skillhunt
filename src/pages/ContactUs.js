import React from "react";
import bg from "../images//backgrounds/bits.svg";
import { TextField, Button } from "@mui/material";
import contact from "../images/contact.svg";

function ContactUs() {
  return (
    <div id="contact" style={{ backgroundImage: `url(${bg})` }}>
      <div className="container-md p-5">
        <div id="contact-form">
          <h2>
            Contact <span className="color1">Us</span>
          </h2>
          <form>
            <TextField
              fullWidth
              id="name"
              label="Name"
              variant="outlined"
              sx={{ margin: "10px auto" }}
            />
            <TextField
              fullWidth
              id="subject"
              label="Subject"
              variant="outlined"
              sx={{ margin: "10px auto" }}
            />
            <TextField
              fullWidth
              id="msg"
              label="Message"
              variant="outlined"
              sx={{ margin: "10px auto" }}
              multiline
            />
            <Button variant="contained" fullWidth sx={{ marginTop: "20px" }}>
              Send
            </Button>
          </form>
          <div className="centered-flex">
            <img src={contact} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
