import { Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import Movies from "./Movies";

function App() {
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
