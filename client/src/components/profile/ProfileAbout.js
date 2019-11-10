import React from "react";
import PropTypes from "prop-types";

const ProfileAbout = ({
  profile: {
    skills,
    services,
    education,
    certification,
    user: { name }
  }
}) => {
  return (
    <div className='profile-about bg-light p-2'>
      <h2 className='text-info'>Skills</h2>
      <div className='skills'>
        {skills.map((skill, index) => (
          <div key={index} className='p-1'>
            <i className='fa fa-check'></i> {skill}
          </div>
        ))}
      </div>

      <h2 className='text-info'>Services</h2>
      <div className='services'>
        {services.map((service, index) => (
          <div key={index} className='p-1'>
            <i className='fa fa-check'></i> {service}
          </div>
        ))}
      </div>
    </div>
  );
};

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileAbout;
