import React from "react";
import caregiver2 from "../images/caregiver2.jpg"; //This path is used for set background-image in line number 7

let styles = {
  //backgroundColor: "dark",
  //backgroundImage: "url(" + require("../images/caregiver2.jpg") + ")", //import directly from images file
  backgroundImage: `url(${caregiver2})`
};

const BodyElement = () => {
  return (
    <div>
      <div
        className='w-responsive text-center mx-auto p-5 mt-0' //className helps bring the whole writing into midle
        style={styles}
      >
        <h1>
          <i className='fab fa-product-hunt' />
          Peace of mind
        </h1>
        <h2 className='font-italic'>
          We truly care about your beloved older one.
        </h2>
        <section className='landing mt-5 pt-5'>
          <div className='dark-overlay bg-info text-center mx-auto my-2 w-50 mb-5 mt-2 rounded'>
            <div className='landing-inner pt-5 mx-auto my-auto'>
              <h2 className='lead'>
                <b>Let's get started. Choose an option</b>
              </h2>
              {/*<div className='btn btn-group'>
                  <div className='border border-dark rounded mx-auto pl-3 pr-3 pt-3 pb-3'>
                    <a href='/login' className='btn btn-danger mr-1 pb-2'>
                      I'm a Care Seeker
                    </a>
                  </div>
                  <div className='border border-dark rounded mx-auto pl-3 pr-3 pt-3 pb-3 ml-3'>
                    <a
                      href='/login-caregiver'
                      className='btn btn-danger ml-1 pt-2'
                    >
                      I'm a Caregiver
                    </a>
                  </div>
                </div>*/}
              <div>
                <a
                  href='/login-caresekeer'
                  className='btn btn-danger mr-1 pb-2'
                >
                  I'm a Care Seeker
                </a>{" "}
                <a href='/login-caregiver' className='btn btn-danger ml-1 pt-2'>
                  I'm a Caregiver
                </a>
              </div>
            </div>
            <div className='blue-square-container'>
              <div className='blue-square'></div>
            </div>
            <p className='my-5 pb-5 pt-5'></p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BodyElement;
