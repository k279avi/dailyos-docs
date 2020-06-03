import styled, { css } from "styled-components";

export const StyledLayout = styled.div(css`
  display: grid;
  height: 100vh;
  grid-template-rows: 56px 1fr;
  grid-template-columns: 280px 1fr;
  grid-template-areas: "header header" "sidebar main";
  position: relative;
  > header {
    grid-area: header;
  }
  > aside {
    grid-area: sidebar;
  }
  > main {
    grid-area: main;
  }
  @media (max-width: 567px) {
    grid-template-columns: 1fr;
    grid-template-areas: "header" "main";
  }
`);
