import styled from "styled-components";

const Layout = styled.div`
@media (min-width: 800px) {
  display: none;
}
`

const Close = () => {
  return (
  <Layout>
    <svg
            style={{cursor: 'pointer'}}

        xmlns="http://www.w3.org/2000/svg"
        height="54px"
        viewBox="0 -960 960 960"
        width="54px"
        fill="#e8eaed"
      >
        <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
      </svg>
  </Layout>
  );
};

export default Close;
