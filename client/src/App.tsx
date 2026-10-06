import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.tsx";
import Home from "./components/Home.tsx";
import About from "./components/About.tsx";
import Projects from "./components/Projects.tsx";
import ProjectPage from "./components/ProjectPage.tsx";
import Footer from "./components/Footer.tsx";
import NotFound from "./components/NotFound.tsx";

function App() {
    return (
    <main>
        <Header />
        <div className="pt-20">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:name" element={<ProjectPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </div>
    </main>
    );
}

export default App;
