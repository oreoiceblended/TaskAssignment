import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import { FaFilter, FaList, FaSearch, FaSort } from 'react-icons/fa';
import '../css/Dashboard.css';
import { useNavigate, Link } from "react-router-dom";
// import {FaRegBell} from "react-icons/fa"
// import {BsFillArrowRightCircleFill} from "react-icons/bs"
// import {CiSquarePlus} from "react-icons/ci"

const Dashboard = () => {
    let navigate = useNavigate();
    const viewTaskDetails = () => { 
      let path = '/details  '; 
      navigate(path);
    }

    return (
      <div style={{padding: 30}}>
        <h3 className='mb-4'>Tasks list</h3>
        <div className='buttons'>
          <Button variant="outline-dark"><FaList className='me-1'/>Show all</Button>
          <Button variant="outline-dark" style={{float: 'right'}} className='mx-1'><FaSearch className='me-1'/>Search</Button>
          <Button variant="outline-dark" style={{float: 'right'}} className='mx-1'><FaSort className='me-1'/>Sort by ID</Button>
          <Button variant="outline-dark" style={{float: 'right'}} className='mx-1'><FaFilter className='me-1'/>Filter</Button>
        </div>

        <div className='my-4'>
          <table className=''>
            <tr>
              <th>ID</th>
              <th>Staff Name</th>
              <th>Collector/Janitor</th>
              <th>Vehicle ID</th>
              <th>Route/Area</th>
              <th>Date assigned</th>
              <th>Status</th>
              <th>Detail</th>
            </tr>

            {/* add staff here */}
            <tr>
              <td>1234567</td>
              <td>Loc</td>
              <td>Collector</td>
              <td>1234567</td>
              <td>q1, q2, q3</td>
              <td>12/10/2022</td>
              <td>Completed</td>
              <td><Button variant="success" onClick={viewTaskDetails}>View details</Button></td>
            </tr>

          </table>
        </div>
        
      </div>
    );
};

export default Dashboard;