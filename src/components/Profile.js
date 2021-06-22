

function Profile(){

    return (
        <form autoComplete='off'>

            <h1> Username Profile </h1>

            <label>Profile Image</label>

            <img src = "https://cdn.iconscout.com/icon/free/png-512/account-profile-avatar-man-circle-round-user-30452.png" alt="username" />

                    <label>Bio</label>
      
                <textarea name="bio"/>

            <input type='submit' value-='update' />

        </form>
    )

}

export default Profile;