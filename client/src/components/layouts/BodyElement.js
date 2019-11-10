import React, { Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
//import caregiver2 from "../images/caregiver2.jpg"; //This path is used for set background-image in line number 7

const BodyElement = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/profile-caregiver' />;
  }
  return (
    <Fragment>
      <div className='landing text-center mx-auto p-5 mt-0'>
        <h1>
          <i className='fab fa-product-hunt' /> Peace of mind
        </h1>
        <h2 className='font-italic'>
          We truly care about your beloved older one.
        </h2>
        <section className='mt-5 pt-5'>
          <div className='bg-info text-center mx-auto w-50 rounded mt-5 pt-5'>
            <div>
              <h2 className='lead'>
                <b>Let's get started. Choose an option</b>
              </h2>

              <div>
                <Link
                  to='/caregiver-profiles'
                  className='btn btn-danger mr-1 pb-2'
                >
                  I'm a Care Seeker
                </Link>{" "}
                <Link
                  to='/login-caregiver'
                  className='btn btn-danger ml-1 pt-2'
                >
                  I'm a Caregiver
                </Link>
              </div>
            </div>
            <p className='my-3 pb-5 pt-3'></p>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

BodyElement.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(BodyElement);
