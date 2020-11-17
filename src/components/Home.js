import React from 'react'
import './Home.css'
import SubscriptionForm from './SubscriptionForm'

const Home = () => (
  <div className="home">
    <div
      className="logo"
      style={{
        backgroundImage: `url(/images/logo.svg)`
      }}
    />
    <p className="home-subtitle">
      Uma plataforma construída por mulheres e para mulheres
    </p>
    <SubscriptionForm />
  </div>
)

export default Home
