import React, { useState, useEffect, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  createCaregiverProfile,
  getCurrentProfile
} from "../../actions/profile";

const EditCaregiverProfile = ({
  profile: { profile, loading },
  createCaregiverProfile,
  getCurrentProfile,
  history
}) => {
  const [formData, setFormData] = useState({
    hourlywage: "",
    experience: "",
    services: "",
    skills: "",
    languages: "",
    transportation: ""
  });

  useEffect(() => {
    getCurrentProfile();

    setFormData({
      hourlywage: loading || !profile.hourlywage ? "" : profile.hourlywage,
      experience: loading || !profile.experience ? "" : profile.experience,
      services: loading || !profile.services ? "" : profile.services.join(","),
      skills: loading || !profile.skills ? "" : profile.skills.join(","),
      languages:
        loading || !profile.languages ? "" : profile.languages.join(","),
      transportation:
        loading || !profile.transportation ? "" : profile.transportation
    });
  }, [
    loading,
    getCurrentProfile,
    profile.hourlywage,
    profile.experience,
    profile.services,
    profile.skills,
    profile.languages,
    profile.transportation
  ]);

  const {
    hourlywage,
    experience,
    services,
    skills,
    languages,
    transportation
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    createCaregiverProfile(formData, history, true);
  };

  return (
    <Fragment>
      <h1 className='large text-info pt-4'>Edit Your Profile</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Add changes to your profile
      </p>
      <form className='form' onSubmit={e => onSubmit(e)}>
        <div className='form-group'>
          <label htmlFor='inputText'>What is your desired hourly wage?</label>
          <input
            type='text'
            name='hourlywage'
            value={hourlywage}
            onChange={e => onChange(e)}
            placeholder='$'
          />
          <small className='form-text'>Please specify in Dollar.</small>
        </div>
        <div className='form-group'>
          <label htmlFor='inputText'>
            Years of Experience (specify months in number)
          </label>
          <select
            name='experience'
            value={experience}
            onChange={e => onChange(e)}
          >
            <option value='0'>Select</option>
            <option value='6 months'>Less than 6 months</option>
            <option value='1 year'>Less than 12 months</option>
            <option value='1.5 years'>Less than 18 months</option>
            <option value='2 years'>Less than 24 months</option>
            <option value='2.5 years'>Less than 30 months</option>
            <option value='3 years'>Less than 36 months</option>
            <option value='3.5 years'>Less than 42 months</option>
            <option value='More tha 4 years'>More than 48 months</option>
            <option value='More than 5 years'>More than 60 months</option>
          </select>
        </div>
        <div className='form-group'>
          <label htmlFor='inputText'>
            What are the services, that you provide?
          </label>
          <input
            type='text'
            name='services'
            value={services}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>
            Please use comma separated values. (eg.)
          </small>
        </div>
        <div className='form-group'>
          <label htmlFor='inputText'>
            What are the Skills and Expertises you have?
          </label>
          <input
            type='text'
            name='skills'
            value={skills}
            onChange={e => onChange(e)}
            placeholder=''
          />
          <small className='form-text'>
            Please use comma separated values. (eg. Nursing, Homecare etc.)
          </small>
        </div>
        <div className='form-group'>
          <label htmlFor='inputText'>What language(s) do you speak?</label>
          <input
            type='text'
            name='languages'
            value={languages}
            onChange={e => onChange(e)}
            placeholder=''
          />
          <small className='form-text'>
            Please use comma separated values. (eg. English, French)
          </small>
        </div>
        <div className='form-group'>
          <label htmlFor='inputText'>
            Can you provide Transportation facility?
          </label>
          <select
            name='transportation'
            value={transportation}
            onChange={e => onChange(e)}
          >
            <option value='0'>Select</option>
            <option value='Yes'>Yes</option>
            <option value='No'>No</option>
          </select>
        </div>
        <input type='submit' className='btn btn-info my-1' />
        <Link to='/profile-caregiver' className='btn btn-light my-1'>
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

EditCaregiverProfile.propTypes = {
  createCaregiverProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { createCaregiverProfile, getCurrentProfile }
)(withRouter(EditCaregiverProfile));
