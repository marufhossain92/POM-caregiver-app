import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteCertification } from "../../actions/profile";

const Certification = ({ certification, deleteCertification }) => {
  const certifications = certification.map(cer => (
    <tr key={cer._id}>
      <td>{cer.institution}</td>
      <td className='hide-sm'>{cer.certification}</td>
      <td>{cer.fieldofstudy}</td>
      <td>
        <button
          className='btn btn-danger'
          onClick={() => deleteCertification(cer._id)}
        >
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <h2 className='my-2'>Certification</h2>
      <table className='table'>
        <thead>
          <tr>
            <th className='hide-sm'>Institution</th>
            <th className='hide-sm'>Certification</th>
            <th className='hide-sm'>Field of study</th>
          </tr>
        </thead>
        <tbody>{certifications}</tbody>
      </table>
    </Fragment>
  );
};

Certification.propTypes = {
  certification: PropTypes.array.isRequired,
  deleteCertification: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteCertification }
)(Certification);
