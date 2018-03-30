import React, {Component} from 'react';
import Chatbox from '../../../js/chatbox';
import {home} from '../../../js/chatbox/home'

import Prepare from '../../../Assets/images/Prepare.png';
import Apply from '../../../Assets/images/Apply.png';
import Succeed from '../../../Assets/images/Succeed.png';
import Jumbotron from '../../../js/Jumbotron'
import './index.css';

export default class Home extends Component {
  render() {

    return (<div>
      <Jumbotron>
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
      </div>

      <div className="container">
        <div className="card">
          <h2>Testimonials
          </h2>
          <div className="card-header">
            Business Owner in Vancouver, BC
          </div>
          <div className="card-body">
            <blockquote className="blockquote mb-0">
              <p>Worked with Mabelle on a few common clients! She is a highly motivated, knowledgeable and responsible professional. Has great social networking skills, communication skills and will go out of her way to help clients with their needs! Highly recommend her to any of my clients!</p>

            </blockquote>
          </div>
        </div>

        <div className="card">

          <div className="card-header">
            Secondary Student in Vancouver, BC
          </div>
          <div className="card-body">
            <blockquote className="blockquote mb-0">
              <p>I have been working with Mabelle for over two years, and she has been very helpful in terms of academic and career advising. Studying with Mabelle, I have improved my writing skills significantly, and I have also established a clear academic and career goal. We worked together on my university applications, and I have now received acceptance letters from my dream universities. I really enjoy Mabelle’s communication style, especially how she always guides me to the right answer instead of spoon-feeding it</p>

            </blockquote>
          </div>
        </div>

        <div className="card" id="cardMichelle">
          <div className="card-header">
            University Student in Vancouver, BC
          </div>
          <div className="card-body">
            <blockquote className="blockquote mb-0">
              <p>Mabelle is such a great advisor because she knows exactly what I need. Therefore, she can give me specific help to guide me to achieve my goal, and the result is always fulfilling. With her help, my English writing skills and reading skills improved a lot. She helped me to achieve my goal and got me into my dream school. In the three years learning with her, I felt that she can always give valuable suggestions for both academic and social skills. I really enjoyed the time that we worked together. I also learned a lot from her in order to become more mature in my life. I will always appreciate the time spent with her!</p>

            </blockquote>
          </div>
        </div>
      </div>

      <div className="chatbot">
        <Chatbox steps={home}/>
      </div>

    </div>)
  }
}
