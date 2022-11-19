import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Job from "./Job";
import AppliedColumn from "./AppliedColumn";
import FinalColumn from "./FinalColumn";
import OfferColumn from "./OfferColumn";
import PhoneColumn from "./PhoneColumn";
import RejectedColumn from "./RejectedColumn";
import TechnicalColumn from "./TechnicalColumn";

const AllApplications = () => {
  //add functionality here

  //add fetch request and set up initial state

  const [applied, setApplied] = useState([]);
  const [phone, setPhone] = useState([]);
  const [technical, setTechnical] = useState([]);
  const [final, setFinal] = useState([]);
  const [offer, setOffer] = useState([]);
  const [rejected, setRejected] = useState([]);

  useEffect(() => {
    fetch('/api/')
      .then(jobs => jobs.json())
      .then((parsedJobs) => {
        for (let i = 0; i < parsedJobs.length; i++) {
          if (parsedJobs[i].status === 'applied') setApplied(...applied, parsedJobs[i]);
          else if (parsedJobs[i].status === 'phone') setPhone(...phone, parsedJobs[i]);
          else if (parsedJobs[i].status === 'technical') setTechnical(...technical, parsedJobs[i]);
          else if (parsedJobs[i].status === 'offer') setOffer(...offer, parsedJobs[i]);
          else if (parsedJobs[i].status === 'rejected') setRejected(...rejected, parsedJobs[i]);
        }
      })
      .catch(err => console.log('Plants.componentDidMount: get plants: ERROR: ', err));
  })

 

  return (
    <section className="mainSection">
        <Link to={'/AddApplication'}>
          <button
            type="button"
            className="linkButton">Add New Job</button>
        </Link>
        <AppliedColumn appliedArr={state.applied}/>
        <PhoneColumn phoneArr={state.phone}/>
        <TechnicalColumn technicalArr={state.technical}/>
        <FinalColumn finalArr={state.final}/>
        <OfferColumn offerArr={state.offer}/>
        <RejectedColumn rejectedArr={state.rejected}/>
      <h1>hello there</h1>
    </section>
  );
}

export default AllApplications;
