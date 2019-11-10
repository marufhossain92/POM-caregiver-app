import React from "react";
import PropTypes from "prop-types";

const ProfileTop = ({
  profile: {
    hourlywage,
    experience,
    languages,
    transportation,
    user: { _id, name, gender, avatar }
  }
}) => {
  return (
    <div className='profile-top bg-info p-2 text-center'>
      <img src={avatar} alt='' className='round-img my-1' />
      <h2 className='large'>{name}</h2>
      <p>{gender}</p>
      <p>
        <strong>Hourly Wage:</strong> ${hourlywage} <strong>Experience:</strong>{" "}
        {experience}
      </p>
      <p>
        <strong>Languages:</strong> {languages}{" "}
        <strong>Transportation Facility:</strong> {transportation}
      </p>
    </div>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileTop;
