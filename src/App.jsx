import { Header } from "./Helpers/Header";
import { Footer } from "./Helpers/Footer";
import { Home } from "./HomePage/Home";
import { About } from './AboutPage/About';
import { Gallery } from "./GalleryPage/Gallery";
import { CandidateStudents } from "./CandidateStudentsPage/CandidateStudents";
import { FormerGraduates } from "./FormerGraduatesPage/FormerGraduates";
import { Preloader } from "./Helpers/Prelaoder";
import { Routes, Route } from 'react-router-dom';


export default function App() {
    return (
        <>
            <Preloader />
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/gallery' element={<Gallery />} />
                <Route path='/candidate-students' element={<CandidateStudents />} />
                <Route path='/former-graduates' element={<FormerGraduates />} />
            </Routes>
            <Footer />
        </>
    );
}

