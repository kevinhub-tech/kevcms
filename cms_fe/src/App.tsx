import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Pages from './pages/Pages'
import SignUp from './pages/Signup'
import Login from "./pages/Login"
import Api from './pages/Api'
import EditPage from './pages/EditPage'
import ForgetPassword from './pages/ForgetPassword'
import ResetPassword from './pages/ResetPassword'
import './App.css'
import { AuthProvider } from './hooks/useAuth'
import { RedirectIfAuthenticated } from './components/RedirectIfAuthenticated'
import Navigation from './components/Navigation'
function App() {

  return (
    <Router>
      <AuthProvider>
        <Navigation />
        <Routes>
          <Route path="/" element={<RedirectIfAuthenticated><Home /></RedirectIfAuthenticated>} />
          {/* Redirects /home to / */}
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/signup" element={<RedirectIfAuthenticated><SignUp /></RedirectIfAuthenticated>} />
          <Route path="/login" element={<RedirectIfAuthenticated><Login /></RedirectIfAuthenticated>} />
          <Route path="/api" element={<Api />} />
          <Route path="/edit-pages" element={<EditPage />} />
          <Route path="/forget-password" element={<RedirectIfAuthenticated><ForgetPassword /></RedirectIfAuthenticated>} />
          <Route path="/reset-password" element={<RedirectIfAuthenticated><ResetPassword /></RedirectIfAuthenticated>} />
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default App;
