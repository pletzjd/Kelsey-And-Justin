import React, { useState } from 'react';
import Container from './components/Container';
import './styles/reset.css';
import './styles/style.css';
import galleryLarge01 from './images/gallery-images/large/KJ003.jpg';
import galleryMedium01 from './images/gallery-images/medium/KJ003.jpg';
import gallerySmall01 from './images/gallery-images/small/KJ003.jpg';
import galleryLarge02 from './images/gallery-images/large/KJ006.jpg';
import galleryMedium02 from './images/gallery-images/medium/KJ006.jpg';
import gallerySmall02 from './images/gallery-images/small/KJ006.jpg';
import galleryLarge03 from './images/gallery-images/large/KJ012.jpg';
import galleryMedium03 from './images/gallery-images/medium/KJ012.jpg';
import gallerySmall03 from './images/gallery-images/small/KJ012.jpg';
import galleryLarge04 from './images/gallery-images/large/KJ013.jpg';
import galleryMedium04 from './images/gallery-images/medium/KJ013.jpg';
import gallerySmall04 from './images/gallery-images/small/KJ013.jpg';
import galleryLarge05 from './images/gallery-images/large/KJ016.jpg';
import galleryMedium05 from './images/gallery-images/medium/KJ016.jpg';
import gallerySmall05 from './images/gallery-images/small/KJ016.jpg';
import galleryLarge06 from './images/gallery-images/large/KJ034.jpg';
import galleryMedium06 from './images/gallery-images/medium/KJ034.jpg';
import gallerySmall06 from './images/gallery-images/small/KJ034.jpg';
import galleryLarge07 from './images/gallery-images/large/KJ042.jpg';
import galleryMedium07 from './images/gallery-images/medium/KJ042.jpg';
import gallerySmall07 from './images/gallery-images/small/KJ042.jpg';
import galleryLarge08 from './images/gallery-images/large/KJ044.jpg';
import galleryMedium08 from './images/gallery-images/medium/KJ044.jpg';
import gallerySmall08 from './images/gallery-images/small/KJ044.jpg';
import galleryLarge09 from './images/gallery-images/large/KJ048.jpg';
import galleryMedium09 from './images/gallery-images/medium/KJ048.jpg';
import gallerySmall09 from './images/gallery-images/small/KJ048.jpg';
import galleryLarge10 from './images/gallery-images/large/KJ062.jpg';
import galleryMedium10 from './images/gallery-images/medium/KJ062.jpg';
import gallerySmall10 from './images/gallery-images/small/KJ062.jpg';
import galleryLarge11 from './images/gallery-images/large/KJ064.jpg';
import galleryMedium11 from './images/gallery-images/medium/KJ064.jpg';
import gallerySmall11 from './images/gallery-images/small/KJ064.jpg';
import galleryLarge12 from './images/gallery-images/large/KJ070.jpg';
import galleryMedium12 from './images/gallery-images/medium/KJ070.jpg';
import gallerySmall12 from './images/gallery-images/small/KJ070.jpg';
import galleryLarge13 from './images/gallery-images/large/KJ073.jpg';
import galleryMedium13 from './images/gallery-images/medium/KJ073.jpg';
import gallerySmall13 from './images/gallery-images/small/KJ073.jpg';
import galleryLarge14 from './images/gallery-images/large/KJ073.jpg';
import galleryMedium14 from './images/gallery-images/medium/KJ084.jpg';
import gallerySmall14 from './images/gallery-images/small/KJ084.jpg';
import galleryLarge15 from './images/gallery-images/large/KJ085.jpg';
import galleryMedium15 from './images/gallery-images/medium/KJ085.jpg';
import gallerySmall15 from './images/gallery-images/small/KJ085.jpg';
import galleryLarge16 from './images/gallery-images/large/KJ087.jpg';
import galleryMedium16 from './images/gallery-images/medium/KJ087.jpg';
import gallerySmall16 from './images/gallery-images/small/KJ087.jpg';
import galleryLarge17 from './images/gallery-images/large/KJ109.jpg';
import galleryMedium17 from './images/gallery-images/medium/KJ109.jpg';
import gallerySmall17 from './images/gallery-images/small/KJ109.jpg';
import galleryLarge18 from './images/gallery-images/large/KJ110.jpg';
import galleryMedium18 from './images/gallery-images/medium/KJ110.jpg';
import gallerySmall18 from './images/gallery-images/small/KJ110.jpg';

const App = () => {
    
    const imgData = [
        {
          text:"alt description",
          imgSmall: gallerySmall01,
          imgMedium: galleryMedium01,
          imgLarge: galleryLarge01 
      },
      {
        text:"alt description",
        imgSmall: gallerySmall02,
        imgMedium: galleryMedium02,
        imgLarge: galleryLarge02 
      },
      {
        text:"alt description",
        imgSmall: gallerySmall03,
        imgMedium: galleryMedium03,
        imgLarge: galleryLarge03 
      },
      {
        text:"alt description",
        imgSmall: gallerySmall04,
        imgMedium: galleryMedium04,
        imgLarge: galleryLarge04 
      },
      {
        text:"alt description",
        imgSmall: gallerySmall05,
        imgMedium: galleryMedium05,
        imgLarge: galleryLarge05 
      },
      {
        text:"alt description",
        imgSmall: gallerySmall06,
        imgMedium: galleryMedium06,
        imgLarge: galleryLarge06 
      },
      {
        text:"alt description",
        imgSmall: gallerySmall07,
        imgMedium: galleryMedium07,
        imgLarge: galleryLarge07 
      },
      {
        text:"alt description",
        imgSmall: gallerySmall08,
        imgMedium: galleryMedium08,
        imgLarge: galleryLarge08 
      },
      {
        text:"alt description",
        imgSmall: gallerySmall09,
        imgMedium: galleryMedium09,
        imgLarge: galleryLarge09 
      },
      {
        text:"alt description",
        imgSmall: gallerySmall10,
        imgMedium: galleryMedium10,
        imgLarge: galleryLarge10 
      },
      {
        text:"alt description",
        imgSmall: gallerySmall11,
        imgMedium: galleryMedium11,
        imgLarge: galleryLarge11 
      },
      {
        text:"alt description",
        imgSmall: gallerySmall12,
        imgMedium: galleryMedium12,
        imgLarge: galleryLarge12 
      },
      {
        text:"alt description",
        imgSmall: gallerySmall13,
        imgMedium: galleryMedium13,
        imgLarge: galleryLarge13 
      },
      {
        text:"alt description",
        imgSmall: gallerySmall14,
        imgMedium: galleryMedium14,
        imgLarge: galleryLarge14 
      },
      {
        text:"alt description",
        imgSmall: gallerySmall15,
        imgMedium: galleryMedium15,
        imgLarge: galleryLarge15 
      },
      {
        text:"alt description",
        imgSmall: gallerySmall16,
        imgMedium: galleryMedium16,
        imgLarge: galleryLarge16 
      },
      {
        text:"alt description",
        imgSmall: gallerySmall17,
        imgMedium: galleryMedium17,
        imgLarge: galleryLarge17 
      },
      {
        text:"alt description",
        imgSmall: gallerySmall18,
        imgMedium: galleryMedium18,
        imgLarge: galleryLarge18 
      }
    ]

    return <Container imgData={imgData}/>
};

export default App;
