import styled from 'styled-components'

export const StyledMain = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   height: calc(100vh - 56px);
`

export const StyledHeading = styled.h1`
   font-size: 420px;
   @media (max-width: 980px) {
      font-size: 360px;
   }
   @media (max-width: 767px) {
      font-size: 280px;
   }
   @media (max-width: 567px) {
      font-size: 180px;
   }
`
