import React from 'react'


import "./imageCard.style.css"



const ImageCard = ({ src, alt }) => {
  return (
    <>
    <img className="image-card" src={src} alt={alt} style={{ maxWidth: '50%' }} />
 
      </>
  )
}

export default ImageCard