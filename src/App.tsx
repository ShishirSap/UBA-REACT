
import './App.css'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Signup from './pages/signupPage'
import Login from './pages/loginPage';
import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';
import UserListingPage from './pages/userListingPage';
import Editprofilepage from './pages/editprofilepage';
import DashboardLayout from './layouts/Dashboard/DashboardLayout';
import Profilepage from './pages/Profilepage';
import VerifyEmail from './pages/emailVerifyPage';
import AssignRole from './pages/assignRole';
import Notfound from './pages/errorpages/404notfound';
function App() {

  return (
    <Router>
      <ToastContainer/>
      <Routes>
      

        <Route path="/signup" element={<Signup />} />
        <Route path="/notfound" element={<Notfound/>} />

        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<UserListingPage/>} />
        <Route path="/editprofile" element={<Editprofilepage/>}/>
        <Route path="/verify-email" element={<VerifyEmail/>}/>
        <Route path="/assign-role/:id" element={<AssignRole />} />
        
        <Route path='/dashboard' element={<DashboardLayout/>}>
          {/* <Route index element={<Dashboard/>}/> */}

         <Route path='signup' element={<Signup/>}/>
         <Route path='users' element={<UserListingPage/>}/>
         <Route path='editprofile/:id' element={<Profilepage/>}/>


        </Route>
        

      </Routes>
    </Router>
  )
}

export default App
