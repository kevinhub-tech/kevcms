import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Pages from './pages/Pages'
import Auth from './pages/Auth'
import Api from './pages/Api'
import EditPage from './pages/EditPage'
import ForgetPassword from './pages/ForgetPassword'
import ResetPassword from './pages/ResetPassword'
import './App.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Pages />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/api" element={<Api />} />
        <Route path="/edit-pages" element={<EditPage />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
      <nav>
        <Link to="/">Pages</Link>
        <Link to="/auth">Auth</Link>
        <Link to="/api">Api</Link>
        <Link to="/edit-pages">Edit Pages</Link>
        <Link to="/forget-password">Forget Password</Link>
        <Link to="/reset-password">Reset Password</Link>
      </nav>
      <div className="ticks"></div>
      <section id="spacer"></section>
    </Router>
  )
}

export default App
