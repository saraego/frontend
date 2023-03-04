import React from "react";
import Header from "../components/Header";
import { Route, Redirect } from "react-router-dom";

function RoutesPrivate({ component, ...rest }) {
  const user = localStorage.getItem("flex:userData");

  if (!user) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <Header />
      <Route {...rest} component={component} />
    </>
  );
}

export default RoutesPrivate;
