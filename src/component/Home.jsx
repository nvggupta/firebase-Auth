import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
    <Link to={'/Signup'}>SignUP</Link>
    <Link to={'/Login'}>Login</Link>
    </div>
  )
}

export default Home