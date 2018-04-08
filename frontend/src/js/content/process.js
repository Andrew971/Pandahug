import React, {Fragment} from "react";
import Prepare_img from '../../Assets/images/Prepare.png';
import Apply_img from '../../Assets/images/Apply.png';
import Succeed_img from '../../Assets/images/Succeed.png';

export const Prepare = () => {
  return (<Fragment>
    <div className="col-md-6">
      <img className="img-fluid card-img-top" src={Prepare_img} alt="Card cap"/>
    </div>
    <div className="col-md-6 card-body">
      <h2 className="card-title">Prepare</h2>
      <h6 className="card-text">Academic Planning</h6>
      <h6 className="card-text">Career Strategy</h6>
      <h6 className="card-text">Academic Subject Tutoring</h6>
      <h6 className="card-text">TOEFL/IELTS/SAT/ACT Workshops</h6>
      <p>We work one-on-one with you to fully understand your needs and goals. We provide creative and informed advice based on the latest research and data available. We guide you through a step-by-step work flow process in our programs and services so that you can keep track of your learning and stay motivated.</p>
    </div>

  </Fragment>);
};
export const Apply = () => {
  return (<Fragment>
    <div className="col-md-6 order-md-last">
      <img className="img-fluid card-img-top" src={Apply_img} alt="Card cap"/>
    </div>
    <div className="col-md-6 card-body">
      <h2 className="card-title">Apply</h2>
      <h6 className="card-text">University Application Support</h6>
      <h6 className="card-text">Resume/CV/Cover Letter Advising</h6>
      <h6 className="card-text">Portfolio Building</h6>
      <h6 className="card-text">Interview/Public Speaking Training</h6>
      <h6 className="card-text">Immigration Consulting</h6>
      <p>We assist you during the application process such as identifying valuable majors that fit your skill set, strategically selecting target schools, providing application essay writing workshops, as well as coaching to keep you motivated.</p>
    </div>



  </Fragment>);
};
export const Succeed = () => {
  return (<Fragment>
    <div className="col-md-6">
      <img className="img-fluid card-img-top" src={Succeed_img} alt="Card cap"/>
    </div>
    <div className="col-md-6 card-body">
      <h2 className="card-title">Succeed</h2>
      <h6 className="card-text">Networking</h6>
      <h6 className="card-text">Job Opportunities</h6>
      <h6 className="card-text">Leadership and Mentoring</h6>
      <h6 className="card-text">Social Responsibility</h6>
    <p>Success is not a final destination; it is like climbing a mountain, enjoying the magnificent view, then climbing another beautiful mountain. We support you in all your career challenges to help you be the best you.</p>
  </div>

  </Fragment>);
};
