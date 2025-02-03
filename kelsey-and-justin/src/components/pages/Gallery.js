// Note: Image data importing and object can be found in App.js
import React, { useEffect, useState } from 'react';

export default function Gallery({imgData}) {

  return (
    <div className='gallery-content'>
      <div className='gallery-container'>
        {imgData.map((item, index) => (
          <img src={item.imgSmall} alt={item.text} className='gal-image' key={index}></img>
        ))}
      </div>
    </div>
  );
}