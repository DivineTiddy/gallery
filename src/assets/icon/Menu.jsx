
import styled from "styled-components";

const Layout = styled.div`
@media (min-width: 800px) {
  display: none;
}
`

const Menu = () => {
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
        <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
      </svg>
    </Layout>
  );
};

export default Menu;
