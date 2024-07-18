// import React from 'react'
import img1 from '../../images/img-1.jpg';
import img2 from '../../images/img-2.jpg';
import img3 from '../../images/img-3.jpg';
import img4 from '../../images/img-4.jpg';
import './Work.css';

export default function Work() {
  return (
    <>
      <div className="container about work">
        <div>
          <span className="section-main  text-black-50 ">MY WORK</span>
          <h5 className="mt-3 letter-spacing-lg mb-4">RECENT WORK</h5>
        </div>
        <div>
          <ul className="d-flex list-unstyled gap-4 text-black-50">
            <li className="text-primary">Graphic Design</li>
            <li>Apps</li>
            <li>Software</li>
          </ul>
        </div>
        <div>
          <div className="row">
            <div className="col-12 col-lg-6 ">
              <div className="position-relative hover-img mb-4">
                <div className="image-size ">
                  <img src={img1} alt="img1" className="img-fluid" />
                </div>
                <div className="animation">
                  <span className="">animation</span>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 ">
              <div className="position-relative hover-img mb-4">
                <div className="image-size ">
                  <img src={img2} alt="img1" className="img-fluid" />
                </div>
                <div className="animation">
                  <span className="">animation</span>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 ">
              <div className="position-relative hover-img mb-4">
                <div className="image-size ">
                  <img src={img3} alt="img1" className="img-fluid" />
                </div>
                <div className="animation">
                  <span className="">animation</span>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 ">
              <div className="position-relative hover-img mb-4">
                <div className="image-size ">
                  <img src={img4} alt="img1" className="img-fluid" />
                </div>
                <div className="animation">
                  <span className="">animation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
