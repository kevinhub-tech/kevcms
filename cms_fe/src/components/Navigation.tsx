import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

function Navigation() {
    const { user, loading, logout } = useAuth();
    const navigate = useNavigate();
    const handleLogout = async () => {
        await logout();
        navigate("/login");
    }

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost text-xl">Kev CMS</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    {!loading && user ? (
                        <>
                            <li><Link to="/pages">Pages</Link></li>
                            <li><Link to="/api">Api</Link></li>
                            <li><button onClick={handleLogout}> Log Out</button></li>
                        </>
                    ) : (
                        <>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/signup">Sign Up</Link></li>
                            <li><Link to="/login">Login</Link></li>
                        </>
                    )}
                </ul>
            </div>
        </div>
    );
}


export default Navigation;