import React, { Fragment, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addEducation } from "../../actions/profile";

const AddEducation = ({ addEducation, history }) => {
  const [formData, setFormData] = useState({
    school: "",
    degree: "",
    fieldofstudy: ""
  });

  const { school, degree, fieldofstudy } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    addEducation(formData, history);
  };

  return (
    <Fragment>
      <h1 className='large text-info'>Add Education</h1>
      <p className='lead'>Add your educational history</p>
      <form className='form' onSubmit={e => onSubmit(e)}>
        <div className='form-group'>
          <label>School</label>
          <input
            type='text'
            name='school'
            value={school}
            placeholder='School Name'
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <label>Degree</label>
          <input
            type='text'
            name='degree'
            value={degree}
            placeholder='Degree Name'
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

AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired
};

export default connect(
  null,
  { addEducation }
)(withRouter(AddEducation));
