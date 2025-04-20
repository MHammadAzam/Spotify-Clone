import React from 'react'
import './popularArtist.css'
import ArtistCard from '../artistCard/ArtistCard'

const PopularArtist = ({setCurrentPage,artistSpecificPage}) => {
  return (
    <div className='popularArtistMainContainer trendingSectionMainContainer'>
      <span>
        Popular Artist

      </span>
        <ArtistCard setCurrentPage={setCurrentPage}/>
    </div>
  )
}

export default PopularArtist
