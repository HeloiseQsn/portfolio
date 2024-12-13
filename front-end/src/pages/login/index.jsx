import React, { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!email || !password) {
      setError('Veuillez remplir tous les champs obligatoires.')
      return
    }

    const user = {
      email: email,
      password: password,
    }

    try {
      const response = await fetch('http://localhost:5678/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      })

      if (response.ok) {
        const data = await response.json()
        const token = data.token
        localStorage.setItem('token', token)
        window.location.href = 'index.html' // Redirection vers la page d'accueil
      } else {
        setError('Utilisateur ou mot de passe incorrect')
      }
    } catch (error) {
      setError('Une erreur est survenue. Veuillez réessayer plus tard.')
    }
  }

  return (
    <div className="login-container">
      <h2>Connexion</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" id="login-button">
          Se connecter
        </button>
      </form>
      {error && (
        <p id="login-error-message" style={{ color: 'red' }}>
          {error}
        </p>
      )}
    </div>
  )
}

export default Login
