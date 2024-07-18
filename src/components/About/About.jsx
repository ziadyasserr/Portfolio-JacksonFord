// import React from 'react'
import './About.css';

export default function About() {
  return (
    <>
      <div className="container  about">
        <div>
          <span className="section-main  text-black-50 ">About Us</span>
          <h5 className='mt-3 letter-spacing-lg mb-5'>WHO AM I?</h5>
        </div>
        <div>
          <p className='text-black-50'>
            <span className="fw-bold text-black">Hi Im Jackson Ford </span>On her way she
            met a copy. The copy warned the Little Blind Text, that where it
            came from it would have been rewritten a thousand times and
            everything that was left from its origin would be the word (and) and
            the Little Blind Text should turn around and return to its own, safe
            country.
          </p>
          <p className="text-black-50">
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost unorthographic life One day however a small line of
            blind text by the name of Lorem Ipsum decided to leave for the far
            World of Grammar.
          </p>
        </div>

        <div className='mt-4'>
          <div className="row">
            <div className="col-12 col-lg-3   ">
              <div className="section-about d-flex flex-column border-bottom border-primary border-3">
                <i className="fa-regular fa-lightbulb text-primary fs-2"></i>
                <span className="mt-4">Graphic Design</span>
              </div>
            </div>
            <div className="col-12 col-lg-3   ">
              <div className="section-about d-flex flex-column border-bottom border-danger border-3 ">
              <i className="fa-solid fa-earth-americas fs-2 text-danger"></i>
                <span className="mt-4">Web Design</span>
              </div>
            </div>
            <div className="col-12 col-lg-3   ">
              <div className="section-about d-flex flex-column border-bottom border-warning border-3 ">
              <i className="fa-solid fa-floppy-disk fs-2 text-warning"></i>
                <span className="mt-4">Software</span>
              </div>
            </div>
            <div className="col-12 col-lg-3   ">
              <div className="section-about d-flex flex-column border-bottom border-info border-3 ">
              <i className="fa-solid fa-mobile-screen-button fs-2 text-info"></i>
                <span className="mt-4">Application</span>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
}
