import styled from "styled-components";
import Text from "../Text";

const Layout = styled.div`
  width: 100%;
  background-color: var(--color-brand-30);
  backdrop-filter: blur(10px); /* Blur to create frosted glass effect */
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  height: 750px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 800px) {
    width: 55%;
  }
`;
const Unknown = () => {
  return <Layout>
    <Text type="user">🚧 Currently under development</Text>
  </Layout>;
};

export default Unknown;
