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
    <div className='flex items-center bg-mine-shaft-900 rounded-full p-5   space-x-8' >
      {links.map((link) => (
       <div>

         <Link key={link.name} to={link.url} className="hover:text-gray-300 cursor-pointer">{link.name}</Link>
       </div>
      ))}
    </div>
  )
}

export default NavLink