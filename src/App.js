import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Leaderboard from "./pages/Leaderboard";
import Resources from "./pages/Resources";
import Roadmap from "./pages/Roadmap";
import Gambler from "./pages/challenges/Gambler";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="flex min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative transition-colors duration-300">
          <Sidebar />
          <div className="flex-1 flex flex-col relative">
            <Navbar />
            <main className="flex-1 p-6 pt-24"> {/* pt-24 for navbar space */}
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/roadmap" element={<Roadmap />} />
                <Route path="/challenges/gambler" element={<Gambler />} />
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
