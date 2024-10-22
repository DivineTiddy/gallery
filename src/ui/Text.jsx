import styled, { css } from "styled-components";

const Text = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-weight: bold;
      line-height: 87px;
      font-size: 64px;
      color: var(--color-white-100);
      
    `}
    ${(props) =>
    props.as === "h2" &&
    css`
      font-weight: normal;
      line-height: 65px;
      font-size: 48px;
      color: var(--color-white-100);
    `}
  ${(props) =>
    props.as === "h6" &&
    css`
      font-weight: normal;
      line-height: 27px;
      font-size: 20px;
      color: var(--color-white-100);
    `}
    ${(props) =>
    props.as === "h3" &&
    css`
      font-weight: lighter;
      line-height: 44px;
      font-size: 32px;
      color: var(--color-white-100);
    `}
    ${(props) =>
    props.type === "user" &&
    css`
      font-weight: normal;
      line-height: 27px;
      font-size: 15px;
      text-align: center;
      color: var(--color-white-100);
    `}
  padding: 0px;
  margin: 0px;
  font-family: "Open Sans", sans-serif;

`;
export default Text;
