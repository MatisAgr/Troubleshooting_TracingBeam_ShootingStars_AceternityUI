import { Routes, Route, useLocation } from "react-router-dom";

import SpaceLayout from "./components/Space/Layout";
import Navbar from "./components/Navbar/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";

export default function App() {

  // useLocation hook to get the current path
  const location = useLocation();

  // if page is about, do not show stars (to use tracing beam)
  const isAboutPage = location.pathname === '/about';

  return (

    // applying SpaceLayout with passing showStars prop
    // NOTE: To force shooting stars on /about, change to showStars={true}
    <SpaceLayout showStars={!isAboutPage}>

      <Navbar />

      <div className="flex flex-col flex-grow">

        <main className="flex-grow">
          <Routes>

            <Route path="/" element={<Home />} />

            <Route path="/about" element={<About />} />

          </Routes>
        </main>
      </div>

    </SpaceLayout>
  );
}