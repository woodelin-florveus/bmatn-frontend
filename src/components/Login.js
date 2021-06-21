

function Login(){

    return (
        <div>

            <form>
                <h1> Login </h1>

                <label> Email</label>

                <input
                    type="text"
                    name="email"
                />

                <label> Password</label>
                
                <input 
                    type="password"
                    name="password"
                />
                
                <input type="submit" value="login" />

            </form>

        </div>
    )

}

export default Login