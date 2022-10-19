import { NavLink } from "react-router-dom";


function Header({ setIsAuthenticated, setUser, user}) {

    // const navigate = useNavigate();

    const logout = () => {
        fetch('http://localhost:3000/logout',{
            method:'DELETE'
        })
        .then(()=>{
            setIsAuthenticated(false)
            setUser(null)
        })
    }

    return (
        <div>
            <nav >
                <ul className="flex items-center justify-between bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                    <li className="bg-blue-300 w-28 m-5 rounded-lg text-center">
                        <NavLink to="/">Home</NavLink>
                    </li>
                    {user ?
                    <li onClick={logout} className="bg-purple-300 w-28 m-5 rounded-lg text-center cursor-pointer">
                        Logout
                    </li>
                    :
                    <li className="bg-purple-300 w-28 m-5 rounded-lg text-center">

                    <NavLink to="/login" >Login</NavLink>

                    </li>
                    }
                    
                    <li className="bg-yellow-300 w-28 m-5 rounded-lg text-center ">
                        <NavLink to="/signup">Sign up</NavLink>
                    </li>
                    
                </ul>
            </nav>
        </div>

    );
}

export default Header;
