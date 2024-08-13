"use client";

import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Navbar = () => (
  <AppBar position="static" sx={{ backgroundColor: "#00796b" }}>
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        Flashcard SaaS
      </Typography>
      <SignedOut>
        <Button color="inherit" href="/sign-in" sx={{ mx: 1 }}>
          Login
        </Button>
        <Button color="inherit" href="/sign-up" sx={{ mx: 1 }}>
          Sign Up
        </Button>
      </SignedOut>
      <SignedIn>
        <UserButton/>
      </SignedIn>
    </Toolbar>
  </AppBar>
);

export default Navbar;