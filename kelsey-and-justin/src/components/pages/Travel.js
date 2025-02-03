import React from 'react';
import hotel from '../../images/icons/hotels.png';
import AirBNB from '../../images/icons/airbnb.png';
import Details from '../../docs/Wedding_Hotel_Block_Information.PDF'

export default function Travel() {
  return (
    <div className='main-content'>
      <h3 className='opener fancy fancy-symbols'>For our guests coming from out of town</h3>

      <div className='card'>
        <img src={hotel} height='64px' width='64px' alt='Hotel_Icon'></img>
        <h3>Hotel</h3>
        <h1>Lord Elgin Hotel</h1>
        <a className='location-address-link' href='https://www.google.ca/maps/place/Lord+Elgin+Hotel/@45.421411,-75.6962305,17z/data=!3m1!4b1!4m9!3m8!1s0x4cce05aa7df41401:0x68e9ea08d2d22227!5m2!4m1!1i2!8m2!3d45.4214073!4d-75.6936556!16zL20vMDR2ajc2?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D'>100 Elgin Street, Ottawa, ON</a>
        <p className='card-description'>We've reserved a block of rooms for our guests for Friday April, 25 and Saturday April 26. The hotel is a 5 minute drive or 15 minute walk from the venue. Use Block Code: 5168033 by March 25th or the link below. Don't worry if you aren't able to snag one. There are many others in the area as well.</p>
        <a className='button first-button' href={Details} target='_blank'>Details</a>
          <a className='button second-button' href='https://reservations.travelclick.com/12200?groupID=4448994'>Book</a>
      </div>

      <div className='card'>
        <img src={AirBNB} height='64px' width='64px' alt='AirBNB_Icon'></img>
        <h3>Other Accomidations</h3>
        <h1>AirBNB</h1>
        <p className='card-description'>Aside from hotels AirBNB is another great options. If you want something close to the venue look for rentals in and around the Centertown area.</p>
          <a className='button' href='https://www.airbnb.ca/s/Centretown--Ottawa--Canada/homes?refinement_paths%5B%5D=%2Fhomes&place_id=ChIJixGuCK4FzkwR2sdKuIM2Xl4&adults=1'>Book</a>
      </div>
    </div>
  );
}