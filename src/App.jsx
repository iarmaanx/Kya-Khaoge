import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ContentPage from "./pages/ContentPage";
import HistoryPage from "./pages/HistoryPage"; // Import the HistoryPage

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/game" element={<ContentPage />} />
        <Route path="/history" element={<HistoryPage />} /> {/* Add this route */}
      </Routes>
    </Router>
  );
}

export default App;
