import React from 'react'
import TalentCard from './TalentCard'
import { talents } from '../JobPortalResources/Data/TalentData'

function Talent() {
  return (
    <div>
       {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white">Find Your Next Hire</h1>
          <p className="text-lg text-gray-400 mt-2">
            Browse through our curated list of top-tier professionals.
          </p>
        </div>
        {
          talents.map((talent,index)=>
            <TalentCard key={index} {...talent} />
          )
        }
    </div>
  )
}

export default Talent