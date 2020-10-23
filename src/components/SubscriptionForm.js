import React, { useState } from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import './SubscriptionForm.css'

const SubscriptionForm = () => {
  const [email, setEmail] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    const result = await addToMailchimp(email)
    if (result.msg.includes('already subscribed')) {
      setErrorMessage('Você já se inscreveu com esse email')
    }
    if (result.msg.includes('Thank you for subscribing')) {
      setSuccessMessage('Obrigada por se inscrever!')
    }
  }

  const handleEmailChange = event => {
    setEmail(event.target.value)
  }

  return (
    <form onSubmit={handleSubmit} className="EmailListForm">
      <h2>Faça parte desse movimento</h2>
      {errorMessage && <span className="errorMessage">{errorMessage}</span>}
      {successMessage && (
        <span className="successMessage">{successMessage}</span>
      )}
      <div className="Wrapper">
        <input
          placeholder="Email"
          name="email"
          type="text"
          onChange={handleEmailChange}
        />
        <button type="submit">Enviar</button>
      </div>
    </form>
  )
}

export default SubscriptionForm
