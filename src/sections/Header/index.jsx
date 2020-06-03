import React from 'react'

import { Logo } from '../../assets/svgs'

import { StyledHeader } from './styled'

import { MenuIcon } from '../../assets/icons'

const Header = ({ isSidebarVisible, toggleSidebar, hideMenu }) => {
   return (
      <StyledHeader>
         <div>
            <Logo />
            {!hideMenu && (
               <span onClick={() => toggleSidebar(!isSidebarVisible)}>
                  <MenuIcon color="#065626" />
               </span>
            )}
         </div>
      </StyledHeader>
   )
}

export default Header
