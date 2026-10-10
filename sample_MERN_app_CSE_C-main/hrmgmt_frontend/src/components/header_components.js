
import './header_component.css';
import{link} from 'react-router-dom'

function Header_components() {
    return (
        <div>
            <link to="/">Home</link>
            <link to="/contact">Contacts</link>
            <link to="/about">About Us</link>
        </div>
    );
}

export default Header_components;

