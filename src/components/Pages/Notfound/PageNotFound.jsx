import React from 'react';
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
    <div className="notfound">
      <h2>Oops page not found</h2>
      <Link to="/">
      <button>Go back</button>
      </Link>
    </div>
    </>
  );
};

export default PageNotFound
