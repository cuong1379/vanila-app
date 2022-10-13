import React from 'react'
import css from 'styled-jsx/css'

export const ShopAll = () => {
  return (
    <div>
      <div className="item darkshow">
        <div className="title">
          <div className="showtotop">Contact with me</div>
          <div className="showtotop delay-02">vanila</div>
        </div>
        <div className="content">
          <div className="img">
            <img src="https://i.ibb.co/Qv2JzMc/wood-brown.png" alt="" />
          </div>
          <div className="list">
            <div className="contactItem zoomshow delay-02">
              <div className="icon showtotop delay-04">
                <i className="fa-brands fa-facebook"></i> Facebook
              </div>
              <div className="titleContact showtotop delay-06">vanila</div>
              <div className="slug showtotop delay-08">meo@gmail.com</div>
            </div>
            <div className="contactItem zoomshow  delay-04">
              <div className="icon showtotop delay-06">
                <i className="fa-brands fa-facebook"></i> Facebook
              </div>
              <div className="titleContact showtotop delay-08">vanila</div>
              <div className="slug showtotop delay-1">meo@gmail.com</div>
            </div>
            <div className="contactItem zoomshow  delay-06">
              <div className="icon showtotop delay-08">
                <i className="fa-brands fa-facebook"></i> Facebook
              </div>
              <div className="titleContact showtotop delay-1">vanila</div>
              <div className="slug showtotop delay-12">meo@gmail.com</div>
            </div>
            <div className="contactItem zoomshow  delay-08">
              <div className="icon showtotop delay-1">
                <i className="fa-brands fa-facebook"></i> Facebook
              </div>
              <div className="titleContact showtotop delay-12">vanila</div>
              <div className="slug showtotop delay-14">meo@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{style}</style>
    </div>
  )
}

const style = css.global`
  .darkshow {
    width: 100%;
    padding: 150px 10%;
    height: 170vh;
    background: #1f2538;
    text-align: center;
    color: #eee;
  }
  .darkshow .title {
    font-size: 40px;
    font-weight: bold;
    padding-bottom: 80px;
    width: 100%;
  }
  .darkshow .img {
    width: 50%;
    position: relative;
    float: left;
    opacity: 0;
  }
  .darkshow.active .img {
    animation: showimgdarkshow 1s ease-in-out 1s 1 forwards;
  }
  @keyframes showimgdarkshow {
    from {
      opacity: 0;
      filter: blur(33px);
      transform: translate(150px);
    }
    to {
      opacity: 1;
      filter: blur(0);
      transform: translate(0);
    }
  }

  .darkshow .img img {
    width: 50%;
    height: 600px;
    object-fit: cover;
  }
  .darkshow .list {
    width: 50%;
    float: left;
  }
  .slug {
    color: #555;
  }
  .contactItem {
    width: 36%;
    background-color: #161924;
    padding: 40px 5%;
    margin: 0 2% 2% 0;
    float: left;
    text-align: left;
  }
  .contactItem .icon {
    width: max-content;
    background-color: blueviolet;
    padding: 2px 10px;
    font-size: small;
    border-radius: 10px;
    margin-bottom: 20px;
  }
  .contactItem .titleContact {
    font-weight: 600;
    font-size: 45px;
    margin-bottom: 50px;
  }
  .showtotop,
  .zoomshow {
    opacity: 0;
  }
  .active .showtotop {
    animation: showtop 1s ease-in-out 1 forwards;
  }
  .active .zoomshow {
    animation: zoomshow 1s ease-in-out 1 forwards;
  }
  @keyframes zoomshow {
    from {
      transform: scale(0);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`
