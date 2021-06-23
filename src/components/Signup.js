

function Signup(){


    return(
        <form autoComplete='off'>
            <h1>Signup </h1>

            <label> Username</label>

            <input
                type='text'
                name='username'
            />

            <label> Profile Image </label>
                <img src="https://cdn.iconscout.com/icon/free/png-512/account-profile-avatar-man-circle-round-user-30452.png" alt= "profile_image" />
            {/* add image  */}

            <label> Bio</label>
            <textarea name="bio" />
            
            <label>Password</label>

            <input
                type="password"
                name="password"
                autoComplete='current-password'
            />

            <input type="submit" value="signup" />

            {/* handle errors */}
        
        </form>
    )

}

export default Signup;