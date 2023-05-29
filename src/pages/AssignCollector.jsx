import React, {useState} from 'react';
import { useNavigate, Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../css/AssignCollector.css';

const AssignCollector = () => {
  let navigate = useNavigate();
  const assignSuccessCollector = () => {
    return;
  }

  return (
    <div style={{padding: 30}}>
      <h3 className='mb-4'>Assign task for collector</h3>
      {/* <div className='buttons'>
        <Button variant="outline-dark"><FaList className='me-1'/>Show all</Button>
        <Button variant="outline-dark" style={{float: 'right'}} className='mx-1'><FaSearch className='me-1'/>Search</Button>
        <Button variant="outline-dark" style={{float: 'right'}} className='mx-1'><FaSort className='me-1'/>Sort by ID</Button>
        <Button variant="outline-dark" style={{float: 'right'}} className='mx-1'><FaFilter className='me-1'/>Filter</Button>
      </div> */}
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <Form.Select aria-label="Default select example">
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </div>
          <div className="col-lg-4">
            <Form.Select aria-label="Default select example">
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </div>
          <div className="col-lg-4">
            <Form.Select aria-label="Default select example">
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-end m-4 gap-2">
        <Button variant="outline-success" size='lg' onClick={() => {navigate('/dashboard');}}>Cancel</Button>
        <Button variant="success" size='lg' onClick={assignSuccessCollector}>Save</Button>
      </div>
      
    </div>
  );
}

export default AssignCollector;