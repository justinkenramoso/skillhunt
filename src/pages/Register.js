import { TextField } from "@mui/material";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Autocomplete from "@mui/material/Autocomplete";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const cities = () => [
  { city: "Taguig City" },
  { city: "Pasig City" },
  { city: "Mandaluyong City" },
  { city: "Quezon City" },
  { city: "Tarlac City" },
  { city: "Navotas City" },
  { city: "Cebu City" },
  { city: "Davao City" },
];

export default function Register() {
  return (
    <div style={{ width: "500px" }}>
      <Paper elevation={6} sx={{ borderRadius: "20px", padding: "0 20px" }}>
        <div className="p-3">
          <h3>Create Account</h3>
          <div className="row mt-4">
            <div className="col">
              <TextField
                fullWidth
                size="small"
                id="firstName"
                label="First Name"
                variant="outlined"
              />
            </div>
            <div className="col">
              <TextField
                size="small"
                fullWidth
                id="lastName"
                label="Last Name"
              />
            </div>
          </div>
          <div className="my-3">
            <TextField
              fullWidth
              id="username"
              label="Username"
              variant="outlined"
            />
          </div>
          <div className="my-3">
            <TextField fullWidth id="email" label="Email" type="email" />
          </div>
          <div className="my-3">
            <TextField
              fullWidth
              id="password"
              label="Password"
              type="password"
            />
          </div>
          <div className="my-3">
            <TextField
              fullWidth
              id="confirmPassword"
              label="Confirm Password"
              type="password"
            />
          </div>
          <div className="my-3">
            <TextField
              fullWidth
              id="address"
              label="Address"
              variant="outlined"
            />
          </div>
          <div className="row">
            <div className="col-lg-6 mb-3">
              <Autocomplete
                id="city"
                freeSolo
                options={cities().map((choice) => choice.city)}
                renderInput={(params) => <TextField {...params} label="City" />}
              />
            </div>
            <div className="col-lg-6 mb-3">
              <TextField
                fullWidth
                id="zip"
                label="Zip Code"
                variant="outlined"
                type="number"
              />
            </div>
          </div>
          <div className="row p-3">
            <div className="col-lg-4 my-2 order-lg-1">
              <Button fullWidth variant="contained">
                Sign Up
              </Button>
            </div>
            <div className="col-lg-8 my-2">
              <Button fullWidth variant="outlined">
                Sign In Instead
              </Button>
            </div>
          </div>
        </div>
      </Paper>
    </div>
  );
}
