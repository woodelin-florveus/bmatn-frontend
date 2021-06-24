import { useState } from "react"

function Signup(){

    const [formData, setFormData] = useState({name: "", email: "", profile_image: ""})

    function handleChange(event){
        setFormData({...formData, 
        [event.target.name]: event.target.value
    })
    }

    function handleSubmit(event){
        event.preventDefault();
    }

    const {name, email, profile_image} = formData

    return(
        <form onSubmit={handleSubmit} autoComplete='off'>
            <h1>Signup </h1>

            <label> Email</label>

            <input
                type='text'
                name='email'
                value={email}
                onChange={handleChange}
            />

            <label> Name</label>

            <input
                type='text'
                name='name'
                value={name}
                onChange={handleChange}
            />

                <img src="https://cdn.iconscout.com/icon/free/png-512/account-profile-avatar-man-circle-round-user-30452.png" alt= "profile_image" />
            {/* add image  */}
            <label> Profile Image </label>

            <input type="text" 
            name="profile_image" 
            value={profile_image}
            onChange={handleChange} 
            />

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