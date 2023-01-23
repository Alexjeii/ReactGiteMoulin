import React from 'react'
import {Link} from 'react-router-dom'
import './header.css'

function Header() {
  return (
    <div>
    
    <header>
        <Link to="/">
            <div class="siteName">
                <img src={process.env.PUBLIC_URL + 'ressources/picture/logo.png'} alt="Logo du Gite, qui ramène à la page d'accueil"/>
            <h1>
                <span>Sofandi Murleldyr</span>
                Les Marmottes Endormies
            </h1>
            </div>
            
        </Link>
        
        </header>

    
       
        
            <nav className="mainMenu">
                
                <Link to="/hébergements-classiques">Hébergement Classiques</Link>
                <Link to="/hébergements-insolites">Hébergements Insolites</Link>
                <Link to="/services">Services</Link>
                <Link to="/contact">Contact</Link>
            
            </nav>
        
        
    </div>
  )
}

export default Header