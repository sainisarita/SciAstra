import React from 'react';
import icon from '../../assets/images/service-icon-01.png';
import './University.css';

const University = ({ UniversityList }) => {
  return (
    <section className="services">
      <div className="container">
        <div className="row">
          {UniversityList.map((service, index) => (
            <div className="col-lg-4" key={index}>
              <a href={`/university/${service}`} className="card-link">
                <div className="card">
                  <div className="icon">
                    <img src={icon} alt="" />
                  </div>
                  <div className="down-content">
                    <h4>{service}</h4>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default University;
