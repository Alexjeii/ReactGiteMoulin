import React from 'react'
import Navbar from '../component/navbar/Navbar'
import Header from '../component/header/Header'
import Footer from '../component/footer/Footer'
import Cta from '../component/CTA/Cta'

import './home.css'



function Home() {
  return (
    <>
    <body>

    <Header />
    <Navbar />
    <div className="container">

      
      <main>
        <img class="headPic" src={process.env.PUBLIC_URL + 'ressources/picture/homepage-headpicture.jpg'} />
        
          <h2>Qui sommes nous ?</h2>
          <hr />
        
        <div className="aPropos">
          <img src={process.env.PUBLIC_URL + 'ressources/picture/qui-sommes-nous-picture.jpg'} alt="" className="aboutPic" />
          <div className="paragraphes">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima obcaecati, officia numquam suscipit perferendis quis, minus alias eos delectus, corrupti fuga aspernatur molestias eligendi amet ipsam expedita voluptatum ipsa aliquid? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente optio cumque amet voluptates placeat accusamus aliquid reprehenderit laboriosam ullam, consectetur, eum in perspiciatis ipsa fugit non sequi delectus maiores quam!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quisquam sed vel officiis recusandae, ad reprehenderit ut, tenetur, omnis rem quos harum veritatis hic eum consequuntur nulla dignissimos laboriosam totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum iure quibusdam amet omnis rerum, eos repellat blanditiis possimus asperiores ab.</p>
          </div>
        </div>
        
            <Cta />
        
            
              <h2>Autour des chalets</h2>
              <hr />
            
      <div className="around">
        <img src={process.env.PUBLIC_URL + 'ressources/picture/photo-autour.jpg'} alt="" />
        <div className="paragraphes">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis consequatur deleniti reiciendis, magnam, corrupti aliquid maxime magni delectus, officia autem odio pariatur earum facilis dignissimos quaerat eligendi! At, deserunt impedit.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque aut nesciunt quae ex numquam nam vero et, ipsum est architecto porro eum culpa voluptatem veniam suscipit eius. Doloribus, hic molestias!
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ad dolorem, sit at consectetur delectus natus a iste obcaecati optio cumque deleniti quis, fuga minima? Rerum eius autem est iste. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt architecto vel in, quasi repellendus saepe repellat quas deserunt minima cum dolorum officiis tenetur? Perspiciatis deserunt, repellat voluptates dolore magnam nobis.
          </p>
        </div>
      </div>

      <h2>Découvrir l'Islande</h2>
      <div className="discover">
        <img src={process.env.PUBLIC_URL + 'ressources/picture/carousel/carousel (1).jpg'} alt="Premiere image" />
        <img src={process.env.PUBLIC_URL + 'ressources/picture/carousel/carousel (2).jpg'} alt="Duxieme image" />
        <img src={process.env.PUBLIC_URL + 'ressources/picture/carousel/carousel (3).jpg'} alt="Troisieme image" />
        <img src={process.env.PUBLIC_URL + 'ressources/picture/carousel/carousel (4).jpg'} alt="Quatrieme image" />
      </div>

      <Footer />

      </main>

    
    </div>
    </body>
    </>
  )
}

export default Home