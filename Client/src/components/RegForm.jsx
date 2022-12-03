import React , {useState} from 'react'
import '../components/RegForm.scss'
import {useNavigate} from 'react-router-dom'
function RegForm() {
    const navigate = useNavigate()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function registerUser(event) {
        event.preventDefault()
        const response = await fetch('http://localhost:1500/api/register' , {
            method : "POST",
            headers : {
                'Content-Type' : 'application/json',
            },
            body : JSON.stringify({
                name,
                email,
                password
            }),
        })
        const data = await response.json()
        console.log(data)
        if(data.user === "registered"){
            navigate('/login')
        }
    }

  return (
    <div>
        <form onSubmit={registerUser}>
            <div className="segment">
                <h1>Register</h1>
            </div>
            <label>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Name"/>
            </label>
            <label>
                <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email Address"/>
            </label>
            <label>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password"/>
            </label>
            <button className="red" type="submit"><i className="icon ion-md-lock"></i>Sign Up</button>
        </form>
    </div>
  )
}

export default RegForm
