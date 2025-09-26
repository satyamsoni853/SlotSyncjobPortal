import React, { useState } from 'react';
import './ApplyJob.css';

const ApplyJob = () => {
  const [preview, setPreview] = useState(false);
  const handlePreview = () => {
    setPreview(true);
  }
  return (
    <div className="apply-job-container">
      <div className="apply-job-card">
        <h2 className="form-title">Apply for Software Engineer</h2>
        <p className="company-name">at Google</p>
        <form className="job-application-form">
          <div className="form-group">
            <label htmlFor="name" className="form-label">Full Name</label>
            <input type="text" id="name" className="form-input" placeholder="Enter your full name" />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input type="email" id="email" className="form-input" placeholder="Enter your email address" />
          </div>
          <div className="form-group">
            <label htmlFor="phone" className="form-label">Phone Number</label>
            <input type="tel" id="phone" className="form-input" placeholder="Enter your phone number" />
          </div>
          <div className="form-group">
            <label htmlFor="portfolio" className="form-label">Portfolio Link</label>
            <input type="url" id="portfolio" className="form-input" placeholder="https://example.com" />
          </div>
          <div className="form-group">
            <label htmlFor="resume" className="form-label">Resume</label>
            <input type="file" id="resume" className="form-input-file" />
          </div>
          <div className="form-group">
            <label htmlFor="cover-letter" className="form-label">Cover Letter</label>
            <textarea id="cover-letter" className="form-textarea" rows={6} placeholder="Write a brief cover letter..."></textarea>
          </div>
          <button type="submit" className="submit-button" onClick={handlePreview}>Submit Application</button>
        </form>
      </div>
    </div>
  );
};

export default ApplyJob;