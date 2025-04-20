import React, { useState } from 'react'
import './mainSection.css'
import Trending from '../trending/Trending'
import PopularArtist from '../popularArtists/PopularArtist'
import SpecificMusicPage from '../../pages/specificMusicPage/specificMusicPage'
// import {TrendingCardData } from '../../config/config'

const MainSection = () => {
  const [currentPage, setCurrentPage] = useState("home")
  const [currentEle, setCurrentEle] = useState(null)

  return (
<>
    <main className='mainSection'>
      {
        currentPage === "home" ? 
        <>
        <Trending setCurrentEle={setCurrentEle} setCurrentPage={setCurrentPage}/>
       <PopularArtist setCurrentPage={setCurrentPage}/> 
        </> : currentPage === "musicSpecificPage" ? <> <SpecificMusicPage currentEle={currentEle}/> </> : currentPage ==="artistSpecificPage" ? <>artist</> : null
      }
    </main>
    </>
  )
}

export default MainSection
