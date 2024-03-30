import React from 'react'
import './Menu.scss'

function Menu({ sections, updateSection }) {

   const handleSectionChange = (section) => {
      updateSection(section)
   }
   return (
      <nav>
         <ul className="menu">
            {
               sections && Object.keys(sections).map((section, index) => (
                  <li key={index} onClick={() => handleSectionChange(sections[section])}>{section}</li>
               ))
            }
         </ul>
      </nav>
   )
}

export default Menu