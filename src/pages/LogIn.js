import { TextField } from "@mui/material";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export default function LogIn() {
  return (
    <div style={{ width: "400px" }}>
      <Paper elevation={6} sx={{ borderRadius: "20px", padding: "0 10px" }}>
        <div className="p-3">
          <h3>Sign In</h3>
          <div className="my-3">
            <TextField
              fullWidth
              id="username"
              label="Username"
              variant="outlined"
            />
          </div>
          <div className="mt-3">
            <TextField
              fullWidth
              id="password"
              label="Password"
              type="password"
              autoComplete="current-password"
            />
          </div>
          <div className="mt-1 ms-1">
            <Link href="#" underline="hover">
              {"Forgot password?"}
            </Link>
          </div>
          <div className="row mt-3 p-3">
            <div className="col-lg-4 my-2 order-lg-1">
              <Button fullWidth variant="contained">
                Sign In
              </Button>
            </div>
            <div className="col-lg-8 my-2">
              <Button fullWidth variant="outlined">
                Create an Account
              </Button>
            </div>
          </div>
        </div>
      </Paper>
    </div>
  );
}
