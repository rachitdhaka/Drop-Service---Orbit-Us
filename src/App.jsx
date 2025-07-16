import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import LandingPage from './pages/LandingPage';
import Undermaintenance from './pages/Undermaintenance';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Undermaintenance />} />
            <Route path="/landing" element={<LandingPage />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App;