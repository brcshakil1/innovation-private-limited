import { Navigate } from "react-router-dom";
import { PropTypes } from "prop-types";

const PrivetRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const username = user?.username;

  if (username) {
    return children;
  }

  return <Navigate to="/login"></Navigate>;
};

PrivetRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivetRoute;
