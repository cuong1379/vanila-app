import React from 'react'
import css from 'styled-jsx/css'
import TextTyping from 'src/components/text-typing'

export const Banner = () => {
  return (
    <div>
      <div className="banner">
        <TextTyping content="The gift of love. The gift of peace" className="mt-20" color="white" />
        <img src="banertext.webp" alt="" />
      </div>
      <style jsx>{style}</style>
    </div>
  )
}

const style = css.global`
  .banner {
    height: 110vh;
    width: 100%;
    position: relative;
    overflow: hidden;
  }
  .banner::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    // filter: brightness(0.9);
    height: 100%;
    background-image: url(https://i.ibb.co/YLMqsDK/background-header.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top left;
    background-attachment: fixed;
    z-index: -1;
    content: '';
  }
  .banner .title {
    position: absolute;
    top: 33%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-size: 6rem;
    opacity: 0;
    font-family: 'Cookie', cursive;
    animation: showtitle 3s ease-in-out 5s 1 forwards;
    letter-spacing: -0.025em;
    font-weight: 900;
  }
  .banner img {
    position: absolute;
    left: 50%;
    bottom: 15%;
    transform: translate(-50%, 10%);
    width: 1000px;
    // filter: brightness(0.9);
    opacity: 0;
    animation: totopimg ease-in-out 5s 1 forwards;
  }
`
