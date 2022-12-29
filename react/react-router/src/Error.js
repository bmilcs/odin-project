import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div>
      <Link to="/profile">Error: Navigate to Profile</Link>
    </div>
  );
}

export default Error;
