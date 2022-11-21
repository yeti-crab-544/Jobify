import React, { useState, useEffect } from "react";
import { Link, withRouter } from 'react-router-dom';

const ApplicationStats = () => {

  return (
    <div>
      <h1>Put graphs here</h1>
      <Link to="/" className="backLink">
        <button type="button" className="btnSecondary">
            Back to all applications
        </button>
      </Link>
    </div>
  );
}

export default ApplicationStats;