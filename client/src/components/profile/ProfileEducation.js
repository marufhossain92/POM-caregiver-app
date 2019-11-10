import React from "react";
import PropTypes from "prop-types";

const ProfileEducation = ({ education: { school, degree, fieldofstudy } }) => (
  <div>
    <h3 className='text-dark'>{school}</h3>
    <p>
      <strong>Degree: </strong> {degree}{" "}
    </p>
    <p>
      <strong>Field of study: </strong> {fieldofstudy}{" "}
    </p>
  </div>
);

ProfileEducation.propTypes = {
  education: PropTypes.array.isRequired
};

export default ProfileEducation;
