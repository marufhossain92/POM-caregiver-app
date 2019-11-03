import React, { Component } from "react";
import Sidebar from "../layouts/Sidebar";

export class TermsOfUse extends Component {
  render() {
    return (
      <div>
        <div className='col-xs-12 pt-auto mt-auto'>
          <img src={require("../images/Screen.png")} alt='' />
        </div>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-2 ml-auto p-0 pt-4'>
              <Sidebar />
            </div>
            <div className='col-md-10 text-center'>
              <h3 className='mt-4'>Terms of use</h3>
              <p>
                Incididunt veniam sit Lorem sint laboris et eiusmod culpa qui
                velit duis nostrud est veniam. Ad do velit exercitation nulla
                irure. Ea adipisicing et amet eu dolor aliquip. Enim nostrud
                dolor eu excepteur dolor do proident nulla irure. Enim laborum
                ea adipisicing elit ad ad officia in et est pariatur. Est eu
                laboris esse incididunt ea pariatur id in esse laborum labore.
                Eiusmod qui nulla cillum quis Lorem est minim. Irure quis
                laborum duis voluptate. Id dolor ut culpa ut est in anim qui.
                Cupidatat excepteur voluptate et mollit veniam deserunt aliquip
                amet. Sit qui irure eiusmod deserunt do. Ea officia deserunt
                excepteur excepteur anim proident duis tempor laboris magna ut
                consequat.
              </p>
              <p>
                Incididunt veniam sit Lorem sint laboris et eiusmod culpa qui
                velit duis nostrud est veniam. Ad do velit exercitation nulla
                irure. Ea adipisicing et amet eu dolor aliquip. Enim nostrud
                dolor eu excepteur dolor do proident nulla irure. Enim laborum
                ea adipisicing elit ad ad officia in et est pariatur. Est eu
                laboris esse incididunt ea pariatur id in esse laborum labore.
                Eiusmod qui nulla cillum quis Lorem est minim. Irure quis
                laborum duis voluptate. Id dolor ut culpa ut est in anim qui.
                Cupidatat excepteur voluptate et mollit veniam deserunt aliquip
                amet. Sit qui irure eiusmod deserunt do. Ea officia deserunt
                excepteur excepteur anim proident duis tempor laboris magna ut
                consequat.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TermsOfUse;
