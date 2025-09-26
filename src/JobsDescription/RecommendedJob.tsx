import React from 'react';
import './RecommendedJob.css';

const RecommendedJob = () => {
  const job = {
    title: 'Frontend Developer',
    company: 'Facebook',
    location: 'Menlo Park, CA',
    skills: ['React', 'JavaScript', 'CSS'],
    logo: 'https://www.freepnglogos.com/uploads/facebook-logo-icon/facebook-logo-icon-4.png'
  };

  return (
    <div className="recommended-job-card">
      <div className="card-header">
        <img src={job.logo} alt={`${job.company} logo`} className="company-logo" />
        <div className="company-info">
          <h3 className="job-title">{job.title}</h3>
          <p className="company-name">{job.company}</p>
        </div>
      </div>
      <div className="card-body">
        <p className="location">{job.location}</p>
        <div className="skills">
          {job.skills.map((skill, index) => (
            <span key={index} className="skill-tag">{skill}</span>
          ))}
        </div>
      </div>
      <div className="card-footer">
        <button className="apply-button">Apply Now</button>
      </div>
    </div>
  );
};

export default RecommendedJob;
