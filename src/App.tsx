
import './App.css'
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Signup from './pages/signupPage'
import Login from './pages/loginPage';
import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';
import UserListingPage from './pages/userListingPage';
import Editprofilepage from './pages/editprofilepage';

function App() {

  return (
    <Router>
      <ToastContainer/>
      <Routes>
      
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<UserListingPage/>} />
        <Route path="/editprofile" element={<Editprofilepage/>}/>
        

      </Routes>
    </Router>
  )
}

export default App
