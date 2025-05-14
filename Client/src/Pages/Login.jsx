import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { keyframes } from "@emotion/react";
import { CameraAlt } from "@mui/icons-material";
import { VisuallyHiddenInput } from "../component/Styles/Styledcomponent";
// Animation keyframes
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

function Login() {
  const [isLogin, setLogin] = useState(true);
  const toggleLogin = () => setLogin((prev) => !prev);

  return (
    <Box
      sx={{
        backgroundColor: "#0d1117",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
      }}
    >
      <Container maxWidth="md">
        <Paper
          elevation={12}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            borderRadius: 4,
            overflow: "hidden",
            backgroundColor: "#161b22",
          }}
        >
          {/* Left Side (Text & Animation) */}
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              backgroundColor: "#0d1117",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              p: 4,
              animation: `${fadeIn} 1.2s ease-in-out`,
              color: "#c9d1d9",
            }}
          >
            <Typography
              variant="h3"
              sx={{ fontWeight: "bold", mb: 2, color: "#58a6ff" }}
            >
              Chatify 🔥
            </Typography>
            <Typography variant="body1" sx={{ fontSize: "1.1rem" }}>
              Connect with your friends in real-time. Share thoughts, laugh, and
              create lasting memories together. Join the future of communication
              — fast, fun, and secure!
            </Typography>
          </Box>

          {/* Right Side (Form) */}
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              p: 4,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              color: "white",
            }}
          >
            <Typography
              variant="h4"
              gutterBottom
              fontWeight="bold"
              textAlign="center"
              mb={isLogin ? 3 : 1}
            >
              {isLogin ? "Welcome Back 👋" : ""}
            </Typography>

            {!isLogin && (
              <Stack
                position={"relative"}
                width={"10rem"}
                margin={"auto"}
                mb={2}
              >
                <Avatar
                  sx={{
                    width: "10rem",
                    height: "10rem",
                    margin: "auto",
                  }}
                />
                <label
                  htmlFor="profile-pic-upload"
                  style={{
                    position: "absolute",
                    bottom: 0,
                    right: "25%",
                    backgroundColor: "#2ea043",
                    borderRadius: "50%",
                    padding: "8px",
                    cursor: "pointer",
                  }}
                >
                  <CameraAlt sx={{ color: "white" }} />
                  <VisuallyHiddenInput
                    type="file"
                    id="profile-pic-upload"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (file) {
                        console.log("Selected file:", file);
                        // Optional: Handle preview or upload here
                      }
                    }}
                  />
                </label>
              </Stack>
            )}

            <Typography
              variant="body2"
              sx={{ mb: 3, color: "#8b949e", textAlign: "center" }}
            >
              {isLogin
                ? "Login to chat with your friends, securely and quickly."
                : "Sign up to start chatting with the world instantly!"}
            </Typography>

            <form>
              {!isLogin && (
                <>
                  <TextField
                    label="Full Name"
                    variant="filled"
                    fullWidth
                    margin="normal"
                    InputProps={{ style: { color: "#fff" } }}
                    InputLabelProps={{ style: { color: "#8b949e" } }}
                  />
                  <TextField
                    label="Bio"
                    variant="filled"
                    fullWidth
                    margin="normal"
                    InputProps={{ style: { color: "#fff" } }}
                    InputLabelProps={{ style: { color: "#8b949e" } }}
                  />
                </>
              )}
              <TextField
                label="Username"
                variant="filled"
                fullWidth
                margin="normal"
                InputProps={{ style: { color: "#fff" } }}
                InputLabelProps={{ style: { color: "#8b949e" } }}
              />
              <TextField
                label="Password"
                type="password"
                variant="filled"
                fullWidth
                margin="normal"
                InputProps={{ style: { color: "#fff" } }}
                InputLabelProps={{ style: { color: "#8b949e" } }}
              />
              <Button
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  fontWeight: "bold",
                  backgroundColor: "#238636",
                  "&:hover": { backgroundColor: "#2ea043" },
                }}
              >
                {isLogin ? "Login" : "Sign Up"}
              </Button>
              <Button
                fullWidth
                variant="text"
                sx={{ mt: 2, color: "#58a6ff" }}
                onClick={toggleLogin}
              >
                {isLogin
                  ? "New here? Sign Up"
                  : "Already have an account? Login"}
              </Button>
            </form>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

export default Login;
