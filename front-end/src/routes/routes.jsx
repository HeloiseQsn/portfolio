import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React from 'react'
import Layout from '../components/Layout'
import Home from '../pages/home'
import Contact from '../pages/contact'
import Error from '../pages/error'
import Login from '../pages/login'

function RoutesPortfolio() {
  return (
    <React.StrictMode>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Layout>
      </Router>
    </React.StrictMode>
  )
}

export default RoutesPortfolio
