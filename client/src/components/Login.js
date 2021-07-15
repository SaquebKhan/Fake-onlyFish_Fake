import React from 'react'

const Login = () => {
    return (
        <div className="App">
            <header className="App-header">

                <h1>Only<span className="fish">Fish</span></h1>
                <form>
                    <input type="text" placeholder="E-mail" className="email-input" />
                </form>
                <form>
                    <input type="text" placeholder="Password" className="password-input" />
                </form>
                <button type="button">LOGIN</button>
                <p>Dont have an account yet?</p>
                <a href="#" className="sign-up">Sign up for OnlyFish.com</a>
            </header>
        </div>
    )
}

export default Login;
