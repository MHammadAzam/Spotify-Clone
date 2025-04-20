import React from 'react'
import './sidebar.css'
import Cards from '../sidebar/Cards'

const Sidebar = (props) => {
   const text = ["Legal", "security & privacy center", "privacy policy", "Cookies", "About Ads", "Accessibilty"]
   return (
      <div className='sidebarMainContainer'>
         <div className="sidebarTopSection">
            <h1>Your Library</h1>
            <p> + </p>
         </div>
         <div className="sidebarMiddleSection">
            <Cards heading="Create Your First PlayList" subHeading="Its's easy, we'll help you" buttonText="Create Playlist" />
            <Cards heading="Lets Find Some Podcast To Follow" subHeading="we'll keep you updated on new episodes" buttonText="Browse Podcasts" />
         </div>
         <div className="sidebarBottomSection">
            <div className="sidebarBottomSectionTopContainer">
               {text.map((element) => {
                   return <p>{element}</p>
               })
               }
            </div>

            <div className="sidebarBottomSectionBottomContainer">
               <p>Cookies</p>
            </div>
            <div className="sidebarBottomSectionBottomContainer">
               <button>English</button>
            </div>
         </div>
      </div>
   )
}

export default Sidebar
