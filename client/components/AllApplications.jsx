import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Job from "./Job";
import AppliedColumn from "./AppliedColumn";
import FinalColumn from "./FinalColumn";
import OfferColumn from "./OfferColumn";
import PhoneColumn from "./PhoneColumn";
import RejectedColumn from "./RejectedColumn";
import TechnicalColumn from "./TechnicalColumn";

const AllApplications = () => {
  //add functionality here

  return (
    <section className="mainSection">
        <Link to={'/AddApplication'}>
          <button
            type="button"
            className="linkButton">Add New Job</button>
        </Link>
        {/* 
        <AppliedColumn />
        <PhoneColumn />
        <TechnicalColumn />
        <FinalColumn />
        <OfferColumn />
        <RejectedColumn />
        */}
      <h1>hello there</h1>
    </section>
  );
}

export default AllApplications;
