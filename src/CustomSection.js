import React from 'react';
import './CustomSection.css';

const CustomSection = () => {
  return (
    <div className="custom-section">
      <h2>What do you want to share?</h2>
      <label className="Class">Title</label>
      <input className="Question1" type="text" placeholder="Start your question with how, what, why, etc." />
      <label className="Class">Describe your Problem</label>
      <textarea className="Question2" placeholder="Describe your problem..." />
      <label className="Class">Tags</label>
      <input className="Question3" type="text" placeholder="Please add up to 3 tags to describe what your question is about e.g., Java" />
      <button className="post">Post</button>
    </div>
  );
};

export default CustomSection;
