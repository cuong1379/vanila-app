import ZoomImg from 'baser-ui/components/ZoomImg'
import React from 'react'

const Slider = () => {
  const handleShowSlideIndex = (key: number) => {
    // const lists = document.querySelectorAll('.item-slider')
    // document?.querySelector('container-slider')?.appendChild(lists[0])

    // document?.querySelector('container-slider')?.prepend(document?.querySelector(`.slider-box-${key}`) as any)

    ;[1, 2, 3, 4].forEach((itemIndex) => {
      if (itemIndex == key) {
        ;(document.querySelector(`.slider-box-${key}`) as any).style.display = 'block'

      } else {
        ;(document.querySelector(`.slider-box-${itemIndex}`) as any).style.display = 'none'

      }
    })
  }

  return (
    <>
      <div className="d-flex justify-content-center container-slider">
        <div className="slider-box-1 item-slider">
          <ZoomImg
            id="1"
            imgSrc="https://cdn.shopify.com/s/files/1/0021/4889/2732/products/underwear-latte-s-xl-truekind-seamless-brief-30374749110406_900x.progressive.jpg"
          />
        </div>
        <div className="slider-box-2 item-slider">
          <ZoomImg
            id="2"
            imgSrc="https://cdn.shopify.com/s/files/1/0021/4889/2732/products/underwear-black-s-xl-truekind-seamless-brief-30374749143174_900x.progressive.jpg"
          />
        </div>
        <div className="slider-box-3 item-slider">
          <ZoomImg
            id="3"
            imgSrc="https://cdn.shopify.com/s/files/1/0021/4889/2732/products/underwear-beige-s-xl-truekind-seamless-brief-30374749175942_900x.progressive.jpg"
          />
        </div>
        <div className="slider-box-4 item-slider">
          <ZoomImg
            id="4"
            imgSrc="https://cdn.shopify.com/s/files/1/0021/4889/2732/products/underwear-chocolate-s-xl-truekind-seamless-brief-30374749208710_900x.progressive.jpg"
          />
        </div>
      </div>
      <div className="d-flex justify-content-center" style={{ position: 'absolute', bottom: '100px', left: '50%' }}>
        <div>
          <button onClick={() => handleShowSlideIndex(1)}>1</button>
          <button onClick={() => handleShowSlideIndex(2)}>2</button>
          <button onClick={() => handleShowSlideIndex(3)}>3</button>
          <button onClick={() => handleShowSlideIndex(4)}>4</button>
        </div>
      </div>
      <style jsx>{`
          // .container-slider .item-slider {
          //   position: absolute;
          //   top:50%;
          //   left:50%;
          //   opacity: 1;
          // }

          .slider-box-2,
          .slider-box-3,
          .slider-box-4 {
            display: none;
          }
      `}</style>
    </>
  )
}

export default Slider
