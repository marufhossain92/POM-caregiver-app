import React, { Fragment } from "react";

const SignupCaregiver2 = () => {
  return (
    <Fragment>
      <form className='form-group bg-info mx-auto my-2 w-75 mb-5 mt-5 rounded pt-5'>
        <h3 className='text-center pt-2 pb-5'>
          Give us more information to make your profile look perfect
        </h3>
        <div className='form-group col-md-12 float-left text-center'>
          <label htmlFor='inputText1' className='col-form-label mx-auto'>
            What is your desired hourly wage?
          </label>
          <div className='input-group col-md-4 float-right'>
            <div className='input-group-prepend'>
              <span className='input-group-text'>$</span>
            </div>
            <input
              type='text'
              className='form-control'
              id='inputText1'
              placeholder=''
            ></input>
          </div>
        </div>

        <div className='form-group col-md-12 float-left text-center'>
          <label htmlFor='inputText2' className='control-label'>
            Years of Experience (specify years/months in number)
          </label>
          <div className='input-group col-md-4 float-right pt-2'>
            <div className='custom-control custom-checkbox'>
              <div className='form-group'>
                <select className='custom-select'>
                  <option>Select</option>
                  <option value='0'>0</option>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                  <option value='6'>6</option>
                  <option value='7'>7</option>
                  <option value='8'>8</option>
                  <option value='9'>9</option>
                  <option value='10'>10</option>
                  <option value='11'>11</option>
                  <option value='12'>12</option>
                  <option value='13'>13</option>
                  <option value='14'>14</option>
                  <option value='15'>15</option>
                  <option value='16'>16</option>
                  <option value='17'>17</option>
                  <option value='18'>18</option>
                  <option value='19'>19</option>
                  <option value='20'>20 or more</option>
                </select>
              </div>
            </div>
            {/*<input
                type='text'
                className='form-control'
                id='inputText2'
                placeholder=''
              ></input>*/}
            <div className='col-md-3'>
              <div className='form-check form-check-inline'>
                <input
                  type='radio'
                  className='form-check-input'
                  id='materialInline1'
                  name='inlineMaterialRadiosExample'
                ></input>
                <label className='form-check-label' htmlFor='materialInline1'>
                  Years
                </label>
              </div>
              <div className='form-check form-check-inline'>
                <input
                  type='radio'
                  className='form-check-input'
                  id='materialInline2'
                  name='inlineMaterialRadiosExample'
                ></input>
                <label className='form-check-label' htmlFor='materialInline2'>
                  Months
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className='form-group col-md-12 float-left text-center'>
          <label htmlFor='inputText3' className='col-form-label mx-auto'>
            What are the services, that you provide?
          </label>
          <div className='input-group col-md-4 float-right'>
            <input
              type='text'
              className='form-control'
              id='inputText3'
              placeholder=''
            ></input>
          </div>
          {/* <div className='input-group'>
              <button type='button' className='btn btn-light btn-circle btn-sm'>
                <b> + </b>
              </button>
            </div> */}
        </div>
        <div className='form-group col-md-12 float-left text-center'>
          <label htmlFor='inputText4' className='col-form-label mx-auto'>
            What are the Skills and Expertises you have?
          </label>
          <div className='input-group col-md-4 float-right'>
            <input
              type='text'
              className='form-control'
              id='inputText4'
              placeholder=''
            ></input>
          </div>
          {/*<div className=''>
              <button type='button' className='btn btn-light btn-circle btn-sm'>
                <b> + </b>
              </button>
            </div>*/}
        </div>
        <div className='form-group col-md-12 float-left text-center'>
          <label htmlFor='inputText5' className='col-form-label mx-auto'>
            What Language(s) do you speak?
          </label>
          <div className='input-group col-md-4 float-right'>
            <input
              type='text'
              className='form-control'
              id='inputText5'
              placeholder=''
            ></input>
          </div>
          {/*<div className=''>
              <button type='button' className='btn btn-light btn-circle btn-sm'>
                <b> + </b>
              </button>
            </div>*/}
        </div>

        <div className='form-group col-md-12 float-left text-center'>
          <label htmlFor='inputText6' className='col-form-label mx-auto'>
            Your Educational Degrees and Certifications
          </label>
          <div className='input-group col-md-4 float-right'>
            <input
              type='text'
              className='form-control'
              id='inputText6'
              placeholder=''
            ></input>
          </div>
          {/*<div className=''>
              <button type='button' className='btn btn-light btn-circle btn-sm'>
                <b> + </b>
              </button>
            </div>*/}
        </div>

        <div className='form-group col-md-8 mx-auto'>
          <label htmlFor='inputText7' className='col-form-label'>
            Can you provide Transportation facility?
          </label>
          <div className='float-right col-md-4 mx-auto text-center pt-2 pl-5'>
            <div className='form-check form-check-inline'>
              <input
                type='radio'
                className='form-check-input'
                id='materialInline1'
                name='inlineMaterialRadios'
              ></input>
              <label className='form-check-label' htmlFor='materialInline1'>
                Yes
              </label>
            </div>

            <div className='form-check form-check-inline'>
              <input
                type='radio'
                className='form-check-input'
                id='materialInline2'
                name='inlineMaterialRadios'
              ></input>
              <label className='form-check-label' htmlFor='materialInline2'>
                No
              </label>
            </div>
          </div>
        </div>
        <div className='text-center pb-4'>
          <a href='/signup-caregiver2'>
            <button className='btn btn-danger w-25 mx-auto my-2 rounded'>
              Save & Continue
            </button>
          </a>
        </div>
      </form>
    </Fragment>
  );
};

export default SignupCaregiver2;
