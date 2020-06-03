import React from 'react'

import Header from '../sections/Header'
import { StyledMain, StyledHeading } from '../styled/404'

const NotFound = () => (
   <div>
      <Header hideMenu={true} />
      <StyledMain>
         <StyledHeading>404</StyledHeading>
      </StyledMain>
   </div>
)

export default NotFound
