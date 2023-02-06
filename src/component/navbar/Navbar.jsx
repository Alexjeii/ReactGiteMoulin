import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

function Navbar() {
  return (
    <div>

        
    <nav className="mainMenu">
                
                <Link to="/hébergements-classiques">Hébergement Classiques</Link>
                <Link to="/hébergements-insolites">Hébergements Insolites</Link>
                <Link to="/services">Services</Link>
                <Link to="/contact">Contact</Link>
            
            </nav>

    </div>
  )
}

export default Navbar