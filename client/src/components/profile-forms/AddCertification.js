import React, { Fragment, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addCertification } from "../../actions/profile";

const AddCertification = ({ addCertification, history }) => {
  const [formData, setFormData] = useState({
    institution: "",
    certification: "",
    fieldofstudy: ""
  });

  const { institution, certification, fieldofstudy } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    addCertification(formData, history);
  };

  return (
    <Fragment>
      <h1 className='large text-info'>Add Certification</h1>
      <p className='lead'>Add your Certification history</p>
      <form className='form' onSubmit={e => onSubmit(e)}>
        <div className='form-group'>
          <label>Institution</label>
          <input
            type='text'
            name='institution'
            value={institution}
            placeholder='Institution Name'
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <label>Certification</label>
          <input
            type='text'
            name='certification'
            value={certification}
            placeholder='Certification Name'
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <label>Field of study</label>
          <input
            type='text'
            name='fieldofstudy'
            value={fieldofstudy}
            placeholder='Field of study'
            onChange={e => onChange(e)}
          />
        </div>
        <input type='submit' className='btn btn-info my-1' />
        <Link to='/profile-caregiver' className='btn btn-light my-1'>
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

AddCertification.propTypes = {
  addCertification: PropTypes.func.isRequired
};

export default connect(
  null,
  { addCertification }
)(withRouter(AddCertification));
