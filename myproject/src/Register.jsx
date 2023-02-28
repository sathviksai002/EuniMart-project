import React, { useState } from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        
        <div className="container">
        <div class = "center" >
        <div class="screen">
        <div class="screen__content">
            
            <h2>Register</h2>
        <form className="login" onSubmit={handleSubmit}>
        <div class="login__field">
            <label htmlFor="name">Full name </label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" class="login__input" placeholder="full Name" />
            </div>
            <div class="login__field">
            <label htmlFor="email">Email </label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email"class="login__input"  placeholder="youremail@gmail.com" id="email" name="email" />
            </div>
            <div class="login__field">
            <label htmlFor="phone">Phone </label>
           <input value={phone} onChange={(e) => setPhone(e.target.value)} type="text" class="login__input" placeholder="enter number" id="phone" name="phone"/>
           </div>
           <div class="login__field">
            <label htmlFor="password">Password </label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" class="login__input" placeholder="********" id="password" name="password" />
            </div>
            <button class="button login__submit" type="submit">Log In</button>
        </form>
        <button class="button login__submit" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    </div>
    </div>
    </div>
    )
}