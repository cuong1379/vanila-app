import React, { useEffect } from 'react'
import css from 'styled-jsx/css'
import { KeyboardFill, PenFill, FilePersonFill, ArrowRightCircleFill } from 'react-bootstrap-icons'

const Carousel = () => {
  useEffect(() => {
    var count_group = document.querySelectorAll('.list-carousel .itemcarosel').length
    var activecarousel = 0

    Load()

    function Load() {
      document
        .getElementById(
          'itemcarosel_' +
            (activecarousel - 2 < -1 ? count_group - 2 : activecarousel - 2 < 0 ? count_group - 1 : activecarousel - 2)
        )
        ?.classList.remove('hide')
      document
        .getElementById('itemcarosel_' + (activecarousel - 1 < 0 ? count_group - 1 : activecarousel - 1))
        ?.classList.remove('activecarousel')
      document
        .getElementById('itemcarosel_' + (activecarousel - 1 < 0 ? count_group - 1 : activecarousel - 1))
        ?.classList.add('hide')

      document.getElementById('itemcarosel_' + activecarousel)?.classList.remove('hide')
      document.getElementById('itemcarosel_' + activecarousel)?.classList.add('activecarousel')

      document.querySelector('.dots-page div')?.classList.remove('activecarousel')
      document.getElementById('dot_' + activecarousel)?.classList.add('activecarousel')
    }

    document.getElementById('next')?.addEventListener('click', function () {
      activecarousel = activecarousel + 1 >= count_group ? 0 : activecarousel + 1
      Load()
    })
    document.getElementById('prev')?.addEventListener('click', function () {
      activecarousel = activecarousel - 1 < 0 ? count_group - 1 : activecarousel - 1
    })
  }, [])

  return (
    <div>
      <div className="container-carousel">
        <h1>Carousel</h1>
        <div className="list-carousel">
          <div className="itemcarosel" id="itemcarosel_0">
            <img src="6.png" alt="" />
            <img src="green.png" alt="" />
            <img src="9.png" alt="" />
            <img src="green.png" alt="" />
            <div className="content-carousel">
              <div className="itemcaroseltext">
                {' '}
                <img src="6.png" alt="" /> <span>45$</span>
                <span>Sản phẩm</span>{' '}
              </div>
              <div className="itemcaroseltext">
                {' '}
                <img src="green.png" alt="" /> <span>45$</span>
                <span>Sản phẩm</span>{' '}
              </div>
              <div className="itemcaroseltext">
                {' '}
                <img src="9.png" alt="" /> <span>45$</span>
                <span>Sản phẩm</span>{' '}
              </div>
            </div>
          </div>
          <div className="itemcarosel" id="itemcarosel_1">
            <img src="5.png" alt="" />
            <img src="black.png" alt="" />
            <img src="8.png" alt="" />
            <img src="black.png" alt="" />
            <div className="content-carousel">
              <div className="itemcaroseltext">
                {' '}
                <img src="5.png" alt="" /> <span>45$</span>
                <span>Sản phẩm</span>{' '}
              </div>
              <div className="itemcaroseltext">
                {' '}
                <img src="black.png" alt="" /> <span>45$</span>
                <span>Sản phẩm</span>{' '}
              </div>
              <div className="itemcaroseltext">
                {' '}
                <img src="8.png" alt="" /> <span>45$</span>
                <span>Sản phẩm</span>{' '}
              </div>
            </div>
          </div>
          <div className="itemcarosel" id="itemcarosel_2">
            <img src="7.png" alt="" />
            <img src="green.png" alt="" />
            <img src="4.png" alt="" />
            <img src="green.png" alt="" />
            <div className="content-carousel">
              <div className="itemcaroseltext">
                {' '}
                <img src="7.png" alt="" /> <span>45$</span>
                <span>Sản phẩm</span>{' '}
              </div>
              <div className="itemcaroseltext">
                {' '}
                <img src="green.png" alt="" /> <span>45$</span>
                <span>Sản phẩm</span>{' '}
              </div>
              <div className="itemcaroseltext">
                {' '}
                <img src="4.png" alt="" /> <span>45$</span>
                <span>Sản phẩm</span>{' '}
              </div>
            </div>
          </div>
          <div className="itemcarosel" id="itemcarosel_3">
            <img src="5.png" alt="" />
            <img src="black.png" alt="" />
            <img src="8.png" alt="" />
            <img src="black.png" alt="" />
            <div className="content-carousel">
              <div className="itemcaroseltext">
                {' '}
                <img src="5.png" alt="" /> <span>45$</span>
                <span>Sản phẩm</span>{' '}
              </div>
              <div className="itemcaroseltext">
                {' '}
                <img src="black.png" alt="" /> <span>45$</span>
                <span>Sản phẩm</span>{' '}
              </div>
              <div className="itemcaroseltext">
                {' '}
                <img src="8.png" alt="" /> <span>45$</span>
                <span>Sản phẩm</span>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="menu">
        <ul>
          <li>
            <KeyboardFill color="var(--primary-100)" />
          </li>
          <li>
            <PenFill color="var(--primary-100)" />
          </li>
          <li>
            <FilePersonFill color="var(--primary-100)" />
          </li>
          <li id="next">
            <ArrowRightCircleFill color="var(--primary-100)" />
          </li>
        </ul>
      </div>
      <style jsx>{style}</style>
    </div>
  )
}

export default Carousel

const style = css.global`
  .container-carousel {
    background-color: #eee;
    position: absolute;
    top: 160%;
    left: 50%;
    width: 1000px;
    height: 600px;
    transform: translate(-50%, -50%);
    border-radius: 3px;
  }
  .itemcarosel {
    position: absolute;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: -1;
  }
  .activecarousel {
    opacity: 1;
    z-index: 5;
  }
  .hide {
    opacity: 1;
    z-index: 4;
  }
  .itemcarosel img:nth-child(3) {
    position: absolute;
    top: 58%;
    left: 50%;
    width: 140px;
    filter: blur(3px);
  }
  .itemcarosel img:nth-child(2) {
    position: absolute;
    top: 50%;
    left: 40%;
    transform: translate(0, -50%);
    width: 50%;
  }
  .itemcarosel img:nth-child(1) {
    position: absolute;
    top: 16%;
    left: 70%;
    width: 150px;
  }
  .itemcarosel img:nth-child(4) {
    position: absolute;
    left: 40%;
    width: 397px;
    height: 100px;
    filter: blur(17px);
    bottom: 10%;
  }
  .activecarousel img:nth-child(1) {
    animation: img1show 2s cubic-bezier(0, 0, 0, 1.01) 1 forwards;
  }
  .activecarousel img:nth-child(2) {
    animation: img2show 2.3s cubic-bezier(0, 0, 0, 1.01) 1 forwards;
  }
  .activecarousel img:nth-child(3) {
    animation: img3show 2s cubic-bezier(0, 0, 0, 1.01) 1 forwards;
  }
  .activecarousel img:nth-child(4) {
    animation: img2show 2.3s cubic-bezier(0, 0, 0, 1.01) 1 forwards;
  }
  @keyframes img1show {
    0% {
      opacity: 0;
      left: 100%;
      transform: rotate(95deg);
    }
    10% {
      opacity: 1;
    }
    100% {
      opacity: 1;
      left: 70%;
      transform: rotate(0deg);
    }
  }
  @keyframes img2show {
    0% {
      opacity: 0;
      left: 100%;
    }
    10% {
      opacity: 1;
    }
    100% {
      opacity: 1;
      left: 40%;
    }
  }
  @keyframes img3show {
    0% {
      opacity: 0;
      left: 130%;
      transform: rotate(95deg);
    }
    10% {
      opacity: 1;
    }
    100% {
      opacity: 1;
      transform: rotate(0deg);
      left: 50%;
    }
  }
  .hide img:nth-child(1) {
    animation: img1hide 2.3s cubic-bezier(0, 0, 0, 0.7) 1 forwards;
  }
  .hide img:nth-child(2) {
    animation: img2hide 1.3s cubic-bezier(0, 0, 0, 0.7) 1 forwards;
  }
  .hide img:nth-child(3) {
    animation: img3hide 1s cubic-bezier(0, 0, 0, 0.7) 1 forwards;
  }
  .hide img:nth-child(4) {
    animation: img2hide 1.3s cubic-bezier(0, 0, 0, 0.7) 1 forwards;
  }
  @keyframes img1hide {
    0% {
      opacity: 1;
      left: 70%;
      transform: rotate(0);
    }
    60% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      left: -40%;
      transform: rotate(95deg);
    }
  }
  @keyframes img2hide {
    0% {
      opacity: 1;
      left: 40%;
    }
    60% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      left: -40%;
    }
  }
  @keyframes img3hide {
    0% {
      opacity: 1;
      left: 50%;
      transform: rotate(0);
    }
    60% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      left: -40%;
      transform: rotate(95deg);
    }
  }
  .menu {
    position: absolute;
    background: #fff;
    border-radius: 15px;
    left: 50%;
    bottom: -100%;
    transform: translate(-50%, 0);
    opacity: 0.7;
  }
  .bg-rotate {
    position: absolute;
    bottom: -56%;
    left: 23%;
    width: 500px;
    height: 500px;
    border-radius: 30% 70% 25% 75% / 49% 35% 65% 51%;
    transition: 1s;
    transform: rotate(0deg);
    z-index: -1;
    background: #dedee0;
    opacity: 0.2;
  }
  .background-rotate {
    width: 100%;
    height: 500px;
    position: absolute;
    overflow: hidden;
    border-top-left-radius: 40px;
    bottom: 0;
    left: 50%;
    transform: translate(-50%);
  }
  .menu ul {
    padding: 0;
    margin: 0;
  }
  .menu li {
    list-style: none;
    padding: 15px 20px;
    display: inline-block;
    border-radius: 15px;
    text-align: center;
    cursor: pointer;
  }
  .menu li:nth-child(4) {
    background-color: #6ebfc7;
    color: #fff;
  }
  .menu li:nth-child(4):hover {
    background-color: #ccc;
  }
  .content-carousel {
    position: absolute;
    top: 30%;
    left: 5%;
    width: 25%;
    overflow: hidden;
    height: 60%;
    display: none;
    opacity: 0.7;
    z-index: -1;
  }
  .itemcaroseltext {
    background: #fff;
    border-radius: 20px;
    padding: 33px;
    position: relative;
    margin-top: 10px;
    min-height: 20px;
  }
  .itemcaroseltext img {
    animation: none !important;
    width: 50px !important;
    position: absolute !important;
    left: 0 !important;
    bottom: 0 !important;
  }
  .itemcaroseltext span {
    float: right;
    opacity: 0.6;
    margin-left: 20px;
    font-family: monospace;
    font-size: 18px;
  }
  .activecarousel .content-carousel,
  .hide .content-carousel {
    display: block;
  }
  .activecarousel .itemcaroseltext {
    animation: textshow 1s ease-in-out 1 forwards;
  }
  @keyframes textshow {
    from {
      transform: translate(300px, 0);
      opacity: 0;
    }
    to {
      transform: translate(0, 0);
      opacity: 1;
    }
  }
  .hide .itemcaroseltext {
    animation: texthide 1s ease-in-out 1 forwards;
  }
  @keyframes texthide {
    from {
      transform: translate(0px, 0);
      opacity: 1;
    }
    to {
      transform: translate(-300px, 0);
      opacity: 0;
    }
  }
`
