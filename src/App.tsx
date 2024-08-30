import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Signup from "./pages/signupPage";
import Login from "./pages/loginPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserListingPage from "./pages/userListingPage";
import Editprofilepage from "./pages/editprofilepage";
import DashboardLayout from "./layouts/Dashboard/DashboardLayout";
import Profilepage from "./pages/Profilepage";
import VerifyEmail from "./pages/emailVerifyPage";
import AssignRole from "./pages/assignRole";
import Notfound from "./pages/errorpages/404notfound";
import ProtectedRoute from "./components/ProtectedRoute";
function App() {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/notfound" element={<Notfound />} />

        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <UserListingPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/editprofile"
          element={
            <ProtectedRoute>
              <Editprofilepage />
            </ProtectedRoute>
          }
        />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route
          path="/assign-role/:id"
          element={
            <ProtectedRoute>
              <AssignRole />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          {/* <Route index element={<Dashboard/>}/> */}

          <Route path="signup" element={<Signup />} />
          <Route path="users" element={<UserListingPage />} />
          <Route path="editprofile/:id" element={<Profilepage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
