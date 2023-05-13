import './App.css';
import About from './About/About';
import Header from './Header/Header';
import Mods from './Mods/Mods';
import Pedals from './Pedals/Pedals';
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <div>
            <Header />
            <main>
                <Routes>
                    <Route path='/' element={<About />} />
                    <Route path='/pedals' element={<Pedals />} />
                    <Route path='/mods' element={<Mods />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
