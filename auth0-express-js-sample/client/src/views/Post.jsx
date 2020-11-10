
import { useAuth0 } from "@auth0/auth0-react";
import React, { Text } from "react";
import './Feed.scss'
const Feed = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? <text className="feedText">You are loggedin so the Post form  will be here </text> : <text className="feedText">Login to see post form </text>;
};

export default Feed

