import NavStyles from './styles/NavStyles';
import Link from 'next/link';

function Nav(props) {
    return (
        <NavStyles>
            <Link href="/signup">
                <a>Sign Up</a>
            </Link>
        </NavStyles>
    );
}

export default Nav;