import React from 'react'
import { createRoot } from 'react-dom/client'
import RoutesPortfolio from './routes/routes'

const rootElement = document.getElementById('root')

const root = createRoot(rootElement)

root.render(<RoutesPortfolio />)
