import { Header } from "./Header";
import { Home } from "./Home";
import { About } from './About';
import { Gallery } from "./Gallery";
import { Contacts } from "./Contacts";
import { FormerGraduates } from "./FormerGraduates";
import { Footer } from "./Footer";
import { Routes, Route } from 'react-router-dom';


export function Navbar() {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/gallery' element={<Gallery />} />
                <Route path='/contacts' element={<Contacts />} />
                <Route path='/former-graduates' element={<FormerGraduates />} />
            </Routes>
            <Footer />
        </>
    );
}