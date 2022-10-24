import DoubleImg from 'baser-ui/components/DoubleImg'
import React from 'react'
import Slider from 'src/containers/slider'

const Test = () => {
  return (
    <>
      <div style={{ textAlign: 'center', marginTop: '200px', marginBottom: '200px' }}>
        <Slider />
      </div>
      <div
        style={{ textAlign: 'center', marginTop: '200px', marginBottom: '200px' }}
        className="d-flex justify-content-center"
      >
        <DoubleImg
          firstImg="https://cdn.shopify.com/s/files/1/0021/4889/2732/products/underwear-beige-s-xl-truekind-seamless-brief-30374749175942_900x.progressive.jpg"
          secondImg="https://cdn.shopify.com/s/files/1/0021/4889/2732/products/underwear-chocolate-s-xl-truekind-seamless-brief-30374749208710_900x.progressive.jpg"
        />
      </div>
    </>
  )
}

export default Test
