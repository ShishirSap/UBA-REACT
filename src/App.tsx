
import './App.css'
import Signup from './pages/signupPage'
import LoginPage from './pages/loginPage';
import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';
import UserListingPage from './pages/userListingPage';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/userlisting" element={<UserListingPage/>} />

      </Routes>
    </Router>
  )
}

export default App
