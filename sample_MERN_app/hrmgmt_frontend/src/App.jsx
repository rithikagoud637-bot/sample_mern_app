
import Header_components from './components/Header_components';
import Fotter_components from './components/Fotter_components';
import Home from './pages/home';
import Login from './pages/Login';
import Userhome from './userhome';
import adminHome from './pages/adminhome';
import HrHome from './pages/HrHome';
import empHome from './pages/empHome';
import register from './pages/register';

import About_page from './pages/About_page';
import Contact_page from './pages/Contact_page';

import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div>
            <Header_components></Header_components>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/userhome" element={<Userhome></Userhome>}></Route>
                <Route path="/about" element={<About_page></About_page>}></Route>
                <Route path="/register" element={<register></register>}></Route>
                <Route path="/contact" element={<Contact_page></Contact_page>}></Route>
                <Route path="/empHome"element={<empHome></empHome>}></Route>
                <Route path="/HrHome" element={<HrHome></HrHome>}></Route>
                <Route path="/adminHome" element={<adminHome></adminHome>}></Route>
            </Routes>
            <Fotter_components></Fotter_components>
        </div>
    );
}

export default App;
