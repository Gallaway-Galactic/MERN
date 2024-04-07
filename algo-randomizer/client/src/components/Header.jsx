import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to="/home">Home Page</Link> |
            <Link to="/profile">Profile</Link> |
            
        </div>
    );
};

export default Header;