
import './App.css'
import Signup from './pages/signupPage'
import LoginPage from './pages/loginPage';
import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<LoginPage/>} />
      </Routes>
    </Router>
  )
}

export default App
