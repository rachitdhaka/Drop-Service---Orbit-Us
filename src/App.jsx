import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Undermaintenance from './pages/Undermaintenance';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Undermaintenance />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;