import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Mods from './components/Mods/Mods';
import Pedals from './components/Pedals/Pedals';
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
