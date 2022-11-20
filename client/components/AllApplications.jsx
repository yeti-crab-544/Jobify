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

  // const [applied, setApplied] = useState([]);
  // const [phone, setPhone] = useState([]);
  // const [technical, setTechnical] = useState([]);
  // const [final, setFinal] = useState([]);
  // const [offer, setOffer] = useState([]);
  // const [rejected, setRejected] = useState([]);
  // // const applied = [];

  const [state, setState] = useState([]);

  // const [applied, setApplied] = useState([]);
  // const [state, setState] = useState([]);
  // const [state, setState] = useState([]);
  // const [state, setState] = useState([]);
  // const [state, setState] = useState([]);
  // const [state, setState] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api')
      .then(jobs => jobs.json())
      .then((parsedJobs) => {
        // console.log('parsedJobs '+ parsedJobs)
        // for (let i = 0; i < parsedJobs.length; i++) {
        //   if (parsedJobs[i].status === 'applied') setApplied((applied) => [...applied, parsedJobs[i]]);
        //   if (parsedJobs[i].status === 'applied') applied.push(parsedJobs[i])
        //   else if (parsedJobs[i].status === 'phone') setPhone((phone) => [...phone, parsedJobs[i]]);
        //   else if (parsedJobs[i].status === 'technical') setTechnical((technical) => [...technical, parsedJobs[i]]);
        //   else if (parsedJobs[i].status === 'offer') setOffer((offer) => [...offer, parsedJobs[i]]);
        //   else if (parsedJobs[i].status === 'rejected') setRejected((rejected) => [...rejected, parsedJobs[i]]);
        // }
        setState(parsedJobs);
      })
      .catch(err => console.log('Jobs.useEffect: get jobs: ERROR: ', err));
  }, [state])

//  console.log(state)
//  const phone = [];
//  const technical = [];
//  const final = []
//  const offer = [];
//  const rejected = [];
 


    // for (let i = 0; i < state.length; i++) {
    //   if (state[i].status === 'applied') setApplied((applied) => [...applied, state[i]])
    //   else if (state[i].status === 'phone') phone.push(state[i])
    //   else if (state[i].status === 'technical') technical.push(state[i])
    //   else if (state[i].status === 'final') final.push(state[i])
    //   else if (state[i].status === 'offer') offer.push(state[i])
    //   else if (state[i].status === 'rejected') rejected.push(state[i])
    //     }

// console.log(applied);
// console.log(Array.isArray(applied)); 
// console.log(rejected)
const jobElems = state.map((job, i) => {
  return (
    <Job
      key={i}
      info={job}
    />
  );
});

  return (
    <section className="mainSection">
        <Link to={'/AddApplication'}>
          <button
            type="button"
            className="linkButton">Add New Job</button>
        </Link>
        {/* <AppliedColumn appliedArr={applied}/>
        <PhoneColumn phoneArr={phone}/>
        <TechnicalColumn technicalArr={technical}/>
        <FinalColumn finalArr={final}/>
        <OfferColumn offerArr={offer}/>
        <RejectedColumn rejectedArr={rejected}/> */}
      <h1>hello there</h1>
      {jobElems}
    </section>
  );
}

export default AllApplications;
