import React from 'react'

const Signup = () => {
    return (
        <div className="App">
            <header className="App-header">

                <h1>Only<span className="fish">Fish</span></h1>
                <form>
                    <input type="text" placeholder="Username" className="user-name" />
                </form>
                <form>
                    <input type="text" placeholder="E-mail" className="email-input" />
                </form>
                <form>
                    <input type="text" placeholder="Password" className="password-input" />
                </form>
                <button type="button">Signup</button>
            </header>
        </div>
    )
}

export default Signup

