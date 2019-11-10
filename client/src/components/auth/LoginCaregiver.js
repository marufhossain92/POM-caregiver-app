import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";

const LoginCaregiver = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    login(email, password);
  };

  //Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to='/profile-caregiver' />;
  }

  return (
    <Fragment>
      <div className='bg-info text-center mx-auto my-2 w-75 mb-5 mt-5 rounded pt-5'>
        <h2>Log In</h2>
        <p className='lead'>
          <i className='fas fa-user' /> Log into your account
        </p>
        <form className='w-75 m-auto pt-3' onSubmit={e => onSubmit(e)}>
          <div className='form-group'>
            <input
              type='email'
              className='form-control form-control-sm'
              name='email'
              value={email}
              onChange={e => onChange(e)}
              placeholder='Email'
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
              placeholder='Password'
              minLength='6'
            />
          </div>
          <div className='form-check pb-2'>
            <input type='checkbox' className='form-check-input' />
            <label className='form-check-label' htmlFor='exampleCheck'>
              Keep me logged in
            </label>
          </div>
          <div className='pb-4 pt-3 w-50 mx-auto'>
            <input
              type='submit'
              className='btn btn-success w-50 mx-auto rounded'
              value='Log In'
            />
          </div>
        </form>
        <p className='pb-4'>
          Not Registered yet? <Link to='/signup-caregiver'>Sign up</Link>
        </p>
      </div>
    </Fragment>
  );
};

LoginCaregiver.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { login }
)(LoginCaregiver);
