import React , {useState} from 'react'
import '../components/LoginForm.scss'
import {useNavigate} from 'react-router-dom'

function RegForm() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function loginUser(event) {
        event.preventDefault()
        const response = await fetch('http://localhost:1500/api/login' , {
            method : "POST",
            headers : {
                'Content-Type' : 'application/json',
            },
            body : JSON.stringify({
                email,
                password
            }),
        })
        const data = await response.json()
        // console.log(`${data + 'hi'}`)
        if(data.user){
            localStorage.setItem('token',data.user)
            alert('login successful')
            navigate('/home')
        }else {
            alert('check username and password')
        }
    }

  return (
    <div>
        <form onSubmit={loginUser}>
            <div className="segment">
                <h1>Login</h1>
            </div>
            <label>
                <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email Address"/>
            </label>
            <label>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password"/>
            </label>
            <button className="red" type="submit"><i className="icon ion-md-lock"></i>Login</button>
        </form>
    </div>
  )
}

export default RegForm
