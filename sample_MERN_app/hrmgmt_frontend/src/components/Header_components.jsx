
import './header_component.css';
import{Link} from 'react-router-dom'

function Header_components() {
    return (
        <div>
           <div className="header">
            <Link to="/">Home</Link>
            <Link to="/contact">Contacts</Link>
            <Link to="/about">About Us</Link><s></s>
            <Link to="/login">login</Link></div>
            <Link to="/register">register</Link>
            <Link to="/userhome">userhome</Link>
        </div>
    );
}

export default Header_components;

