import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.min.js";

let styles = {
  backgroundColor: "#000000"
};

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <div className='collapse navbar-collapse' id='navbarSupportedContent'>
      <ul className='navbar-nav mr-auto'>
        <li className='nav-item active'>
          <Link className='nav-link' to='/'>
            Home <span className='sr-only'>(current)</span>
          </Link>
        </li>
        <li className='nav-item active'>
          <Link className='nav-link' to='/services'>
            Our Services
          </Link>
        </li>
        <li className='nav-item dropdown active'>
          <Link
            className='nav-link dropdown-toggle'
            to='/'
            id='navbarDropdown'
            role='button'
            data-toggle='dropdown'
            aria-haspopup='true'
            aria-expanded='false'
          >
            Profile
          </Link>
          <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
            <Link className='dropdown-item text-dark' to='/'>
              Edit Profile
            </Link>
            <Link className='dropdown-item text-dark' to='/'>
              Edit Senior Profile
            </Link>
            <Link className='dropdown-item text-dark' to='/'>
              Settings
            </Link>
            <Link className='dropdown-item text-dark' to='/'>
              Card & Payments
            </Link>
            <div className='dropdown-divider'></div>
            <Link
              onClick={logout}
              className='dropdown-item text-dark'
              to='/login-caregiver'
            >
              Logout
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );

  const guestLinks = (
    <div className='collapse navbar-collapse' id='navbarSupportedContent'>
      <ul className='navbar-nav mr-auto'>
        <li className='nav-item active'>
          <Link className='nav-link' to='/'>
            Home <span className='sr-only'>(current)</span>
          </Link>
        </li>
        <li className='nav-item active'>
          <Link className='nav-link' to='/services'>
            Our Services
          </Link>
        </li>
      </ul>
    </div>
  );

  return (
    <nav className='navbar navbar-expand-lg navbar-dark' style={styles}>
      <Link className='navbar-brand text-center font-italic' to='/'>
        <i className='fab fa-product-hunt' />
        Peace of mind
      </Link>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(Navbar);
