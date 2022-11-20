import React from "react";
import { connect } from 'react-redux';


const Job = ({ info }) => {
  const { role, company, location, status, contact, referral, salary, note } = info;  

    return (
      <div className="job">
        <ul>
          <li>Role: {role}</li>
          <li>Company: {company}</li>
          <li>Location: {location}</li>
          <li>Status: {status}</li>
          <li>Contact: {contact}</li>
          <li>Referral: {referral}</li>
          <li>Salary: {salary}</li>
          <li>Note: {note}</li>
        </ul>
      </div>
    )
}

export default Job;