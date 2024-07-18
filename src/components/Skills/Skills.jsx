// import React from 'react'
import './Skills.css';

export default function Skills() {
  return (
    <>
      <div className="container about">
        <div>
          <span className="section-main  text-black-50 ">MY SPECIALTY</span>
          <h5 className="mt-3 letter-spacing-lg mb-5">MY SKILLS</h5>
        </div>
        <div>
          <span className="text-black-50">
            The Big Oxmox advised her not to do so, because there were thousands
            of bad Commas, wild Question Marks and devious Semikoli, but the
            Little Blind Text didn’t listen. She packed her seven versalia, put
            her initial into the belt and made herself on the way.
          </span>
        </div>
        <div className="progress-container mt-5">
          <div className="row">
            <div className=" col-12 col-lg-6">
              <div className="mb-2">Photoshop</div>
              <div className="progress mb-3">
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  style={{ width: '75%' }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  75%
                </div>
              </div>
            </div>

            <div className=" col-12 col-lg-6">
              <div className="mb-2">jQuery</div>
              <div className="progress mb-3">
                <div
                  className="progress-bar bg-danger"
                  role="progressbar"
                  style={{ width: '60%' }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  60%
                </div>
              </div>
            </div>
            <div className=" col-12 col-lg-6">
              <div className="mb-2">HTML5</div>
              <div className="progress mb-3">
                <div
                  className="progress-bar bg-warning"
                  role="progressbar"
                  style={{ width: '85%' }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  85%
                </div>
              </div>
            </div>
            <div className=" col-12 col-lg-6">
              <div className="mb-2">CSS3</div>
              <div className="progress mb-3">
                <div
                  className="progress-bar bg-info"
                  role="progressbar"
                  style={{ width: '90%' }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  90%
                </div>
              </div>
            </div>
            <div className=" col-12 col-lg-6">
              <div className="mb-2">WordPress</div>
              <div className="progress mb-3">
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  style={{ width: '70%' }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  70%
                </div>
              </div>
            </div>
            <div className=" col-12 col-lg-6">
              <div className="mb-2">SEO</div>
              <div className="progress mb-3">
                <div
                  className="progress-bar bg-Secondary"
                  role="progressbar"
                  style={{ width: '80%' }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  80%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
