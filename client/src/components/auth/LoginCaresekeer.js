import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const LoginCaresekeer = () => {
  return (
    <Fragment>
      <div className='bg-info text-center mx-auto my-2 w-75 mb-5 mt-5 rounded pt-5'>
        <form className='w-75 m-auto pt-3'>
          <h2>Log In</h2>
          <p className='lead'>
            <i className='fas fa-user' /> Log into your account
          </p>
          <div className='form-group'>
            <label for='exampleInputEmail1'>
              <b>Email Address</b>
            </label>
            <input
              type='email'
              className='form-control form-control-sm'
              placeholder='Email'
            />
          </div>

          <div className='form-group'>
            <label for='exampleInputPassword'>
              <b>Password</b>
            </label>
            <input
              type='password'
              className='form-control form-control-sm'
              placeholder='Password'
            />
          </div>
          <div className='form-check pb-2'>
            <input type='checkbox' className='form-check-input' />
            <label className='form-check-label' for='exampleCheck'>
              Keep me logged in
            </label>
          </div>
          <div className='w-50 mx-auto pb-5 pt-3'>
            <input
              type='submit'
              className='btn btn-success w-50 mx-auto rounded'
              value='Log In'
            />
            <p className='my-1'>
              Not Registered yet? <Link to='/signup-caresekeer'>Sign up</Link>
            </p>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default LoginCaresekeer;
