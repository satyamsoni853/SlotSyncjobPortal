import React from 'react'
import JobsDescription from '../JobsDescription/JobsDescription'
import RecommendedJob from '../JobsDescription/RecommendedJob'

function JobDexcrpitionPage() {
  return (
    <div className='min-h-[100vh] bg-mine-shaft-950 font-["Fontdiner"]  flex items-center justify-between '  >
      <JobsDescription/>
      <RecommendedJob/>
    </div>
  )
}

export default JobDexcrpitionPage