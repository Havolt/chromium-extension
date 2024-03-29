import React from 'react'

function Menu({ sections, updateSection }) {

   const handleSectionChange = (section) => {
      updateSection(section)
   }
   return (
      <div>
         <ul>
            {
               sections && Object.keys(sections).map((section, index) => (
                  section !== 'MENU' && <li key={index} onClick={() => handleSectionChange(sections[section])}>{section}</li>
               ))
            }
         </ul>
      </div>
   )
}

export default Menu