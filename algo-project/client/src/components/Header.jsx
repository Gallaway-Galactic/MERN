import { Link } from 'react-router-dom';

const Header = ({ page }) => {
    return (
        <fieldset>
            <legend>Header</legend>
            <Link to="/">Catalog</Link> |
            <Link to="/create">Add Book</Link> |
            <span>{page}</span>
        </fieldset>
    );
};

export default Header;