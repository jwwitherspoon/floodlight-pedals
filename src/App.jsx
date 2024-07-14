import './App.css';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Mods from './components/Mods/Mods';
import Pedals from './components/Pedals/Pedals';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Shoutouts from './components/Shoutouts/Shoutouts';
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <div className='app'>
            <Header />
            <main>
                <Routes>
                    <Route path='/' element={<About />} />
                    <Route path='/pedals' element={<Pedals />} />
                    <Route exact path='/mods' element={<Mods />} />
                    <Route path='/mods/:productKey' element={<ProductDetail />} />
                    <Route path='shoutouts' element={<Shoutouts />} />
                </Routes>
            </main>
            {/* <Footer /> */}
        </div>
    );
}

export default App;
