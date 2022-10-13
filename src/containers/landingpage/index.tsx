import React, { useEffect } from 'react'
import { animation } from './animation'
import {Navbar, Banner, Carousel, BestSeller, Deals, ShopAll, Footer} from 'src/containers'


const LandingPage = () => {
  useEffect(() => {
    let items = document.querySelectorAll('.item')
    document.addEventListener('scroll', () => {
      items.forEach((item) => {
        if ((item as any).offsetTop - window.scrollY < 350) {
          item.classList.add('active')
        }
      })
    })
  }, [])

  return (
    <div>
      <header>
        <Navbar />
        <Banner />
      </header>
      <div className="container-lp">
        <div className="item intro">
          <Carousel />
        </div>

        <BestSeller />
        <Deals />
        <ShopAll />
        <Footer />
      </div>
      <style jsx>{animation}</style>
    </div>
  )
}

export default LandingPage
