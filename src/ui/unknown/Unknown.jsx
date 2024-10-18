import styled from "styled-components";

const Layout = styled.div`
  width: 80%;
  background-color: var(--color-brand-30);
  backdrop-filter: blur(10px); /* Blur to create frosted glass effect */
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  @media (min-width: 800px) {
    width: 55%;
  }
`;
const Unknown = () => {
  return <Layout>hello</Layout>;
};

export default Unknown;
