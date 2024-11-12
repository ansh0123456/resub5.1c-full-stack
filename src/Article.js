import React from 'react';
import './Article.css';

const ArticleSection = () => {
  return (
    <div className="section_article">
      <h2>What do you want to ask or share?</h2>
      <label className='A1'>Title</label>
      <input className='Article_1' type="text" placeholder="Start your article title with how, what, why, etc." />
      <label>Abstract</label>
      <textarea placeholder="Enter a 1-paragraph Abstract" />
      <label>Article Text</label>
      <textarea placeholder="Enter the article text" />
      <label>Tags</label>
      <input className='Article_2' type="text" placeholder="Please add up to three tags to describe what your article is about, e.g., Technology" />
      <button className="post">Post</button>
    </div>
  );
};

export default ArticleSection;
