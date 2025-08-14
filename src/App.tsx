import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Diagnosis from './pages/Diagnosis';
import Results from './pages/Results';
import Doctors from './pages/Doctors';
import Medicine from './pages/Medicine';
import HealthHistory from './pages/HealthHistory';

function App() {
  const [diagnosisResult, setDiagnosisResult] = useState(null);
  useEffect(() => {
    axios.post('http://localhost:5000/train-models').catch(() => {});
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route 
            path="/diagnosis" 
            element={<Diagnosis setDiagnosisResult={setDiagnosisResult} />} 
          />
          <Route 
            path="/results" 
            element={<Results diagnosisResult={diagnosisResult} />} 
          />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/medicine" element={<Medicine />} />
          <Route path="/health-history" element={<HealthHistory />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;