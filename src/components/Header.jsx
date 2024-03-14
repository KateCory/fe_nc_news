import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header id="header">
            <h1>NorthCoders News</h1>
            <nav id="nav">
                <Link to='/'>Home</Link>
                <Link to='/articles'>ArticlesList</Link>
            </nav>
        </header>
    );
};

export default Header;