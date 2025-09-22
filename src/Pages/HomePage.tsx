import React from 'react'
import Dreamjob from '../LandingPage/Dreamjob'
import Companies from '../LandingPage/Companies'
import JobCategory from '../LandingPage/JobCategory'
import Working from '../LandingPage/Working'
import Testimonials from '../LandingPage/Testimonials'
import Subscribe from '../LandingPage/Subscribe'


function HomePage() {
  return (
    <div className='min-h-[100vh] bg-mine-shaft-950 font-["Fontdiner"] ' >
      <Dreamjob />
      <Companies />
      <JobCategory />
      <Working />
      <Testimonials />
      <Subscribe/>
      
    </div>
  )
}

export default HomePage