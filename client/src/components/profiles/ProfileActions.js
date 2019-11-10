import React from "react";
import { Link } from "react-router-dom";

const ProfileActions = () => {
  return (
    <div className='dash-buttons'>
      <Link className='btn btn-light' to='/edit-caregiver-profile'>
        <i className='fas fa-user-circle text-info'> Edit Profile</i>
      </Link>
      <Link className='btn btn-light' to='/add-caregiver-education'>
        <i className='fas fa-graduation-cap text-info'> Add Education</i>
      </Link>
      <Link className='btn btn-light' to='/add-caregiver-certification'>
        <i className='fab fa-black-tie text-info'> Add Certification</i>
      </Link>
    </div>
  );
};

export default ProfileActions;
