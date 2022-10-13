import React from 'react'
import css from 'styled-jsx/css'

export const Deals = () => {
  return (
    <div>
      <div className="item travel">
        <div className="title">
          <div className="showtotop">@vanila</div>
          <h2 className="showtotop delay-02">vanila</h2>
        </div>
        <div className="list">
          <div className="itemImg showtotop delay-04">
            <img src="https://i.ibb.co/Qv2JzMc/wood-brown.png" alt="" />
            <div className="content">
              <h3>Hình</h3>
              <h3>Nội dung hình</h3>
            </div>
          </div>

          <div className="itemImg showtotop delay-06">
            <img src="https://i.ibb.co/Qv2JzMc/wood-brown.png" alt="" />
            <div className="content">
              <h3>Hình</h3>
              <h3>Nội dung hình</h3>
            </div>
          </div>

          <div className="itemImg showtotop delay-08">
            <img src="https://i.ibb.co/Qv2JzMc/wood-brown.png" alt="" />
            <div className="content">
              <h3>Hình</h3>
              <h3>Nội dung hình</h3>
            </div>
          </div>

          <div className="itemImg showtotop delay-1">
            <img src="https://i.ibb.co/Qv2JzMc/wood-brown.png" alt="" />
            <div className="content">
              <h3>Hình</h3>
              <h3>Nội dung hình</h3>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{style}</style>
    </div>
  )
}

const style = css.global`
  .travel {
    height: 120vh;
    width: 100%;
    padding: 100px 10%;
    background-color: #cfdadb;
    text-align: center;
  }
  .travel .title {
    padding-bottom: 100px;
  }
  .travel .itemImg {
    width: 25%;
    float: left;
  }
  .travel .itemImg img {
    width: 90%;
    padding: 5%;
    height: 520px;
    object-fit: cover;
  }
`
