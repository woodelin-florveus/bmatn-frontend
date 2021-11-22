import { Link } from 'react-router-dom'



function Nav({ currentUser, setCurrentUser}){

    function handleLogout(){
        setCurrentUser(null)
    }


    return (

        <>
      
        <nav>
            
            {currentUser ? (
                <>
                <Link to="/trainers"> Trainers </Link>
    
                <Link to="/appointments"> Appointments </Link> 

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
                
        <img src="images/freeweightImage.jpg" alt="dummyImage" style={{width:"100%"}} />
                          
        </>

    )

}

export default Nav