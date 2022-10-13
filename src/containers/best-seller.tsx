import React from 'react'
import css from 'styled-jsx/css'
import ProductCard from 'src/components/product-card'

export const BestSeller = () => {
  return (
    <div>
      <div className="best-seller-container">
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

const style = css.global`
  .best-seller-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    max-width: 1500px;
    margin: auto;
    margin-top: 100px;
    margin-bottom: 100px;
  }
`
