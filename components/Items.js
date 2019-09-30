import styled from 'styled-components';
import Item from './Item';

const Center = styled.div`
    text-align: center;
`;

const ItemsList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 60px;
    max-width: ${props => props.theme.maxWidth};
    margin: 0 auto;
`;

function Items() {
    return (
        <Center>
            <ItemsList>
                <Item/>
                <Item/>
                <Item/>
            </ItemsList>
        </Center>
    );
}

export default Items;