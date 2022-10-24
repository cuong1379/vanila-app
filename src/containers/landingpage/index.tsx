import React, { useEffect } from 'react'
import { animation } from './animation'
import { Navbar, Banner, Carousel, BestSeller, Footer } from 'src/containers'

const LandingPage = () => {
  useEffect(() => {
    let items = document.querySelectorAll('.item')

    const handleScrollEffect = () => {
      items.forEach((item) => {
        if ((item as any).offsetTop - window.scrollY < 350) {
          item.classList.add('active')
        }
      })
    }
    document.addEventListener('scroll', handleScrollEffect)
    return () => window.removeEventListener('scroll', handleScrollEffect)
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
        {/* <Deals /> */}
        {/* <ShopAll /> */}
        <Footer />
      </div>
      <style jsx>{animation}</style>
    </div>
  )
}

export default LandingPage
