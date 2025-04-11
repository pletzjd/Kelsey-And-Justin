import React from 'react';
import timelineLrg from '../../images/timeline-lrg.jpg';
import timelineSml from '../../images/timeline-sml.jpg';

export default function Timeline() {
  return (
    <div className='main-content'>
      <h3 className='opener fancy fancy-symbols'>Here's what to expect for our wedding day. We can't wait to celebrate with you!</h3>

      <img
      src={timelineSml}
      srcSet={timelineSml + ' 900w, ' + timelineLrg + ' 1100w'}
      className='timeline'>
      </img>
    </div>
  );
}