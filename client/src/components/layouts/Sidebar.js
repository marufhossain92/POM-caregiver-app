import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.min";

export class Sidebar extends Component {
  render() {
    return (
      <div className='d-flex'>
        <div className='bg-light border'>
          <div className='list-group list-group-flush'>
            <Link
              to='/privacy'
              className='list-group-item list-group-item-action bg-light border'
            >
              Privacy Policy
            </Link>
            <Link
              to='/terms'
              className='list-group-item list-group-item-action bg-light border'
            >
              Terms of use
            </Link>
            <Link
              to='/faq'
              className='list-group-item list-group-item-action bg-light border'
            >
              FAQs
            </Link>
            <Link
              to='/help'
              className='list-group-item list-group-item-action bg-light border'
            >
              Help
            </Link>
            <Link
              to='/contact'
              className='list-group-item list-group-item-action bg-light border'
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
