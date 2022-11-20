import React from "react";
import Select from "react-dropdown-select";
import { connect } from 'react-redux';


const Job = ({ info }) => {
  const { role, company, location, status, contact, referral, salary, note } = info;

  //for react drop down select
  const options = [
    { label: "applied", value: 1 },
    { label: "phone", value: 2 },
    { label: "technical", value: 3 },
    { label: "final", value: 4 },
    { label: "offer", value: 5 },
    { label: "rejected", value: 6 },
  ]


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
        <Select options={options} onChange={(values) => this.setValues(values)} />
      </div>
      
    
  )
}

export default Job;