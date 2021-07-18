import { Link } from 'react-router-dom'



function Nav({ currentUser, setCurrentUser}){

    function handleLogout(){
        setCurrentUser(null)
    }


    return (

        <>
      
        <nav>
            {/* <Link to="/">
                Home
            </Link> */}

            <Link to="/home">
                Home
            </Link>
            
            {currentUser ? (
                <>
                <Link to="/trainers"> Trainers </Link>

                {/* <Link to="/services"> Services </Link> */}
    
                <Link to="/appointments"> Appointments </Link>
    
                <Link to="/about"> About </Link>    

                <Link to="/profile"> Profile </Link>

                <Link to="/logout" onClick={handleLogout}>Logout </Link>
                
                </>
            ) : (

            <>

            <Link to="/login"> Login </Link>

            <Link to="/signup"> Signup </Link>

            </>
            )}
        </nav>
                
        <img src="https://dummyimage.com/1500x400/a8a7b2/ffffff.jpg" alt="dummyImage" />
               
                
            
        </>

    )

}

export default Nav