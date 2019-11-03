import React, { useState, Fragment } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import PropTypes from "prop-types";

const SignupCaregiver = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    email: "",
    password: "",
    password2: "",
    city: "",
    postalcode: "",
    phone: ""
  });

  const {
    name,
    gender,
    email,
    password,
    password2,
    city,
    postalcode,
    phone
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Password do not match", "danger");
    } else {
      register({ name, gender, email, password, city, postalcode, phone });
    }
  };

  //Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to='/profile' />;
  }

  return (
    <Fragment>
      <div className='bg-info text-center mx-auto my-2 w-75 mb-5 mt-4 rounded'>
        <h2 className='text-dark m-auto pt-5'>Sign Up</h2>
        <p className='lead'>
          <i className='fas fa-user' /> Create a free account
        </p>
        <form className='w-75 m-auto pt-3' onSubmit={e => onSubmit(e)}>
          <div className='form-group form-group'>
            <input
              type='text'
              className='form-control'
              name='name'
              value={name}
              onChange={e => onChange(e)}
              placeholder='Name'
              required
            />
          </div>

          <div className='custom-control custom-checkbox mx-auto col-md-6'>
            <div className='form-group'>
              <select name='gender' value={gender} onChange={e => onChange(e)}>
                <option value='0'>Select Gender</option>
                <option value='Male'>Male</option>
                <option value='Female'>Female</option>
              </select>
            </div>
          </div>

          <div className='form-group'>
            <input
              type='email'
              className='form-control form-control-sm'
              name='email'
              value={email}
              onChange={e => onChange(e)}
              placeholder='Email Address'
              required
            />
          </div>

          <div className='form-group'>
            <input
              type='password'
              className='form-control form-control-sm'
              name='password'
              value={password}
              onChange={e => onChange(e)}
              placeholder='Password (at least 6 characters)'
              required
            />
          </div>

          <div className='form-group'>
            <input
              type='password'
              className='form-control form-control-sm'
              name='password2'
              value={password2}
              onChange={e => onChange(e)}
              placeholder='Confirm Password'
              required
            />
          </div>

          <div className='custom-control custom-checkbox col-md-6 float-left'>
            <div className='form-group'>
              <select name='city' value={city} onChange={e => onChange(e)}>
                <option value='0'>Select Your City</option>
                <option value='Toronto'>Toronto</option>
                <option value='Montreal'>Montreal</option>
                <option value='Vancouver'>Vancouver</option>
                <option value='Ottawa'>Ottawa</option>
                <option value='Calgary'>Calgary</option>
              </select>
            </div>
          </div>

          <div className='form-group col-md-6 float-right'>
            <input
              type='text'
              className='form-control form-control-sm'
              name='postalcode'
              value={postalcode}
              onChange={e => onChange(e)}
              placeholder='Postal Code'
            />
          </div>

          <div className='form-group'>
            <input
              type='text'
              className='form-control form-control-sm'
              name='phone'
              value={phone}
              onChange={e => onChange(e)}
              placeholder='Phone Number'
            />
          </div>

          <div className='w-50 mx-auto pb-5 pt-3'>
            <input
              type='submit'
              className='btn btn-danger w-50 mx-auto my-2 rounded'
              value='Signup'
            />
          </div>
        </form>
        <p className='pb-3'>
          Already have an account? <Link to='/login-caregiver'>Sign In</Link>
        </p>
      </div>
    </Fragment>
  );
};

SignupCaregiver.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { setAlert, register }
)(SignupCaregiver);
