import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

const FooterPage = () => {
  return (
    <footer className='page-footer font-small blue-grey lighten-5'>
      <div className='container text-center text-md-left mt-1'>
        <div className='row mt-3 dark-grey-text'>
          <div className='col-md-3 col-lg-4 col-xl-3 mb-4'>
            <h6 className='text-uppercase font-weight-bold'>
              Cities we covered
            </h6>
            <hr className='teal accent-3 mb-4 mt-0 d-inline-block mx-auto' />
            <p>
              <ul>
                <p>
                  {" "}
                  <li className='list-unstyled'>Torronto</li>
                </p>
                <p>
                  <li className='list-unstyled'>Montreal</li>
                </p>
                <p>
                  <li className='list-unstyled'>Vancouver</li>
                </p>
                <p>
                  <li className='list-unstyled'>Ottawa</li>
                </p>
                <p>
                  <li className='list-unstyled'>Calgary</li>
                </p>
              </ul>
            </p>
          </div>

          <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
            <h6 className='text-uppercase font-weight-bold'>About</h6>
            <hr className='teal accent-3 mb-4 mt-0 d-inline-block mx-auto' />
            <p>
              <Link to='/privacy' className='text-info'>
                Privacy Policy
              </Link>
            </p>
            <p>
              <Link to='/terms' className='text-info'>
                Terms of use
              </Link>
            </p>
            <p>
              <Link to='/faq' className='text-info'>
                FAQs
              </Link>
            </p>
            <p>
              <Link to='/help' className='text-info'>
                Help
              </Link>
            </p>
            <p>
              <Link to='/contact' className='text-info'>
                Contact us
              </Link>
            </p>
          </div>

          <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
            <h6 className='text-uppercase font-weight-bold'>Contact</h6>
            <hr className='teal accent-3 mb-4 mt-0 d-inline-block mx-auto' />
            <p>
              <i className='fas fa-home mr-3'></i> Toronto, ON M5V 1J2, Canada
            </p>
            <p>
              <i className='fas fa-envelope mr-3'></i> info@peaceofmind.com
            </p>
            <p>
              <i className='fas fa-phone mr-3'></i> + 01 234 567 88
            </p>
            <p>
              <i className='fas fa-print mr-3'></i> + 01 234 567 89
            </p>
          </div>

          <div className='col-md-3 col-lg-2 col-xl-2 mx-auto pt-5'>
            <div
              className='app-download icon-lock'
              title='Get this app from google playstore'
            >
              <img
                src={require("../images/gPlayStoreDownload.png")}
                alt='gPlayStore'
              />
            </div>
            <br />
            <div
              className='app-download icon-lock'
              title='Get this app from Apple store'
            >
              <img src={require("../images/iStoreDownload.png")} alt='iStore' />
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-12 py-3'>
          <div className='mb-5 flex-center'>
            <Link className='fb-ic' to='/facebook.com' alt='facebook'>
              <i className='fab fa-facebook-f fa-lg text-dark mr-md-5 mr-3 fa-2x'>
                {" "}
              </i>
            </Link>

            <Link className='tw-ic' to='/facebook.com' alt='twitter'>
              <i className='fab fa-twitter fa-lg text-dark mr-md-5 mr-3 fa-2x'>
                {" "}
              </i>
            </Link>

            <Link className='gplus-ic' to='/facebook.com' alt='google+'>
              <i className='fab fa-google-plus-g fa-lg text-dark mr-md-5 mr-3 fa-2x'>
                {" "}
              </i>
            </Link>

            <Link className='li-ic' to='/facebook.com' alt='linkedin'>
              <i className='fab fa-linkedin-in fa-lg text-dark mr-md-5 mr-3 fa-2x'>
                {" "}
              </i>
            </Link>

            <Link className='ins-ic' to='/facebook.com' alt='instagram'>
              <i className='fab fa-instagram fa-lg text-dark mr-md-5 mr-3 fa-2x'>
                {" "}
              </i>
            </Link>

            <Link className='pin-ic' to='/facebook.com' alt='pinterest'>
              <i className='fab fa-pinterest fa-lg text-dark fa-2x'> </i>
            </Link>
          </div>
        </div>
      </div>
      <div className='footer-copyright py-1'>
        &copy; {new Date().getFullYear()} Copyright:{" Peace of mind "}
      </div>
    </footer>
  );
};

export default FooterPage;
