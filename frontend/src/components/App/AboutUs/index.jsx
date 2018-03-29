import React, { Component } from 'react';
import './index.css';
import Chatbox from '../../../js/chatbox';
import {about} from '../../../js/chatbox/about'
import prepareicon from '../../../Assets/images/prepareicon.png';
import applyicon from '../../../Assets/images/applyicon.png';
import succeedicon from '../../../Assets/images/successicon.png';




export default class AboutUs extends Component {


        render() {
        return (

        <div className="container-fluid">

            <div className="jumbotron" id="aboutUsJumbo" align="center" >
              <div id="overlay"></div>
              <h2 className="display-4" id="h2about">Pandahug is an Educational Consulting Service based in Vancouver, Canada.</h2>
                <h2 id="h2about2">We support you in your educational and career goals</h2>
                <h2 id="h2about3">in Canada and the United States.</h2>

              {/* </div> */}
            </div>




            <div class="card-deck">
            <div className="card">
                <img className="card-img-top" id="cardprepareicon" src={prepareicon} alt="Card cap" />
              <div className="card-body">
                <p>We work one-on-one with you to fully understand your needs and goals. We provide creative and informed advice based on the latest research and data available. We guide you through a step-by-step work flow process in our programs and services so that you can keep track of your learning and stay motivated.</p>

              </div>

            </div>
            <div className="card">
              <img className="card-img-top" id="cardapplyicon" src={applyicon} alt="Card cap" />
              <div className="card-body">
                <p>We assist you during the application process such as identifying valuable majors that fit your skill set, strategically selecting target schools, providing application essay writing workshops, as well as coaching to keep you motivated.</p>
              </div>

            </div>
            <div className="card">
              <img className="card-img-top" id="cardsucceedicon" src={succeedicon} alt="Card cap" />
              <div className="card-body">
                <p>Success is not a final destination; it is like climbing a mountain, enjoying the magnificent view, then climbing another beautiful mountain. We support you in all your career challenges to help you be the best you.</p>
              </div>
            </div>
            </div>


            <div className="card" align="center" id="bio">
        <h3>Consultant and Full Stack Web Developer</h3>
              <div className="card-body">
                <h2 className="card-title"> </h2>
                <h5>Mabelle Moon, B.A.(University of British Columbia), M.A.(Harvard University)</h5>
							<p>I dreamed about going to Harvard since I was thirteen years old. After I graduated from UBC, my professors encouraged me to apply to my dream school for my graduate studies, and I
              was accepted with a full scholarship. I have lectured as head of a writing program at a university, worked at the United Nations, trained as a counsellor at the Red Cross, as well as advised businesses in finance. I ran an educational consulting business for over seven years while I was working full-time, and I never gave it up because I found helping students achieve their dreams so rewarding. In response to our rapidly changing world, I wanted to gain experience in the technology sector, so I took a 10-week coding bootcamp course and built this website using coding languages and technology that I had never used before. I am now excited to learn more about Data Science and Machine Learning, and how it can improve education.</p>
							</div>

						</div>



            <div className="list-group" id="jobs">
  <a href="" className="list-group-item list-group-item-action flex-column align-items-start">
    <div className="d-flex w-100 justify-content-between">
      <h5 className="mb-1">Freelance Tutors</h5>
      <small>Various Subjects: Math/Calculus, Chemistry, Physics</small>
    </div>
    <p className="mb-1">Did you graduate from a top 10 university in either Canada or the US? Are you passionate about education, mentorship and technology? We would love to hear from you!</p>
   <p>Send us your CV/resume and cover letter: jobs@pandahug.ca</p>
  </a>

</div>



            <div className="chatbot">
              <Chatbox steps={about} />
            </div>
            </div>


        )
    }
}
