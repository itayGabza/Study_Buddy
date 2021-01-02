
import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import './Feed.scss'
const Feed = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? <text></text> : <text > </text>;
};

export default Feed

