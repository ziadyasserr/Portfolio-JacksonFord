// import React from 'react';
import bg1 from '../../images/bg1.jpg';
import bg2 from '../../images/bg2.jpg';
import './Home.css';

export default function Home() {
  return (
    <>
      <div
        id="carouselExample"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="1000"
      >
        <div className="carousel-inner">
          <div
            className="carousel-item active position-relative"
            data-bs-interval="2000"
          >
            <img src={bg1} className="d-block w-100" alt="First slide" />
            <div className="text-image">
              <div>
                <h1>Hi!</h1>
                <h1>I'm Jackson</h1>
              </div>
              <div className="parag-image text-black-50">
                <span>
                  100% HTML5 Bootstrap templates made by
                  <a href="#" className="fs-5">
                    Colorlib.com
                  </a>
                </span>
              </div>
              <div className="mt-4">
                <button className="py-2 px-4 text-uppercase">
                  download cv <i className="fa-solid fa-download"></i>
                </button>
              </div>
            </div>
          </div>
          <div
            className="carousel-item position-relative"
            data-bs-interval="2000"
          >
            <img src={bg2} className="d-block w-100" alt="Second slide" />
            <div className="text-image">
              <div>
                <h1>I am</h1>
                <h1>a Designer</h1>
              </div>
              <div className="parag-image text-black-50">
                <span>
                  100% HTML5 Bootstrap templates made by{' '}
                  <a href="#" className="fs-5">
                    Colorlib.com
                  </a>
                </span>
              </div>
              <div className="mt-4">
                <button className="py-2 px-4 text-uppercase">
                  view portfolio <i className="fa-solid fa-user-tie"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
