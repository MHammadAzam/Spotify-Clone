import React from 'react'
import './trendingCard.css'
import { TrendingCardData } from '../../config/config'

const TrendingCard = () => {
  return (
    <>
        <div className='trendingCardMainContainer'>
      {
        TrendingCardData.map((element) => {
          return (
            <div className="cardContainer">
              <img src={element.imgSrc} alt="" />
              <div className="cardTextContainer">
               <h2>{element.heading}</h2>
               <p>{element.subHeading}</p>

              </div>
            </div>
              
            )
          })
        }
        </div>
    </>
  )
}

export default TrendingCard
