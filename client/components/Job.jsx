import React, { useState } from "react";
import Select from "react-dropdown-select";
import { connect } from 'react-redux';



const Job = ({ info }) => {
  //destructure info prop
  const { role, company, location, status, contact, referral, salary, note } = info;


  const changeStatus = event => {
    // console.log(event.target.value);
    const company = event.target.id;
    const value = event.target.value;

      const body = {
        value: value,
      };
      fetch(`/api/${company}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'Application/JSON'
        },
        body: JSON.stringify(body)
      })
        .then(resp => resp.json())
        .then(data => {
          console.log(data);
        })
        // .then(() => {
        //   props.history.push('/');
        // })
        .catch(err => console.log('saveStatusChange fetch /api/companyName: ERROR: ', err));

        window.location.reload();
    
    }

    //for react drop down select
    // const options = [
    //   { label: "Applied", value: 'applied' },
    //   { label: "Phone Interview Completed", value: 'phone' },
    //   { label: "Technical Interview Completed", value: 'technical' },
    //   { label: "Final Interview Completed", value: 'final' },
    //   { label: "Offer Received", value: 'offer' },
    //   { label: "Application Rejected", value: 'rejected' },
    // ]


    return (
      <div className="job">
        <ul>
          <li className="larger">{role}</li>
          <li className="larger">{company}</li>
          <li>Location: {location}</li>
          <li>Status: {status}</li>
          <li>Contact: {contact}</li>
          <li>Referral: {referral}</li>
          <li>Salary: {salary}</li>
          <li>Notes: {note}</li>
        </ul>
        <h3>Change application status:</h3>
        {/* <Select id={company} options={options} onChange={changeStatus} value={options.value} /> */}
        <select id={company} className="dropdown" onChange={changeStatus}>
          <option value="none">Select New Status</option>
          <option value="applied">Applied</option>
          <option value="phone">Phone Interview Completed</option>
          <option value="technical">Technical Interview Completed</option>
          <option value="final">Final Interview Completed</option>
          <option value="offer">Offer</option>
          <option value="rejected">Rejected</option>
        </select>
      </div>
    )
  };

  export default Job;