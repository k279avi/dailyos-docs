import styled, { css } from "styled-components";

export const StyledHeader = styled.header(css`
  height: 56px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e0e0e0;
  > div {
    height: 100%;
    width: 100%;
    display: flex;
    padding: 0 12px;
    align-items: center;
    justify-content: space-between;
    span {
      width: 40px;
      height: 40px;
      display: none;
      cursor: pointer;
      border-radius: 50%;
      align-items: center;
      background: #c7ffdd;
      justify-content: center;
    }
  }
  @media (max-width: 567px) {
    > div {
      span {
        display: flex;
      }
    }
  }
`);
