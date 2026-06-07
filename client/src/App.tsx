import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.tsx";
import Demo from "./components/Demo.tsx";
import Home from "./components/Home.tsx";
import About from "./components/About.tsx";
import Projects from "./components/Projects.tsx";
import Footer from "./components/Footer.tsx";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <main className="pt-20">
                <Routes>
                    <Route path="/demo" element={<Demo />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                </Routes>
                <Footer />
            </main>
        </BrowserRouter>
    );
}

export default App;