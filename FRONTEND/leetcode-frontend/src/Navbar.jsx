import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div className="nav-wrapper">
            <nav className="navbar">
                <h3>Leetcode</h3>
                <ul className="nav-elements">
                    <li><Link to='/'>Problems</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/signup'>Signup</Link></li>
                </ul>
            </nav>

            <Outlet />
        </div>
     );
}
 
export default Navbar;