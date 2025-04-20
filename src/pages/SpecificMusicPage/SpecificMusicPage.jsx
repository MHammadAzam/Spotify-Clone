import React from 'react'

const SpecificMusicPage = ({currentEle}) => {
  return (
    <div>
       <img src={currentEle.imgSrc} />
       <h1>{currentEle.heading}</h1>
       <p>{ currentEle.subHeading}</p>
    </div>
  )
}

export default SpecificMusicPage
