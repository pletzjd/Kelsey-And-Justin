import React from 'react';

export default function RSVP({imgData}) {
  return (
    <div className='main-content'>
      <h3 className='opener rsvp-opener'>Please fill out the google form linked below to RSVP. We look forward to having you with us on this magic day!</h3>

        <a className='button' href='https://docs.google.com/forms/d/e/1FAIpQLSdZZSj9-vOVF1jV1a5XaP_NZSkc_jsW6pdjcragm1vwlTALUA/viewform?vc=0&c=0&w=1&flr=0'>RSVP</a>

        <img className='rsvp-image' src={imgData[8].imgLarge} alt={imgData[8].text}></img>
    </div>
  );
}