import styled, { css } from 'styled-components'

export const StyledHeading = styled.div(
   ({ isOpen }) => css`
      height: 40px;
      display: flex;
      padding: 0 12px;
      cursor: pointer;
      align-items: center;
      justify-content: space-between;
      background: ${isOpen ? '#8ac03b' : 'transparent'};
      &:hover {
         background: ${isOpen ? '#87bb3a' : '#f5f5f5'};
      }
      h3 {
         font-size: 14px;
         font-weight: 600;
         letter-spacing: 0.4px;
         text-transform: uppercase;
         color: ${isOpen ? '#fff' : '#a7a7a7'};
      }
      span {
         width: 24px;
         height: 24px;
         display: flex;
         border-radius: 50%;
         align-items: center;
         justify-content: center;
         background: ${isOpen ? '#75a72c' : 'rgba(0, 0, 0, 0.05)'};
         transform: ${isOpen ? 'rotate(180deg)' : 'rotate(0)'};
         svg {
            stroke: ${isOpen ? '#fff' : '#000'};
         }
      }
   `
)
