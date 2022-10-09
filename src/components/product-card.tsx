import StarRating from 'baser-ui/components/StarRating'
import React, { useState } from 'react'
import css from 'styled-jsx/css'
import { CartFill } from 'react-bootstrap-icons'

const ProductCard = () => {
  const [checked, setChecked] = useState(true)
  return (
    <div>
      <div className="card">
        <div className="basicInfo">
          <div className="title">
            <div className="category">Nike</div>
            <div className="name">Luka 1 Next Nature</div>
            <div className="info">Hyper mega shoe</div>
          </div>
          <div className="images">
            <div className="img">
              <div className="item">
                <input type="radio" name="color" id="green" checked={checked} onChange={() => setChecked(!checked)} />
                <img src="green.png" />
              </div>
              <div className="item">
                <input type="radio" name="color" id="black" />
                <img src="black.png" />
              </div>
            </div>
          </div>
          <div className="colors">
            <label htmlFor="green">
              <div className="name">Green</div>
              <div className="ellipse" style={{ background: '#CADB6E' }}></div>
            </label>

            <label htmlFor="black">
              <div className="name">Black</div>
              <div className="ellipse" style={{ background: '#2B2B2B' }}></div>
            </label>
          </div>
          <div className="addCard">
            <i>
              <CartFill size={20} />
            </i>
          </div>
        </div>
        <div className="mores">
          <div className="stars">
            <StarRating rating={4.5} />
          </div>
          <div className="price">$23.09</div>
        </div>
      </div>

      <style jsx>{style}</style>
    </div>
  )
}

export default ProductCard

const style = css.global`
  :root {
    --green: #3be798;
    --violet: #7f6eb2;
    --dark: #2b2b2b;
  }
  body {
    height: 100vh;
    overflow: hidden;
    font-family: system-ui;
    background-image: linear-gradient(to top right, var(--green), var(--violet));
  }
  .card {
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 30px;
    transform: translate(-50%, -50%);
    width: 300px;
    background-color: var(--dark);
  }
  .basicInfo {
    background-color: #f5f5f5;
    border-radius: 30px;
    padding: 25px;
    position: relative;
  }
  .title .category,
  .title .info {
    font-weight: 600;
    font-size: x-small;
  }
  .title .name {
    font-weight: bold;
    font-size: large;
    padding-bottom: 3px;
  }
  .card .img {
    position: relative;
    z-index: 1;
    text-align: center;
  }
  .card .img img {
    width: 100%;
    transform: scale(1) rotate(20deg);
    transition: 0.5s;
    display: none;
  }
  .img input:checked ~ img {
    display: block;
  }
  .card .img::before {
    position: absolute;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    content: '';
    transform: translate(-50%, -50%);
    background-color: #e7e7e7;
    z-index: -2;
    top: 50%;
    left: 50%;
  }
  .card .img::after {
    position: absolute;
    bottom: 0;
    width: 70%;
    height: 40px;
    background-color: #000;
    content: '';
    right: 30px;
    z-index: -1;
    border-radius: 50%;
    opacity: 0.2;
    filter: blur(10px);
    transition: 0.5s;
  }
  .img input {
    position: absolute;
    opacity: 0;
  }
  .colors {
    display: flex;
    font-size: xx-small;
    text-align: center;
  }
  .colors label {
    margin-right: 10px;
  }
  .colors .name {
    margin-bottom: 5px;
  }
  .colors .ellipse {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
  }
  .mores {
    padding: 25px;
  }
  .mores .stars,
  .mores .price {
    display: inline-block;
  }
  .mores .price {
    float: right;
    color: #eee;
    font-weight: 600;
    letter-spacing: 1px;
  }
  .mores .stars {
    color: #9b9a9a;
  }
  .text-yellow {
    color: rgb(209, 209, 6);
  }
  .addCard {
    position: absolute;
    width: 100%;
    bottom: 0;
  }
  .addCard i {
    position: absolute;
    width: 57px;
    height: 57px;
    background-color: var(--green);
    color: #222;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    right: 91px;
    bottom: -20px;
    border: 5px solid var(--dark);
    transition: 0.5s;
    opacity: 0;
    transform: translate(0, 10px);

    cursor: pointer;
  }
  .addCard::after,
  .addCard::before {
    position: absolute;
    bottom: 0;
    background-color: transparent;
    width: 47px;
    height: 38px;
    content: '';
    right: 46px;
    border-bottom-left-radius: 55%;
    opacity: 0;
    transform: translate(0, 20px);
    box-shadow: 0 20px 0 0 var(--dark);
    transition: 0.5s;
  }
  .addCard::after {
    right: unset;
    left: 107px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 55%;
  }
  /* animation */
  .card:hover .img img {
    transform: scale(1.2) rotate(30deg) translate(10px, -20px);
  }
  .card:hover .img::after {
    width: 90%;
  }
  .card:hover .addCard i,
  .card:hover .addCard::before,
  .card:hover .addCard::after {
    opacity: 1;
    transform: translate(0, 0);
  }
`
