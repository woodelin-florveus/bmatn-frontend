import React, { useState } from "react"

import { useHistory } from "react-router-dom"


function Login({ setCurrentUser }){

        const [formData, setFormData] = useState({email:"", password:""})

        const history = useHistory();

        function handleChange(event){
            setFormData({...formData, [event.target.name]: event.target.value })
        }

        function handleSubmit(event){
            event.preventDefault()

            // TODO: Login the user

            //request => POST/Login

            // Reset the user in state

            fetch("http://localhost:3000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }, 
                body: JSON.stringify(formData),
            })
            .then(response => response.json())
            .then(user => {
                setCurrentUser(user)
                //Redirect
                history.push("/")
            })
        }

    return (
        <div>

            <form onSubmit={handleSubmit} autoComplete="off">
                <h1> Login </h1>

                <label> Email</label>

                <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />

                <label> Password</label>
                
                <input 
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                
                <input type="submit" value="Login"/>

            </form>

        </div>
    )

}

export default Login