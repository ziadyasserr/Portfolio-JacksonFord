// import React from 'react'
import './Experience.css';

export default function Experience() {
  return (
    <>
      <div className="container about">
        <div>
          <span className="section-main  text-black-50 ">EXPERIENCE</span>
          <h5 className="mt-3 letter-spacing-lg mb-5">WORK EXPERIENCE</h5>
        </div>

        <div className="timeline ">
          <div className="timeline-item">
            <div className="timeline-icon bg-primary">
              <i className="fas fa-pen"></i>
            </div>
            <div className="timeline-content">
              <h3 className="title">
                Full Stack Developer{' '}
                <span className="date text-black-50 ">2017-2018</span>
              </h3>
              <p className="description">
                Tolerably earnestly middleton extremely distrusts she boy now
                not. Add and offered prepare how cordial two promise. Greatly
                who affixed suppose but enquire compact prepare all put. Added
                forth chief trees but rooms think may.
              </p>
            </div>
          </div>
        </div>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-icon bg-danger">
              <i className="fas fa-pen"></i>
            </div>
            <div className="timeline-content">
              <h3 className="title">
                Front End Developer at Google Company{' '}
                <span className="date text-black-50 ">2017-2018</span>
              </h3>
              <p className="description">
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic life One day however a
                small line of blind text by the name of Lorem Ipsum decided to
                leave for the far World of Grammar.
              </p>
            </div>
          </div>
        </div>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-icon bg-warning">
              <i className="fas fa-pen"></i>
            </div>
            <div className="timeline-content">
              <h3 className="title">
                System Analyst{' '}
                <span className="date text-black-50 ">2017-2018</span>
              </h3>
              <p className="description">
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic life One day however a
                small line of blind text by the name of Lorem Ipsum decided to
                leave for the far World of Grammar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
