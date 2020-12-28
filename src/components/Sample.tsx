import React from 'react';

const Sample: React.FC = () => {
  return (
    <div>
      <button className='button' onClick={() => console.log('button')}>
        button
      </button>
    </div>
  );
};

export default Sample;
