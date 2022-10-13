import React from 'react'
import css from 'styled-jsx/css'
import ProductCard from 'src/components/product-card'

export const BestSeller = () => {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          maxWidth: '1500px',
          margin: 'auto',
          marginTop: '100px',
          marginBottom: '100px'
        }}
      >
        {['productId1', 'productId2', 'productId3', 'productId4']?.map((item) => {
          return (
            <React.Fragment key={item}>
              <ProductCard productId={item} />
            </React.Fragment>
          )
        })}
      </div>
      <style jsx>{style}</style>
    </div>
  )
}

const style = css.global``
