import ItemStyles from './styles/ItemStyles';

function Item(props) {
    return (
        <ItemStyles>
            <img src="/static/gnome.jpeg" alt="Image"/>
            <h3>Item Name</h3>
            <p>A brief description</p>
        </ItemStyles>
    );
}

export default Item;