import React, { useState } from "react";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="container">
            <div class = "center" >
            <div class="screen">
            <div class="screen__content">	
            <h2>Login</h2>
            <form className="login" onSubmit={handleSubmit}>
            <div class="login__field">
                <label htmlFor="email">email    </label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" class="login__input" placeholder="youremail@gmail.com" id="email" name="email" />
                </div>
                <div class="login__field">
                <label htmlFor="password">password  </label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" class="login__input" placeholder="********" id="password" name="password" />
                </div>
                <button class="button login__submit" type="submit">Log In</button>
            </form>
            <button class="button login__submit" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
        </div>
        </div>
        </div>
    )
}