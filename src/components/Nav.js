import { NavLink } from 'react-router-dom'



function Nav(){




    return (
        <nav>
            <NavLink exact to="/home">
                Home
            </NavLink>

            <NavLink exact to="/login">
                Login
            </NavLink>

            <NavLink exact to="/signup">
                Signup
            </NavLink>

            <NavLink exact to="/profile">
                Profile
            </NavLink>
        </nav>
    )

}

export default Nav