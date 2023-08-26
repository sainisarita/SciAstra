import React from 'react';
import './MentorAndAdvisor.css';

const MentorAndAdvisor = ({ MentorsData }) => {
  
  return (
    <div className="row me-row content-ct mentor-advisor" id="mentor-advisor">
      <h2 className="row-title">Mentor and Advisor</h2>
      {MentorsData.map((mentor, index) => (
        <div className="col-md-4 col-sm-6 feature" key={index}>
          <img src={mentor.image} className="mentor-advisor-img" alt={mentor.name} />
          <h3>{mentor.name}</h3>
          <h2>{mentor.university}</h2>
          <h2>{mentor.desc}</h2>
          <h2>{mentor.locn}</h2>
          <button type="button" class="btn btn-primary">Send Message</button>        </div>
      ))}
    </div>
  );
};

export default MentorAndAdvisor;
