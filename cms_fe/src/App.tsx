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

function App() {

  return (
    <Router>
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
        <Route path="/" element={<Home />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/api" element={<Api />} />
        <Route path="/edit-pages" element={<EditPage />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </Router>
  )
}

export default App;
