import React, { useState } from "react"

function Profile({ currentUser }){

    // left as name for now add bio to migrations, seed, and serializers

    const [formData, setFormData] = useState({ 
        image: currentUser.profile_image, 
        bio: currentUser.name
    })



    function handleChange(event){
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    function handleSubmit(event){
        event.preventDefault();

        //request => PATCH/myself => {image / bio}
        // response => update user in state

        //console.log(formData)
    }

    const {image, bio} = formData

    console.log(image)

    return (
        <form onSubmit={handleSubmit} autoComplete='off'>

            <h1> Username Profile </h1>

            

            <img src ={image && image.length ? image : "https://cdn.iconscout.com/icon/free/png-512/account-profile-avatar-man-circle-round-user-30452.png"} 
            
            alt="username_image" />
            
            <label>Profile Image</label>
            <input type= "text" name="image" value={image} onChange={handleChange} />
                    <label>{bio}</label>
      
                <textarea type="text" name="bio" value={bio} onChange={handleChange}/>

            <input type='submit' value='update' />

        </form>
    )

}

export default Profile;