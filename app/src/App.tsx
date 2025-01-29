import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './views/pages/Login';
import RegisterPage from './views/pages/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
