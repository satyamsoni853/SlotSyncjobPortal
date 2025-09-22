import React, { use } from 'react'
import { Link, useLocation } from 'react-router-dom'

function NavLink() {
  const links = [ 
    { name: "Find Job", url: "Find-Job" },
    { name: "Find Talent", url: "Find-Talent" },
    { name: "Upload Job", url: "Upload-Job" },
    { name: "About Us", url: "About-Us" },
  ];
  const location=useLocation()
  return (
    <div className='flex items-center text-mine-shaft-300 h-full bg-gra-900 shadow-[0px_0px_30px_rgba(255,255,255,0.05)] rounded-full p-5   space-x-8' >
      {links.map((link) => (
       <div className={`border-t-[3px] items-center h-full ${location.pathname === `/${link.url}` ? 'border-faded-jade-400' : 'border-transparent'}`} >

         <Link key={link.name} to={`/${link.url}`} className="hover:text-gray-300 cursor-pointer">{link.name}</Link>
       </div>
      ))}
    </div>
  )
}

export default NavLink