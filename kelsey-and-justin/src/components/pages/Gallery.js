// Note: Image data importing and object can be found in App.js
import React, { useEffect, useState } from 'react';
import Modal from "../Modal";

export default function Gallery({imgData}) {
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item.imgLarge);
  };

  const handelRotationRight = () => {
  const totalLength = imgData.length;
  if (currentIndex + 1 >= totalLength) {
    setCurrentIndex(0);
    const newUrl = imgData[0].imgLarge;
    setClickedImg(newUrl);
    return;
  }
  const newIndex = currentIndex + 1;
  const newUrl = imgData.filter((item) => {
    return imgData.indexOf(item) === newIndex;
  });
  const newItem = newUrl[0].imgLarge;
  setClickedImg(newItem);
  setCurrentIndex(newIndex);
};

const handelRotationLeft = () => {
  const totalLength = imgData.length;
  if (currentIndex === 0) {
    setCurrentIndex(totalLength - 1);
    const newUrl = imgData[totalLength - 1].imgLarge;
    setClickedImg(newUrl);
    return;
  }
  const newIndex = currentIndex - 1;
  const newUrl = imgData.filter((item) => {
    return imgData.indexOf(item) === newIndex;
  });
  const newItem = newUrl[0].imgLarge;
  setClickedImg(newItem);
  setCurrentIndex(newIndex);
};

  return (
    <div className='gallery-content'>
      <div className='gallery-container'>
        {imgData.map((item, index) => (
          <img src={item.imgLarge} alt={item.text} className='gal-image' key={index} onClick={() => handleClick(item, index)}></img>
        ))}
      </div>

      {clickedImg && (
          <Modal
            clickedImg={clickedImg}
            handelRotationRight={handelRotationRight}
            setClickedImg={setClickedImg}
            handelRotationLeft={handelRotationLeft}
            imgData={imgData}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />
        )}
    </div>
  );
}