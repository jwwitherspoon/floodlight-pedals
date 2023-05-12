import './App.css';
import About from './About/About';
import Header from './Header/Header';
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <div>
            <Header />
            <main>
                <Routes>
                    <Route path='/' element={<About />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
