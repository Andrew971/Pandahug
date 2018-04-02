import React from "react";

export const About = () => {
  return (
    <div className="col-12" align="center">
      <h3>Consultant and Full Stack Web Developer</h3>
      <div className="card-body">
        <h5>Mabelle Moon, B.A.(University of British Columbia), M.A.(Harvard University)</h5>
        <p>I dreamed about going to Harvard since I was thirteen years old. After I graduated from UBC, my professors encouraged me to apply to my dream school for my graduate studies, and I was accepted with a full scholarship. I have lectured as head of a writing program at a university, worked at the United Nations, trained as a counsellor at the Red Cross, as well as advised businesses in finance. I ran an educational consulting business for over seven years while I was working full-time, and I never gave it up because I found helping students achieve their dreams so rewarding. In response to our rapidly changing world, I wanted to gain experience in the technology sector, so I took a 10-week coding bootcamp course and built this website using coding languages and technology that I had never used before. I am now excited to learn more about Data Science and Machine Learning, and how it can improve education.</p>
      </div>

    </div>
  );
};

export const freelence = () => {
  return (
    <div className="col-12 card">

      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">Freelance Tutors</h5>
        <small>Various Subjects: Math/Calculus, Chemistry, Physics</small>
      </div>
      <p className="mb-1">Did you graduate from a top 10 university in either Canada or the US? Are you passionate about education, mentorship and technology? We would love to hear from you!</p>
      <p>Send us your CV/resume and cover letter: jobs@pandahug.ca</p>

    </div>
  );
};
