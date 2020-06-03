import styled, { css } from "styled-components";

export const Wrapper = styled.div(css`
  width: 720px;
  margin: 0 auto;
`);

export const H1 = styled.h1(css`
  font-size: 32px;
  font-weight: 500;
  line-height: 48px;
  margin-bottom: 24px;
  padding-bottom: 8px;
  border-bottom: 1px solid #e8e8e8;
`);

export const H2 = styled.h2(css`
  font-size: 24px;
  font-weight: 500;
  line-height: 36px;
  margin-bottom: 16px;
`);

export const H3 = styled.h3(css`
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  margin-bottom: 12px;
`);

export const Para = styled.p(css`
  color: #5a6270;
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
  margin-bottom: 16px;
`);

export const Image = styled.img(css`
  width: 100%;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.05);
`);

export const List = styled.ul(css`
  padding-left: 24px;
  margin-bottom: 24px;
`);

export const ListItem = styled.li(css`
  color: #5a6270;
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
`);

export const BlockQuote = styled.span(css`
  color: #5a6270;
  display: block;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 24px;
  padding: 16px 0 16px 16px;
  border-left: 2px solid #e8e8e8;
`);

export const Table = styled.table(css`
  width: 100%;
  margin-bottom: 24px;
  border-collapse: collapse;
  border-top: 1px solid #e8e8e8;
  border-left: 1px solid #e8e8e8;
`);

export const Tbody = styled.tbody(css`
  border-right: 1px solid #e8e8e8;
  tr:nth-child(even) {
    background: #fbfbfb;
  }
`);

export const Th = styled.th(css`
  height: 32px;
  color: #67788a;
  font-size: 14px;
  text-align: left;
  font-weight: 500;
  padding-left: 12px;
  text-transform: uppercase;
  border-right: 1px solid #e8e8e8;
  border-bottom: 1px solid #e8e8e8;
`);

export const Td = styled.td(css`
  height: 40px;
  padding-left: 12px;
  border-bottom: 1px solid #e8e8e8;
  border-right: 1px solid #e8e8e8;
`);

export const Pagination = styled.div(css`
  display: grid;
  grid-gap: 24px;
  grid-auto-rows: 120px;
  grid-template-columns: 1fr 1fr;
  > div {
    padding: 16px;
    cursor: pointer;
    border-radius: 6px;
    border: 1px solid #e8e8e8;
    :hover {
      border: 1px solid #67ab82;
    }
    span {
      color: #a7a7a7;
      font-size: 14px;
      font-weight: 600;
      text-transform: uppercase;
    }
    h3 {
      font-size: 24px;
      font-weight: 400;
      margin-top: 12px;
    }
  }
  @media (max-width: 567px) {
    grid-template-columns: 1fr;
  }
`);

export const Next = styled.div(css`
  text-align: right;
`);
