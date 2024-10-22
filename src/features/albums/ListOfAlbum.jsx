import propTypes from "prop-types";
import styled from "styled-components";
import Text from "../../ui/Text";

const List = styled.li`
width: auto;
height: auto;
display: flex;
flex-direction: column;
align-items: center;
gap: 10px;
.text{
    padding: 0px;
    margin: 0px;
}
`

const ListOfAlbum = ({ item }) => {
  const image = item.src.original
  const discription = item.alt

  return (
    <List>
      <img
        src={image}
        alt={item.alt}
        style={{ width: "259px", height: "206px" , borderRadius: "20px"}}
      />
      <Text type="user">
      {discription}
      </Text>
    </List>
  );
};
ListOfAlbum.propTypes = {
  item: propTypes.object,
};

export default ListOfAlbum;
