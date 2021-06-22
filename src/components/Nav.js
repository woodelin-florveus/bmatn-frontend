import { NavLink } from 'react-router-dom'



function Nav(){




    return (
        <nav>
            <NavLink exact to="/home">
                Home
            </NavLink>
            
            <NavLink exact to="/trainers">
                Trainers
            </NavLink>

            <NavLink exact to="/services">
                Services
            </NavLink>

            <NavLink exact to="/appointments">
                Appointments
            </NavLink>

            <NavLink exact to="/about">
                About
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

            <NavLink exact to="/">
                Logout
            </NavLink>

        </nav>
    )

}

export default Nav