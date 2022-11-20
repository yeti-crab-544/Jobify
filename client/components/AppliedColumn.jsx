import React from "react";
import { connect } from 'react-redux';
import Job from "./Job";


const AppliedColumn = appliedArr => {

  console.log(Array.isArray(appliedArr))
  console.log("length is " + appliedArr.length)
  // console.log(appliedArr.length); 
  // if (!appliedArr) {
    // const appliedElems = appliedArr.map((job, i) => {
      console.log('applied arr' + appliedArr)
      const appliedElems = [];
      
      // console.log(Object.keys(appliedArr));

        
        // console.log(appliedArr.length); 
        // for (keys in appliedArr) {
        //   // const currentJob = appliedArr[i];
        //   appliedElems.push(<Job
        //   key={i}
        //   info={appliedArr[keys]}
        //   />)
        // }
  
      
    // };

    console.log('applied elems' + appliedElems);
  
    return (
      <div className="column">
        <h1>Applied</h1>
        {/* {appliedElems} */}
      </div>
    )
}

export default AppliedColumn;