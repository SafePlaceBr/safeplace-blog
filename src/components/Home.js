import React from 'react'
import './Home.css'

const Home = () => (
  <div className="home">
    <div
      className="logo"
      style={{
        backgroundImage: `url(/images/logo.png)`
      }}
    />
    <h1 className="home-title">Em Breve</h1>
    <p className="home-subtitle">
      Uma plataforma construída por mulheres e para mulheres
    </p>
  </div>
)

export default Home
