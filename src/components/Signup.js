import { useState } from "react"

import { useHistory } from "react-router-dom"

function Signup({ setCurrentUser }){

    const [formData, setFormData] = useState({name: "", email: "", profile_image: "", password: ""})

    // keep track of errors 

    const [errors, setErrors] = useState([])

    const history = useHistory()

    function handleChange(event){
        setFormData({...formData, 
        [event.target.name]: event.target.value
    })
    }

    function handleSubmit(event){
        event.preventDefault();

        fetch("http://localhost:3000/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(user => {
            // save the user in state if successful
                // or show errors if not successful
                if(user.errors){
                    setErrors(user.errors)
                } else {
                    setCurrentUser(user)
                    history.push("/")
                }
        })


    }

    const {name, email, profile_image, password} = formData

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
                value={password}
                onChange={handleChange}
            />

            <input type="submit" value="signup" />

           {errors.map(error => <p key={error} style={{color:"red"}}>{error}</p>)} 

        </form>
    )

}

export default Signup;