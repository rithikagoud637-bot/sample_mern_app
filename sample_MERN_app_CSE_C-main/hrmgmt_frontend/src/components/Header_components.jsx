
import './header_component.css';
import{Link} from 'react-router-dom'

function Header_components() {
    return (
        <div>
           
            <Link to="/">Home</Link>
            <Link to="/contact">Contacts</Link>
            <Link to="/about">About Us</Link><s></s>
        </div>
    );
}

export default Header_components;

