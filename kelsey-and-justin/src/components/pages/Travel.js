import React from 'react';
import hotel from '../../images/icons/hotels.png';
import AirBNB from '../../images/icons/airbnb.png';
import Pin from '../../images/icons/pin.png'

export default function Travel() {
  return (
    <div className='main-content'>
      <h3 className='opener fancy fancy-symbols'>For our guests coming from out of town</h3>

      <div className='card hotel'>
        <img src={hotel} height='64px' width='64px' alt='Hotel_Icon'></img>
        <h3>Hotel</h3>
        <h1>Lord Elgin Hotel</h1>
        <div className='address-wrapper'>
          <img src={Pin} height='12px' width='12px' alt='Pin_Icon'></img>
          <a className='location-address-link' href='https://www.google.ca/maps/place/Lord+Elgin+Hotel/@45.421411,-75.6962305,17z/data=!3m1!4b1!4m9!3m8!1s0x4cce05aa7df41401:0x68e9ea08d2d22227!5m2!4m1!1i2!8m2!3d45.4214073!4d-75.6936556!16zL20vMDR2ajc2?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D'>100 Elgin Street, Ottawa, ON</a>
        </div>
        <p className='card-description'>We've reserved a block of rooms for our guests for Friday April, 25 and/or Saturday April 26. The hotel is a 5 minute drive or 15 minute walk from the venue. </p>
        <p>Use Block Code: 5168033 </p>
        <a className='button second-button' href='https://reservations.travelclick.com/12200?groupID=4448994'>Book</a>
        <p><b>Parking</b></p>
        <p>Valet Parking with 24h in and out privileges</p>
        <p>$39.00/night + HST</p>
        <p><b>For any issues, questions and dates outside of the block:</b></p>
        <p>Email: groups@lordelgin.ca</p>
        <p>Phone: 613-235-3333 x 0</p>
        <p><b>Check In: 3PM</b></p>
        <p><b>Check Out: 12PM</b></p>
        <p>Early check in cannot be guaranteed but the hotel will do their best to accommodate. If early check-in is not available, the hotel offers luggage check and access to fitness facility changing rooms or boardrooms with a
        full bathroom.</p>
        <p><b>Cancellation</b></p>
        <p>Reservations can be cancelled 7 days prior to arrival without penalty.</p>
        <p><b>Release Date:</b> The block is being held until March 25th 2025</p>
        

        <p>Don't worry if you aren't able to snag one. There are many others in the area as well.</p>
        
      </div>

      <div className='card'>
        <img src={hotel} height='64px' width='64px' alt='Hotel_Icon'></img>
        <h3>Other Hotels</h3>
        <h2>Looking for something else? Here's a list of some of our favourite hotels in the area:</h2>
        
        <h1>Arc The Hotel</h1>
        <div className='address-wrapper'>
          <img src={Pin} height='12px' width='12px' alt='Pin_Icon'></img>
          <a className='location-address-link' href='https://www.google.com/maps/place/ARC+THE.HOTEL/@45.4204227,-75.699454,17z/data=!3m1!4b1!4m9!3m8!1s0x4cce04552ca5d1c7:0xf5d6a4700f49e970!5m2!4m1!1i2!8m2!3d45.420419!4d-75.6968791!16s%2Fg%2F1tnpf1bg?entry=ttu&g_ep=EgoyMDI1MDIwMi4wIKXMDSoASAFQAw%3D%3D'>140 Slater St., Ottawa, ON</a>
        </div>
        
        <h1>The Metcalfe Hotel</h1>
        <div className='address-wrapper'>
          <img src={Pin} height='12px' width='12px' alt='Pin_Icon'></img>
          <a className='location-address-link' href='https://www.google.com/maps/place/The+Metcalfe+Hotel+by+Gray+Collection/@45.4205093,-75.6976888,17z/data=!4m10!3m9!1s0x4cce05aae87c3f9d:0xb87a4a181545e2b3!5m3!1s2025-02-24!4m1!1i2!8m2!3d45.4205056!4d-75.6951139!16s%2Fg%2F11c38f2h_h?entry=ttu&g_ep=EgoyMDI1MDIwMi4wIKXMDSoASAFQAw%3D%3D'>123 Metcalfe St, Ottawa, ON</a>
        </div>
        
        <h1>The Sheraton Ottawa Hotel</h1>
        <div className='address-wrapper'>
          <img src={Pin} height='12px' width='12px' alt='Pin_Icon'></img>
          <a className='location-address-link' href='https://www.google.com/maps/place/Sheraton+Ottawa+Hotel/@45.4208499,-75.7002867,17z/data=!4m10!3m9!1s0x4cce04553d49a461:0x60cb859f1dac4567!5m3!1s2025-02-24!4m1!1i2!8m2!3d45.4208462!4d-75.6977118!16s%2Fg%2F1v5_91b6?entry=ttu&g_ep=EgoyMDI1MDIwMi4wIKXMDSoASAFQAw%3D%3D'>150 Albert St, Ottawa, ON</a>
        </div>
        

        <h1>The Alt Hotel</h1>
        <div className='address-wrapper'>
          <img src={Pin} height='12px' width='12px' alt='Pin_Icon'></img>
          <a className='location-address-link' href='https://www.google.com/maps/place/Alt+Hotel+Ottawa/@45.4199542,-75.7016087,17z/data=!4m10!3m9!1s0x4cce0454e703f7af:0xa16f341b9e174320!5m3!1s2025-02-24!4m1!1i2!8m2!3d45.4199505!4d-75.6990338!16s%2Fg%2F11c3tpj4j5?entry=ttu&g_ep=EgoyMDI1MDIwMi4wIKXMDSoASAFQAw%3D%3D'>185 Slater St., Ottawa, ON</a>
        </div>

        <h1>Ottawa Marriot Hotel</h1>
        <div className='address-wrapper'>
          <img src={Pin} height='12px' width='12px' alt='Pin_Icon'></img>
          <a className='location-address-link' href='https://www.google.com/maps/place/Ottawa+Marriott+Hotel/@45.4198214,-75.7060415,17z/data=!4m10!3m9!1s0x4cce045427901021:0x15d1695cacf9a50c!5m3!1s2025-02-24!4m1!1i2!8m2!3d45.4198177!4d-75.7034666!16zL20vMDZ0amti?entry=ttu&g_ep=EgoyMDI1MDIwMi4wIKXMDSoASAFQAw%3D%3D'>100 Kent St, Ottawa, ON</a>
        </div>

        <h1>Delta Hotels Ottawa City Centre</h1>
        <div className='address-wrapper'>
          <img src={Pin} height='12px' width='12px' alt='Pin_Icon'></img>
          <a className='location-address-link' href='https://www.google.com/maps/place/Delta+Hotels+Ottawa+City+Centre/@45.4186028,-75.7069529,17z/data=!4m10!3m9!1s0x4cce0453fe0927e1:0x74f95f439b0f07b8!5m3!1s2025-02-24!4m1!1i2!8m2!3d45.4185991!4d-75.704378!16s%2Fg%2F1td5874n?entry=ttu&g_ep=EgoyMDI1MDIwMi4wIKXMDSoASAFQAw%3D%3D'>101 Lyon St. N, Ottawa, ON</a>
        </div>
        
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