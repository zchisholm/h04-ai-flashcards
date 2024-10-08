import React from "react";
import { SignUp } from "@clerk/nextjs";
import { Container, Box, Typography, Grid } from "@mui/material";

const SignUpPage = () => {
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      {/* Left Side with Sign-Up Form */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#ffffff", // White background for the form side
          padding: 4,
        }}
      >
        <Container maxWidth="xs">
          <Box sx={{ mb: 4, textAlign: "center" }}>
            <Typography
              component="h2"
              variant="h6"
              sx={{ color: "#0d47a1", mt: 1 }}
            >
              Create your account to get started!
            </Typography>
          </Box>
          <Box sx={{ width: "100%", mt: 2 }}>
            <SignUp
              path="/sign-up"
              routing="path"
              signInUrl="/sign-in"
              redirectUrl="/"
              appearance={{
                elements: {
                  formButtonPrimary: {
                    backgroundColor: "#1976d2", 
                    ":hover": {
                      backgroundColor: "#115293", 
                    },
                  },
                  card: {
                    boxShadow: "none", 
                  },
                  formFieldInput: {
                    borderColor: "#1976d2", 
                    ":focus": {
                      borderColor: "#115293", 
                    },
                  },
                },
                variables: {
                  colorPrimary: "#1976d2", 
                },
              }}
            />
          </Box>
        </Container>
      </Grid>

      {/* Right Side with Image or Illustration */}
      <Grid
        item
        xs={false}
        md={6}
        sx={{
          backgroundColor: "#0d47a1", 
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 50,
            color: "#fff",
            textAlign: "center",
          }}
        >
          <Typography
            component="h1"
            variant="h4"
            sx={{ fontWeight: "bold" }}
          >
            Welcome to Flashcard SaaS
          </Typography>
        </Box>
        <Box
          component="img"
          src="/images/signup-illustration.png"
          alt="Sign Up Illustration"
          sx={{
            width: "80%",
            maxWidth: "400px",
            zIndex: 2,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: 16,
            color: "#fff",
            textAlign: "center",
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Connect with every application.
          </Typography>
          <Typography variant="body1">
            Everything you need in an easily customizable dashboard.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SignUpPage;
