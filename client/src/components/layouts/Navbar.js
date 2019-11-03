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
          <a className='nav-link' href='/'>
            Home <span className='sr-only'>(current)</span>
          </a>
        </li>
        <li className='nav-item active'>
          <a className='nav-link' href='/services'>
            Our Services
          </a>
        </li>
        <li className='nav-item dropdown'>
          <a
            className='nav-link dropdown-toggle'
            href='#'
            id='navbarDropdown'
            role='button'
            data-toggle='dropdown'
            aria-haspopup='true'
            aria-expanded='false'
          >
            Profile
          </a>
          <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
            <a className='dropdown-item text-dark' href='#'>
              Edit Profile
            </a>
            <a className='dropdown-item text-dark' href='#'>
              Edit Senior Profile
            </a>
            <a className='dropdown-item text-dark' href='#'>
              Settings
            </a>
            <a className='dropdown-item text-dark' href='#'>
              Card & Payments
            </a>
            <div className='dropdown-divider'></div>
            <a
              onClick={logout}
              className='dropdown-item text-dark'
              href='/login-caregiver'
            >
              Logout
            </a>
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
