import React from 'react';
import hotel from '../../images/icons/hotels.png'
import AirBNB from '../../images/icons/airbnb.png'

export default function Travel() {
  return (
    <div className='main-content'>
      <h3 className='opener'>For our guests coming from out of town</h3>

      <div className='card'>
        <img src={hotel} height='64px' width='64px' alt='Hotel_Icon'></img>
        <h3>Hotel</h3>
        <h1>Hotel Name</h1>
        <p>We've reserved a block of rooms for our guests to rent with. Use Discount code: PLACEHOLDER. Don't worry if you aren't able to snag one. There are many others in the area as well.</p>
          <a className='button' href=''>View</a>
      </div>

      <div className='card'>
        <img src={AirBNB} height='64px' width='64px' alt='AirBNB_Icon'></img>
        <h3>Other Accomidations</h3>
        <h1>AirBNB</h1>
        <p>Aside from hotels AirBNB is another great options. If you want something close to the venue look for rentals in and around the Centertown area.</p>
          <a className='button' href='https://www.airbnb.ca/s/Centretown--Ottawa--Canada/homes?refinement_paths%5B%5D=%2Fhomes&place_id=ChIJixGuCK4FzkwR2sdKuIM2Xl4&adults=1'>View</a>
      </div>
    </div>
  );
}