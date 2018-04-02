import React from "react";
import Prepare_img from '../../Assets/images/Prepare.png';
import Apply_img from '../../Assets/images/Apply.png';
import Succeed_img from '../../Assets/images/Succeed.png';
import prepareicon from '../../Assets/images/prepareicon.png';
import applyicon from '../../Assets/images/applyicon.png';
import succeedicon from '../../Assets/images/successicon.png';

export const Prepare = () => {
  return (
    <div className="">
      <img className="card-img-top" src={Prepare_img} alt="Card cap"/>
      <div className="card-body">
        <h2 className="card-title">Prepare</h2>
        <h6 className="card-text">Academic Planning</h6>
        <h6 className="card-text">Career Strategy</h6>
        <h6 className="card-text">Academic Subject Tutoring</h6>
        <h6 className="card-text">TOEFL/IELTS/SAT/ACT Workshops</h6>
      </div>
      </div>

  );
};
export const Apply = () => {
  return (
    <div className="">
      <img className="card-img-top" src={Apply_img} alt="Card cap"/>
      <div className="card-body">
        <h2 className="card-title">Apply</h2>
        <h6 className="card-text">University Application Support</h6>
        <h6 className="card-text">Resume/CV/Cover Letter Advising</h6>
        <h6 className="card-text">Portfolio Building</h6>
        <h6 className="card-text">Interview/Public Speaking Training</h6>
        <h6 className="card-text">Immigration Consulting</h6>
      </div>
    </div>
  );
};
export const Succeed = () => {
  return (
    <div className="">
      <img className="card-img-top" src={Succeed_img} alt="Card cap"/>
      <div className="card-body">
        <h2 className="card-title">Succeed</h2>
        <h6 className="card-text">Networking</h6>
        <h6 className="card-text">Job Opportunities</h6>
        <h6 className="card-text">Leadership and Mentoring</h6>
        <h6 className="card-text">Social Responsibility</h6>
      </div>

    </div>
  );
};

export const servicecc = () => {
  return (

    <div className="row" align="center">
      <div className="col-lg-4 card">
        <img className="card-img-top" id="cardprepareicon" src={prepareicon} alt="Card cap"/>
        <div className="card-body">
          <p>We work one-on-one with you to fully understand your needs and goals. We provide creative and informed advice based on the latest research and data available. We guide you through a step-by-step work flow process in our programs and services so that you can keep track of your learning and stay motivated.</p>
        </div>
      </div>

      <div className="col-lg-4 card">
        <img className="card-img-top" id="cardapplyicon" src={applyicon} alt="Card cap"/>
        <div className="card-body">
          <p>We assist you during the application process such as identifying valuable majors that fit your skill set, strategically selecting target schools, providing application essay writing workshops, as well as coaching to keep you motivated.</p>
        </div>
      </div>

      <div className="col-lg-4 card">
        <img className="card-img-top" id="cardsucceedicon" src={succeedicon} alt="Card cap"/>
        <div className="card-body">
          <p>Success is not a final destination; it is like climbing a mountain, enjoying the magnificent view, then climbing another beautiful mountain. We support you in all your career challenges to help you be the best you.</p>
        </div>
      </div>
    </div>
  );
};
