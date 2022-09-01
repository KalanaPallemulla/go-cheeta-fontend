import { Route, Navigate, Routes } from "react-router-dom";

function PrivateRoute({ children, type = "user" }) {
  let auth = window.localStorage.getItem("user");
  let driver = window.localStorage.getItem("driver");

  if (!auth && type === "user") {
    return <Navigate to="/login" />;
  } else if (!driver && type === "driver") {
    return <Navigate to="/driverLogin" />;
  }
  return children;
}

export default PrivateRoute;
