import React from 'react';
import './Mentor.css';
const Mentor = ({ MentorList }) => {
  return (
    <div className="row me-row content-ct speaker" id="speakers">
      <h2 className="row-title">Meet Your Mentor</h2>
      {MentorList.map((speaker, index) => (
        <div className="col-md-4 col-sm-6 feature" key={index}>
          <img src={speaker.image} className="speaker-img" alt={speaker.name} />
          <h4>{speaker.name}</h4>
          <h2>{speaker.university}</h2>
        </div>
      ))}s
    </div>
  );
};

export default Mentor;
