import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import {
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset,
} from "@chakra-ui/core";
import ThemeToggler from "./components/ThemeToggler";
import SignUp from "./pages/SignUpForm";
import SignIn from "./pages/SignInForm";
export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <ColorModeProvider>
          <CSSReset />
          <ThemeToggler />
          <Route path = "/signin" exact = {true} component = {SignIn}/>
          <Route path = "/signup" exact = {true} component = {SignUp}/>
        </ColorModeProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}
