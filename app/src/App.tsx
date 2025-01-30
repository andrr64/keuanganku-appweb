import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './views/pages/Login';
import RegisterPage from './views/pages/Register';
import HomePage from './views/pages/Home';
import UserVerificationRC from './views/pages/route_controller/UserVerification';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;