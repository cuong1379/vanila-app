import React from 'react'
import css from 'styled-jsx/css'

const Logo = () => {
  return (
    <>
      <div className="logo d-flex align-items-center">
        <img src="logo.png" alt="" />
        <p className="logo-text">SnowLemon</p>
      </div>
      <style jsx>{style}</style>
    </>
  )
}

export default Logo

const style = css`
  .logo {
    cursor: pointer;
    img {
      width: 60px;
      margin-right: 20px;
    }
  }

  .logo-text {
    font-size: 38px;
    font-family: 'Cookie', cursive !important;
    margin-bottom: 0px;
  }
`
