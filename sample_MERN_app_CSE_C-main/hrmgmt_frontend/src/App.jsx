
import Header_components from './components/header_components';
import Fotter_components from './components/Fotter_components';
 import home from './pages/home'
 import about from './pages/about'
 import contact from './pages/contact'
import { Routes, Route } from 'react-router-dom';
function App() {
    return (
        <div>
            <Header_components></Header_components>

            <Route path="/" element={<Home></Home>}>

            </Route>
            <Route path="/about" element={<about></about>}></Route>

            <route path="/contact" element={<contact></contact>}></route>

            <Fotter_components ></Fotter_components>
        </div>
    );
}

export default App;
