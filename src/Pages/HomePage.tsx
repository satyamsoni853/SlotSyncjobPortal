import React from 'react'
import Dreamjob from '../Components/LandingPage/Dreamjob'
import Companies from '../Components/LandingPage/Companies'
import JobCategory from '../Components/LandingPage/JobCategory'
import Working from '../Components/LandingPage/Working'
import Testimonials from '../Components/LandingPage/Testimonials'
import Subscribe from '../Components/LandingPage/Subscribe'


function HomePage() {
  return (
    <div className='min-h-[100vh] bg-mine-shaft-950 font-["Fontdiner"] ' >
      <Dreamjob />
      <Companies />
      <JobCategory />
      <Working />
      <Testimonials />
      <Subscribe />
      
    </div>
  )
}

export default HomePage