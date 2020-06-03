import styled from "styled-components";

export const StyledMain = styled.main`
  overflow-y: auto;
  overflow-x: hidden;
  padding: 16px;
  @media (max-width: 1024px) {
    > div {
      width: 100%;
    }
  }
  @media (max-width: 567px) {
    padding: 24px 0;
    > div {
      width: calc(100% - 40px);
    }
  }
`;
