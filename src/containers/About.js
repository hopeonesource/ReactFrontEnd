import React from 'react'
import AboutHero from '../components/aboutComponents/AboutHero'
import OurSponsors from '../components/aboutComponents/OurSponsors'
import OurTeam from '../components/aboutComponents/OurTeam'
import WhatWeDo from '../components/aboutComponents/WhatWeDo'
import WhoWeAre from '../components/aboutComponents/WhoWeAre'

const About = () => {
  return(
    <div>
      About
      <AboutHero />
      <OurSponsors />
      <OurTeam />
      <WhatWeDo />
      <WhoWeAre />
    </div>
  )
}

export default About
