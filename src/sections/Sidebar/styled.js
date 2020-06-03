import styled, { css } from 'styled-components'

export const StyledAside = styled.aside(
   ({ isVisible }) => css`
      background: #fcfcfc;
      border-right: 1px solid #e0e0e0;
      overflow-y: auto;
      overflow-x: hidden;
      @media (max-width: 567px) {
         top: 56px;
         bottom: 0;
         z-index: 10;
         width: 280px;
         position: absolute;
         display: ${isVisible ? 'block' : 'none'};
      }
   `
)

export const StyledList = styled.ul(css`
   height: auto;
`)

export const StyledListItem = styled.li(
   ({ isActive }) => css`
      min-height: 40px;
      line-height: 40px;
      list-style: none;
      position: relative;
      a {
         width: 100%;
         height: 40px;
         display: block;
         color: #a79e9e;
         padding-left: 20px;
         text-decoration: none;
         ${isActive &&
            css`
               :before {
                  content: '';
                  position: absolute;
                  height: 8px;
                  width: 10px;
                  left: 0;
                  top: calc(50% - 4px);
                  background: #8ac03b;
                  border-top-right-radius: 4px;
                  border-bottom-right-radius: 4px;
               }
            `}
         :hover {
            background: #f5f5f5;
         }
      }
   `
)
