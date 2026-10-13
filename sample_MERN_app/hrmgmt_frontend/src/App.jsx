

import Header_components from './components/Header_components';
import Fotter_components from './components/Fotter_components';
import Home from './pages/home';
import About_page from './pages/About_page';
import Contact_page from './pages/Contact_page';

import { Routes, Route } from 'react-router-dom';
function App() {
    return (
        <div>
            <Header_components></Header_components>
<Routes>
            <Route path="/" element={<Home></Home>}>

            </Route>
            <Route path="/about" element={<About_page></About_page>}></Route>

            <Route path="/contact" element={<Contact_page></Contact_page>}></Route>
 </Routes>
            <Fotter_components ></Fotter_components>
        </div>
    );
}

export default App;
