import React from "react";
import PropTypes from "prop-types";

const ProfileCertification = ({
  certification: { institution, certification, fieldofstudy }
}) => (
  <div>
    <h3 className='text-dark'>{institution}</h3>
    <p>
      <strong>Certification: </strong> {certification}{" "}
    </p>
    <p>
      <strong>Field of study: </strong> {fieldofstudy}{" "}
    </p>
  </div>
);

ProfileCertification.propTypes = {
  certification: PropTypes.array.isRequired
};

export default ProfileCertification;
