import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";
import Home from "./components/Home";
import { Router, BrowserRouter, Switch, Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import Signin from "./components/Signin";
import ProtectedRoute from "./ProtectedRoute";
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={SignUp} />

        <ProtectedRoute exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
