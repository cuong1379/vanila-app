import ZoomImg from 'baser-ui/components/ZoomImg'
import React from 'react'

const Test = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '200px' }} className="d-flex justify-content-center">
      <ZoomImg imgSrc='https://cdn.shopify.com/s/files/1/0021/4889/2732/products/bra-black-s-truekind-everyday-throw-on-wireless-bralette-30107138457734_900x.progressive.jpg' zoom='1.5' />
    </div>
  )
}

export default Test
