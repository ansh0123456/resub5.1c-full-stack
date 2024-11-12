import React, { useState } from 'react';
import './OptionsSelector.css';
import CustomSection from '../CustomSection';
import ArticleSection from '../Article';

const OptionsSelector = () => {
  const [selectedOption, setSelectedOption] = useState('optionA');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="Selector">
      <p>Select an option:
        <span className="Options">
          <span className={`Option ${selectedOption === 'optionA' ? 'selected' : ''}`} onClick={() => handleOptionClick('optionA')}>
            {selectedOption === 'optionA' && <span className='Selected'>&#9679;</span>}
            Question
          </span>
          <span className={`Option ${selectedOption === 'optionB' ? 'selected' : ''}`} onClick={() => handleOptionClick('optionB')}>
            {selectedOption === 'optionB' && <span className='Selected'>&#9679;</span>}
            Article
          </span>
        </span>
      </p>
      {selectedOption === 'optionA' ? <CustomSection /> : <ArticleSection />}
    </div>
  );
};

export default OptionsSelector;
