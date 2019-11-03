import React, { Component, Fragment } from "react";
import { Badge } from "reactstrap";

export class Services extends Component {
  render() {
    return (
      <Fragment>
        <div
          className='w-responsive ml-auto text-center mx-auto p-3 mt-2 bg-info rounded'
          style={{ width: "75%" }}
        >
          <h1 className='font-italic'>
            <Badge color='dark'>Our Services</Badge>
          </h1>
          <ul className='column mt-3 font-weight-bold'>
            <li>
              <h4>
                <Badge color='secondary'>Medical Supervision</Badge>
              </h4>
            </li>
            <li>
              <h4>
                <Badge color='secondary'>
                  Personal assistance, bathing, dressing
                </Badge>
              </h4>
            </li>
            <li>
              <h4>
                <Badge color='secondary'>RN / RPN Supervised Care</Badge>
              </h4>
            </li>
            <li>
              <h4>
                <Badge color='secondary'>
                  Specialize in Perkinson / Dementia
                </Badge>
              </h4>
            </li>
            <li>
              <h4>
                <Badge color='secondary'>Specialize in Alzheimer's</Badge>
              </h4>
            </li>
            <li>
              <h4>
                <Badge color='secondary'>
                  Home / Individual Safety Assesment
                </Badge>
              </h4>
            </li>
            <li>
              <h4>
                <Badge color='secondary'>Light Housekeeping</Badge>
              </h4>
            </li>
            <li>
              <h4>
                <Badge color='secondary'>
                  Escorting to Appointments, or Shoping
                </Badge>
              </h4>
            </li>
            <li>
              <h4>
                <Badge color='secondary'>Joyful Companionship</Badge>
              </h4>
            </li>
            <li>
              <h4>
                <Badge color='secondary'>Palliative Care</Badge>
              </h4>
            </li>
            <li>
              <h4>
                <Badge color='secondary'>Live in/out to 24 hour Care</Badge>
              </h4>
            </li>
            <li>
              <h4>
                <Badge color='secondary'>Retirement Homecare</Badge>
              </h4>
            </li>
            <li>
              <h4>
                <Badge color='secondary'>Nutritional Counseling</Badge>
              </h4>
            </li>
          </ul>
        </div>
      </Fragment>
    );
  }
}

export default Services;
