import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import Users from "../../models/Users";
interface Props {
  onSubmit: (username: string, password: string) => void;
}

const Register = ({ onSubmit }: Props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const theme = createTheme();

  // localStorage.setItem("username", username);
  // localStorage.setItem("password", password);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    let currentUsers: Users[] = [];
    const usersList = localStorage.getItem("usersList");
    if (usersList) {
      try {
        currentUsers = JSON.parse(usersList);
      } catch (error) {
        console.log(error);
      }
    }
    currentUsers.push({ username, password });
    console.log("currentUsers before: ", currentUsers);
    localStorage.setItem("usersList", JSON.stringify(currentUsers));
    console.log("currentUsers after: ", currentUsers);
    onSubmit(username, password);
  };
  return (
    <Grid width={"100%"} height={"100vh"}>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <Grid
            sx={{
              backgroundColor: "white",
              borderRadius: "5px",
              margin: "10px",
              paddingLeft: "10px",
              paddingRight: "10px",
            }}
          >
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign up
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 3 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      name="firstName"
                      required
                      fullWidth
                      autoFocus
                      id="username"
                      label="Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      margin="normal"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      autoComplete="new-password"
                      id="password"
                      label="Password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12}></Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up
                </Button>
              </Box>
            </Box>
          </Grid>
        </Container>
      </ThemeProvider>
    </Grid>
  );
};

export default Register;
