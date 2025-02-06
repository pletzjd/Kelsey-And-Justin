import React from 'react';
import Banner from '../../images/gallery-images/KJ004.jpg'
import Plant from '../../images/icons/plant.png'

export default function Home() {
  return (
    <div className='main-content'>
      <img className='banner' src={Banner} height='300px' width='100%' alt='Banner_Image'></img>
      
      <div className='full-name-container'>
        <h1 className='fancy fancy-names'>KELSEY PLETZER</h1>        
        <h5 className='fancy fancy-symbols'>&</h5>
        <h1 className='fancy fancy-names'>JUSTIN WITTIVEEN</h1>
      </div>
      
      <div className='date-container'>
        <h2 className='date'>April 26, 2025</h2>
        <h4 className='date-location'>Ottawa, ON</h4>
      </div>
      
      <a className='button rsvp-home' href='https://docs.google.com/forms/d/e/1FAIpQLSdZZSj9-vOVF1jV1a5XaP_NZSkc_jsW6pdjcragm1vwlTALUA/viewform?vc=0&c=0&w=1&flr=0'>RSVP</a>
      
      <div className='card'>
        <img className='plant' src={Plant} width='150px' height='150px'></img>
        <h1 className='fancy fancy-names'>How We Met</h1>
        <h4>25.10.07</h4>
        <p>It was the Fall of 2007 when we first met on campus at the Nipissing University and Canadore College residence. We were introduced to each other by a mutual friend and Justin created a memorable first impression with the biggest bear hug Kelsey had ever experienced.</p>
        <p>We chatted for a little bit and Kelsey asked Justin if he would like to join her and her group of friends who were headed over to the on-campus pub for Halloween. With a little encouragement from his roommates, Justin decided to venture out and eventually found Kelsey amongst the crowd. They danced the night away and found an instant connection. Eventually Kelsey needed to find her friend since she was responsible for getting her home but she was no where to be found. Ever the gentleman, Justin escorted Kelsey back to residence to ensure she was safe and helped her track down her lost friend</p>
        <p>The night ended with Justin forgetting to ask for Kelsey's phone number, even though he did invite her to a gathering the following Friday. With a little help from their mutual friend, they did indeed meet again a week later for wings night with friends and the rest is history</p>
      </div>

      <div className='card'>
        <img className='plant' src={Plant} width='150px' height='150px'></img>
        <h1 className='fancy fancy-names'>The Proposal</h1>
        <h4>01.10.23</h4>
        <p>Picture it, Santorini at sunset. The perfect place to propose. Justin and Kelsey were about half way through their island hopping adventure through the Cyclades in Greece. As a special treat, they booked a stay in a beautiful cave hotel overlooking the caldera, white washed homes and of course, a great private view of the sunset! </p>
        <p>After a perfect day of exploring the island, they set up on their balcony to watch the famous Santorini sunset. They had visited a vineyard the day before and figured what better place and time to enjoy some of Santorini's finest.</p>
        <p>Just as the sun was beginning to set and the ski filled with the most spectacular colours, Justin got down on one knee and asked Kelsey if she wouldn't mind letting him spend the rest of his life making her as happy as she has made him. He cried, she cried and of course said "YES!"</p>
      </div>

      <img></img>
    </div>
  );
}