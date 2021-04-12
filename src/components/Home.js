import React from 'react'
import './Home.css'
import SubscriptionForm from './SubscriptionForm'
import Linkedin from 'react-feather/dist/icons/linkedin'
import Instagram from 'react-feather/dist/icons/instagram'

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
    <div className="socialIcons">
      <a
        href="https://www.linkedin.com/company/safeplacebrasil"
        target="_blank"
        rel="noopener noreferrer"
        className="socialIcon"
      >
        <Linkedin />
      </a>
      <a
        href="https://instagram.com/safeplace_brasil?igshid=1a5l7sr77ft3w"
        target="_blank"
        rel="noopener noreferrer"
        className="socialIcon"
      >
        <Instagram />
      </a>
    </div>
  </div>
)

export default Home
