import React from "react";
import styled from "styled-components";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/dracula";

export default ({ children, className }) => {
  const matches = className.match(/language-(?<lang>.*)/);
  return (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={children.trim()}
      language={
        matches && matches.groups && matches.groups.lang
          ? matches.groups.lang
          : ""
      }
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <StyledPre
          className={className || ""}
          style={{ ...style, padding: "20px" }}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </StyledPre>
      )}
    </Highlight>
  );
};

const StyledPre = styled.pre`
  border-radius: 8px;
  margin-bottom: 24px;
  overflow-x: auto;
  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 0.1);
  }
  div,
  span {
    font-family: "Fira Code", monospace;
  }
`;
