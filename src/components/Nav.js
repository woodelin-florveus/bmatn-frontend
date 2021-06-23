import { Link } from 'react-router-dom'



function Nav({ currentUser}){




    return (
        <nav>
            <Link to="/">
                Home
            </Link>
            
            {currentUser ? (
                <>
                <Link to="/trainers"> Trainers </Link>

                <Link to="/services"> Services </Link>
    
                <Link to="/appointments"> Appointments </Link>
    
                <Link to="/about"> About </Link>    

                <Link to="/profile"> Profile </Link>

                <Link to="/logout">Logout </Link>
                </>
            ) : (

            <>

            <Link to="/login"> Login </Link>

            <Link to="/signup"> Signup </Link>

            </>
            )}
        </nav>
    )

}

export default Nav