import React, { useState } from 'react'
import logo from '../static/lendsqr-logo.png'
import signInImage from '../static/pablo-sign-in.png'
import '../styling/login.styles.scss'
import Button from '../components/button/btn'
import Input from '../components/input/Input'

interface formfield {
    email: string,
    password: string
}

function LoginPage() {
    const defaualtFormfields: formfield = {
        email: '',
        password: ''
    }
    const [formfield, setFormfield] = useState(defaualtFormfields)
    const [error, setError] = useState(null)
    const {email, password} = formfield
  return (
    <section className='login-wrapper'>
        <div className="background-logo">
            <div className="logo-wrapper">
                <img src={logo} alt='lendqsr-logo' />
            </div>
            <div className="background-img-wrapper">
            <img src={signInImage} alt='sign-in background' />
            </div>
        </div>
        <div className='login-wrapper'>
            <div className="login-details">
                <h2 className="login-banner">Welcome!</h2>
                <h4 className="subtitle">Enter details to login.</h4>
                <form>
                    <Input
                    value={email}
                    onChange={(e) => setFormfield({...formfield, email: e.target.value})}
                    type="email"
                    placeholder="Email address"
                    />
                    <Input
                    value={password}
                    onChange={(e) => setFormfield({...formfield, password: e.target.value})}
                    type="password"
                    placeholder="password"
                    showVisibilityToggle={true}
                    />
                    <p className='forgot-password'>forgot password</p>
                    <Button >LOG IN</Button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default LoginPage