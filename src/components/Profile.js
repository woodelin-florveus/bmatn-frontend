import React, { useState } from "react"

function Profile({ currentUser, setCurrentUser }){

    // left as name for now add bio to migrations, seed, and serializers

    const [formData, setFormData] = useState({ 
        profile_image: currentUser.profile_image, 
        name: currentUser.name
    })

    console.log(currentUser)

    function handleChange(event){
        setFormData({...formData, [event.target.name]: event.target.value})
        
    }

    function handleSubmit(event){
        event.preventDefault();

        //request => PATCH/myself => {image / bio}
        // response => update user in state
        
        fetch("http://localhost:3000/myself", {
            method: "PATCH", 
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(user => {
            setCurrentUser(user)
        })
        
    }

    const {profile_image, name} = formData



    return (
        <form onSubmit={handleSubmit} autoComplete='off'>

            <h1> {currentUser.email} </h1>

            <img src ={profile_image && profile_image.length ? profile_image : "https://cdn.iconscout.com/icon/free/png-512/account-profile-avatar-man-circle-round-user-30452.png"} 
            
            alt="username_image" />
            
            <label>Profile Image</label>
            <input type= "text" name="profile_image" value={profile_image} onChange={handleChange} />
                    
                    <label>profile name: {name}</label>
      
                <input type="text" name="name"  onChange={handleChange}/>

            <input type='submit' value='update'/>

        </form>    
    )

}

export default Profile;