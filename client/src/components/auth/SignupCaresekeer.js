import React, { useState, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setAlert } from "../../actions/alert";
import propTypes from "prop-types";

const SignupCaresekeer = ({ setAlert }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
    phone: ""
  });

  const { name, email, password, password2, phone } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Password do not match", "danger");
    } else {
      console.log(formData);
    }
  };

  return (
    <Fragment>
      <div className='bg-info text-center mx-auto my-2 w-75 mb-5 mt-4 rounded'>
        <h2 className='m-auto pt-5'>Sign up</h2>
        <p className='lead pt-2'>
          <i className='fas fa-user' /> Create a free account to look out and
          hire caregivers
        </p>
        <form className='w-75 m-auto pt-2' onSubmit={e => onSubmit(e)}>
          <div className='form-group pt-3'>
            <input
              type='text'
              className='form-control form-control-sm'
              name='name'
              value={name}
              onChange={e => onChange(e)}
              placeholder='Name'
              required
            />
          </div>

          <div className='form-group pt-2'>
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

          <div className='form-group pt-2'>
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

          <div className='form-group pt-2'>
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

          <div className='form-group pt-2'>
            <input
              type='text'
              className='form-control form-control-sm'
              name='phone'
              value={phone}
              onChange={e => onChange(e)}
              placeholder='Phone Number'
              required
            />
          </div>

          <div className='w-50 pb-5 pt-3 mx-auto'>
            <input
              type='submit'
              className='btn btn-danger w-50 mx-auto my-2 rounded'
              value='Signup'
            />
            <p className='my-1'>
              Already have an account?{" "}
              <Link to='/login-caregiver'>Sign In</Link>
            </p>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

SignupCaresekeer.propTypes = {
  setAlert: propTypes.func.isRequired
};

export default connect(
  null,
  { setAlert }
)(SignupCaresekeer);
