import React from 'react';
import Banner from '../../images/banner_photo.jpg'

export default function Home() {
  return (
    <div className='main-content'>
      <img className='banner' src={Banner} height='300px' width='100%' alt='Banner_Image'></img>
      
      <div className='full-name-container'>
        <h1>Justing Wittiveen</h1>
        <h5>and</h5>
        <h1>Kelsey Pletzer</h1>
      </div>
      
      <div className='date-container'>
        <h2>April 26, 2025</h2>
        <h4>Ottawa, ON</h4>
      </div>
      
      <a className='button-rsvp' href='https://docs.google.com/forms/d/e/1FAIpQLSdZZSj9-vOVF1jV1a5XaP_NZSkc_jsW6pdjcragm1vwlTALUA/viewform?vc=0&c=0&w=1&flr=0'>RSVP</a>
      
      <div className='card'>
        <h2>How We Meet</h2>
        <h4>Placeholder Date</h4>
        <p>Coming Soon!</p>
      </div>

      <div className='card'>
        <h2>The Proposal</h2>
        <h4>Placeholder Date</h4>
        <p>Coming Soon!</p>
      </div>
    </div>
  );
}