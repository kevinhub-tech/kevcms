import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
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

function App() {

  return (
    <Router>
      <AuthProvider>
      <div className="navbar bg-base-100 shadow-sm" >
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Kev CMS</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li> <Link to="/">Home</Link></li>
            <li> <Link to="/signup">Sign Up</Link></li>
            <li> <Link to="/login">login</Link></li>
            <li> <Link to="/pages">Pages</Link></li>
            <li>  <Link to="/api">Api</Link></li>
          </ul>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<RedirectIfAuthenticated><Home /></RedirectIfAuthenticated>} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/signup" element={<RedirectIfAuthenticated><SignUp /></RedirectIfAuthenticated>} />
        <Route path="/login" element={<RedirectIfAuthenticated><Login/></RedirectIfAuthenticated>}/>
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
