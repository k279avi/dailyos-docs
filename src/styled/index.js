import styled from 'styled-components'

export const Row = styled.div`
   height: calc(100vh - 56px);
   overflow-y: auto;
   display: flex;
   align-items: center;
   justify-content: center;
   padding-bottom: 40px;
   > div {
      max-width: 490px;
   }
   @media (max-width: 767px) {
      padding-top: 60px;
      flex-direction: column;
      justify-content: unset;
      > div:first-child {
         order: 2;
         padding: 0 16px;
         margin-right: 0;
         margin-top: 80px;
         text-align: center;
      }
   }
`

export const Left = styled.div`
   margin-right: 32px;
   h2 {
      font-size: 40px;
      font-weight: 400;
      margin-bottom: 12px;
   }
   p {
      color: #7c7e85;
      font-size: 18px;
      font-weight: 400;
      margin-bottom: 18px;
   }
   a {
      height: 40px;
      padding: 0 12px;
      font-size: 14px;
      font-weight: 600;
      line-height: 40px;
      border-radius: 4px;
      display: inline-block;
      text-decoration: none;
      vertical-align: middle;
      text-transform: uppercase;
      :first-child {
         color: #fff;
         margin-right: 16px;
         background: #8ac03b;
      }
      :last-child {
         border: 1px solid #8ac03b;
         :hover {
            background: #f4f5f4;
         }
      }
   }
`
