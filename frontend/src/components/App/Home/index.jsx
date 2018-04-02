import React, {Component} from 'react';
import Chatbox from '../../../js/chatbox';
import {home} from '../../../js/chatbox/home'
import {Testimonial1, Testimonial2, Testimonial3} from '../../../js/testimonials'
import Prepare from '../../../Assets/images/Prepare.png';
import Apply from '../../../Assets/images/Apply.png';
import Succeed from '../../../Assets/images/Succeed.png';
import Jumbotron from '../../../js/Jumbotron'
import Slideshow from '../../../js/slideshow'
import './index.css';

export default class Home extends Component {
  render() {
    const {contactForm} = this.props
    return (<div>
      <Jumbotron contactForm={contactForm}>
        <h1 className="display-4">Prepare. Apply. Succeed.</h1>
        <h3>Aspire for Happiness in Education.<br/>
          Find your dream school. Hit the ground running. Lead with excellence.</h3>
      </Jumbotron>

      <div className="container">

        <div className="card-group">
          <div id="mission">
            <h2>Our Mission
            </h2>
            <h5>
              We live in a dynamic age of technology-driven changes that very quickly redefines how we learn and communicate. At Pandahug, we embrace technological and scientific advancement as well as a humanistic future.
            </h5>
            <h5>
              Pandahug leverages technology to tailor your learning program to your unique needs and provide a positive and highly effective online learning experience. We provide you with clear achievable goals that guide you to reach previously unimaginable success.</h5>
          </div>

          <div className="card">
            <img className="card-img-top" src={Prepare} alt="Card cap"/>
            <div className="card-body">
              <h2 className="card-title">Prepare</h2>
              <h6 className="card-text">Academic Planning</h6>
              <h6 className="card-text">Career Strategy</h6>
              <h6 className="card-text">Academic Subject Tutoring</h6>
              <h6 className="card-text">TOEFL/IELTS/SAT/ACT Workshops</h6>

            </div>

          </div>
          <div className="card">
            <img className="card-img-top" src={Apply} alt="Card cap"/>
            <div className="card-body">
              <h2 className="card-title">Apply</h2>
              <h6 className="card-text">University Application Support</h6>
              <h6 className="card-text">Resume/CV/Cover Letter Advising</h6>
              <h6 className="card-text">Portfolio Building</h6>
              <h6 className="card-text">Interview/Public Speaking Training</h6>
              <h6 className="card-text">Immigration Consulting</h6>
            </div>

          </div>
          <div className="card">
            <img className="card-img-top" src={Succeed} alt="Card cap"/>
            <div className="card-body">
              <h2 className="card-title">Succeed</h2>
              <h6 className="card-text">Networking</h6>
              <h6 className="card-text">Job Opportunities</h6>
              <h6 className="card-text">Leadership and Mentoring</h6>
              <h6 className="card-text">Social Responsibility</h6>
            </div>

          </div>
        </div>
        <h2 style={{
            marginTop: '2rem'
          }}>Testimonials
        </h2>
        <Slideshow>
          <Testimonial1/>
          <Testimonial2/>
          <Testimonial3/>
        </Slideshow>
      </div>

      <div className="chatbot">
        <Chatbox steps={home}/>
      </div>

    </div>)
  }
}
