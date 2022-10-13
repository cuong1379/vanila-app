import React from 'react'
import css from 'styled-jsx/css'

export const Footer = () => {
  return (
    <div>
        <div className="item footer">
          <div className="title showtotop">vanila</div>
          <div className="link">
            <ul>
              <li className="showtotop delay-02">HOME</li>
              <li className="showtotop delay-04">INFO</li>
              <li className="showtotop delay-06">CONTACT</li>
              <li className="showtotop delay-08">NEW</li>
              <li className="showtotop delay-1">NAMI</li>
            </ul>
          </div>
        </div>
        <style jsx>{style}</style>
    </div>
  )
}

const style = css.global`
.footer {
    background-color: #161924;
    width: 100%;
    text-align: center;
    padding-top: 200px;
    display: block;
    color: #eee;
    overflow: hidden;
  }
  .footer .title {
    font-family: 'Great Vibes', cursive;
    font-size: 130px;
  }
  .footer ul {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30vh;
    border-top: 1px solid rgba(115, 114, 114, 0.2);
  }
  .footer li {
    padding: 30px 90px;
    font-size: 30px;
  }
`