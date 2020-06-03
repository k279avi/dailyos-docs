import React from 'react'

import { StyledHeading } from './styled'

import { CaretIcon } from '../../assets/icons'

export const Accordian = ({ children }) => <div>{children}</div>

export const AccordianPanel = ({ label, isOpen, children, ...props }) => (
   <div {...props}>
      <StyledHeading isOpen={isOpen}>
         <h3>{label}</h3>
         <span>
            <CaretIcon />
         </span>
      </StyledHeading>
      {isOpen && children}
   </div>
)
