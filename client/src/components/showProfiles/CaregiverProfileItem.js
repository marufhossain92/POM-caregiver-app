import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CaregiverProfileItem = ({
  profile: {
    user: { _id, name, city, avatar },
    hourlywage,
    experience
  }
}) => {
  return (
    <div className='profile bg-light pt-2'>
      <img src={avatar} alt='' className='round-img' />
      <h4>{name}</h4>
      <strong>Hourly Wage:</strong> ${hourlywage}
      <strong>Experience:</strong> {experience}
      <strong>Location:</strong> {city}
      <Link to={`/profile-caregiver/${_id}`} className='btn btn-dark'>
        View Profile
      </Link>
    </div>
  );
};

CaregiverProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default CaregiverProfileItem;
