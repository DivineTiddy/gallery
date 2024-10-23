import styled, { css } from "styled-components";

const Text = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-weight: bold;
      line-height: 87px;
      font-size: 34px;
      color: var(--color-white-100);
      
    `}
    ${(props) =>
    props.as === "h2" &&
    css`
      font-weight: normal;
      line-height: 65px;
      font-size: 18px;
      color: var(--color-white-100);
    `}
  ${(props) =>
    props.as === "h6" &&
    css`
      font-weight: normal;
      line-height: 27px;
      font-size: 12px;
      color: var(--color-white-100);
    `}
    ${(props) =>
    props.as === "h3" &&
    css`
      font-weight: lighter;
      line-height: 44px;
      font-size: 12px;
      color: var(--color-white-100);
    `}
    ${(props) =>
    props.type === "user" &&
    css`
      font-weight: normal;
      line-height: 27px;
      font-size: 10px;
      text-align: center;
      color: var(--color-white-100);
    `}
  padding: 0px;
  margin: 0px;
  font-family: "Open Sans", sans-serif;

`;
export default Text;
