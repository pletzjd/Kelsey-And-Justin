import React from 'react';
import timeline from '../../images/timeline.jpg';

export default function Timeline() {
  return (
    <div className='main-content'>
      <h3 className='opener fancy fancy-symbols'>Here's what to expect for our wedding day. We can't wait to celebrate with you!</h3>

      <div className='timelineWrapper'>
        <img src={timeline} className='timeline'></img>
      </div>
      
    </div>
  );
}