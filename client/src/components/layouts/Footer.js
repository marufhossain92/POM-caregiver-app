import React from "react";
import { Link } from "react-router-dom";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";

let styles = {
  paddingLeft: "80px",
  paddingRight: "80px",
  paddingTop: "10px",
  backgroundColor: "#000000"
};

let styles1 = {
  backgroundColor: "#000000"
};

const FooterPage = () => {
  return (
    <MDBFooter
      color='black'
      className='font-small pt-4 mt-4 text-light'
      style={styles}
    >
      <MDBContainer
        fluid
        className='text-center text-md-center border rounded'
        style={styles1}
      >
        <MDBRow>
          <MDBCol className='pt-3' md='4'>
            <h5 className='title'>Cities we covered</h5>
            <ul>
              <li className='list-unstyled'>Torronto</li>
              <li className='list-unstyled'>Montreal</li>
              <li className='list-unstyled'>Vancouver</li>
              <li className='list-unstyled'>Ottawa</li>
              <li className='list-unstyled'>Calgary</li>
            </ul>
          </MDBCol>
          <MDBCol className='pl-4 pt-3' md='4'>
            <h5 className='title'>About</h5>
            <ul>
              <li className='list-unstyled'>
                <Link to='/privacy' className='text-info'>
                  Privacy Policy
                </Link>
              </li>
              <li className='list-unstyled'>
                <Link to='/terms' className='text-info'>
                  Terms of use
                </Link>
              </li>
              <li className='list-unstyled'>
                <Link to='/faq' className='text-info'>
                  FAQs
                </Link>
              </li>
              <li className='list-unstyled'>
                <Link to='/help' className='text-info'>
                  Help
                </Link>
              </li>
              <li className='list-unstyled'>
                <Link to='/contact' className='text-info'>
                  Contact us
                </Link>
              </li>
            </ul>
          </MDBCol>
          <MDBCol className='pl-5 pt-4' md='4'>
            <div
              className='col-lg-6 col-xs-12 app-download icon-lock border'
              title='Get this app from google playstore'
            >
              <img
                src={require("../images/gPlayStoreDownload.png")}
                alt='gPlayStore'
              />
            </div>
            <br />
            <div
              className='col-lg-6 col-xs-12 app-download icon-lock border'
              title='Get this app from Apple store'
            >
              <img src={require("../images/iStoreDownload.png")} alt='iStore' />
            </div>
            <br />
            <div className='row pl-4 ml-1'>
              <i className='fa fa-facebook-square fa-2x'></i>&nbsp;
              <i className='fa fa-twitter fa-2x'></i>&nbsp;
              <i className='fa fa-instagram fa-2x'></i>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className='footer-copyright py-3'>
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" Peace of mind "}
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterPage;
