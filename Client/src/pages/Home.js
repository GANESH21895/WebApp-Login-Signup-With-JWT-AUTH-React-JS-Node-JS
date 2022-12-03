import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import NavbarTop from '../components/NavbarTop'
const jwt = require('jsonwebtoken')

function Home() {
  const navigate = useNavigate()
  useEffect(() => {
    const token = localStorage.getItem('token')
    if(token) {
      const user = jwt.decode(token)
      console.log(token)
      // console.log(user)
      if(!user){
        localStorage.removeItem('token')
        navigate('/login')
      } else {
        navigate('/home')
      }
    } else {
      navigate('/login')
    }
  })
  return (
    <div>
      <NavbarTop/>
      <h1 style={{textAlign:'center',marginTop:'200px'}}>Home Page</h1>
    </div>
  )
}

export default Home
