import React from 'react'
import './footer.css'

function Footer() {
    return (
       <>
       <footer>
         <div>
         
           <div className='footerContact'>
            <span>
                Place du Paradis
                Reykjavik - Islande
              </span>
              <div className="flexRS">
                <a href=""><img src={process.env.PUBLIC_URL + './ressources/picture/icon/facebookLogo.png'} alt="" /></a>
                <a href=""><img src={process.env.PUBLIC_URL + './ressources/picture/icon/instagramLogo.png'} alt="" /></a>
                <a href=""><img src={process.env.PUBLIC_URL + './ressources/picture/icon/phone-logo.png'} alt="" /></a>
                <a href=""><img src={process.env.PUBLIC_URL + './ressources/picture/icon/mailLogo.png'} alt="" /></a>
              </div>
              
              
           </div>

           


           <div>
            <ul>
           <img src={process.env.PUBLIC_URL + './ressources/picture/icon/paiement.png'} alt="" />
              <li><a href="">Conditions générales de ventes</a></li>
              <li><a href="">Mentions légales</a></li>
            </ul>
           </div>
         
         </div>
       </footer>
       </>
  )
}

export default Footer