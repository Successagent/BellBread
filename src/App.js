import { Route, Routes, useLocation } from "react-router-dom";
import LandingPage from "./LandingPage";
import Movies from "./Movies";
import { useEffect } from "react";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/movies/:id" element={<Movies />} />
      </Routes>
    </>
  );
}

export default App;
