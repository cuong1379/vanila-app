import React, { useEffect } from 'react'
import ProductCard from 'src/components/product-card'
import TextTyping from 'src/components/text-typing'
import css from 'styled-jsx/css'
import Carousel from '../carousel'

const LandingPage = () => {
  useEffect(() => {
    let items = document.querySelectorAll('.item')
    let nav = document.getElementById('nav')
    document.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        nav?.classList.add('tofixed')
      } else {
        nav?.classList.remove('tofixed')
      }
      items.forEach((item) => {
        if ((item as any).offsetTop - window.scrollY < 350) {
          item.classList.add('active')
        }
      })
    })
  }, [])

  return (
    <div>
      <header>
        <div className="nav" id="nav">
          <div className="logo">
            <img src="logo.png" alt="" />
          </div>
          <ul>
            <li>Shapewaer</li>
            <li>Bras</li>
            <li>Underwear</li>
            <li>Swim</li>
            <li>Leggings</li>
            <li>Camis</li>
            <li>Best Sellers</li>
            <li>Prime Day Sale</li>
            <li>Community</li>
          </ul>
        </div>
        <div className="banner">
          {/* <h1 className="title" style={{ color: ' #ff7575eb', mixBlendMode: 'color-burn' }}>
            The gift of peace
          </h1>
          <h1 className="title" style={{ color: 'rgb(255 136 66 / 58%)' }}>
            The gift of peace
          </h1> */}
          <TextTyping content="The gift of love. The gift of peace" className="mt-20" color="white" />
          <img src="banertext.webp" alt="" />
        </div>
      </header>
      <div className="container-lp">
        <div className="item intro">
          <Carousel />
        </div>

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

        <div className="item travel">
          <div className="title">
            <div className="showtotop">@vanila</div>
            <h2 className="showtotop delay-02">vanila</h2>
          </div>
          <div className="list">
            <div className="itemImg showtotop delay-04">
              <img src="1.jpg" alt="" />
              <div className="content">
                <h3>Hình</h3>
                <h3>Nội dung hình</h3>
              </div>
            </div>

            <div className="itemImg showtotop delay-06">
              <img src="2.jpg" alt="" />
              <div className="content">
                <h3>Hình</h3>
                <h3>Nội dung hình</h3>
              </div>
            </div>

            <div className="itemImg showtotop delay-08">
              <img src="3.jpg" alt="" />
              <div className="content">
                <h3>Hình</h3>
                <h3>Nội dung hình</h3>
              </div>
            </div>

            <div className="itemImg showtotop delay-1">
              <img src="4.jpg" alt="" />
              <div className="content">
                <h3>Hình</h3>
                <h3>Nội dung hình</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="item darkshow">
          <div className="title">
            <div className="showtotop">Contact with me</div>
            <div className="showtotop delay-02">vanila</div>
          </div>
          <div className="content">
            <div className="img">
              <img src="1.jpg" alt="" />
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
      </div>
      <style jsx>{style}</style>
    </div>
  )
}

export default LandingPage

const style = css.global`
  @import url('https://fonts.googleapis.com/css2?family=Cookie&display=swap');
  ::selection {
    background: var(--primary-100);
    color: #555;
  }
  ::-moz-selection {
    background: var(--primary-100);
    color: #555;
  }
  ::-webkit-selection {
    background: var(--primary-100);
    color: #555;
  }

  .nav {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 0 10%;
    border-bottom: 1px solid rgba(115, 114, 114, 0.2);
    display: flex;
    align-items: center;
    color: #eee;
    z-index: 11111111111111111;
  }
  .nav .logo img {
    width: 60px;
  }
  .nav ul {
    padding: 0;
    margin: 0;
    list-style: none;
    margin-left: 50px;
    display: flex;
    align-items: center;
  }
  .nav ul li {
    padding: 0 30px;
    font-size: 15px;
  }
  .tofixed {
    position: fixed;
    top: 0;
    color: #555;
    backdrop-filter: saturate(180%) blur(5px);
    background: hsla(0, 0%, 100%, 0.8);
    animation: showfixed 1s ease-in-out 1 forwards;
  }
  @keyframes showfixed {
    from {
      top: -100px;
    }
  }
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
  @keyframes totopimg {
    from {
      opacity: 0;
      transform: translate(-50%, 20%);
    }
    to {
      transform: translate(-50%, 10%);
      opacity: 1;
    }
  }
  @keyframes showtitle {
    from {
      filter: blur(33px);
      transform: translate(-50%, -80%);
    }
    to {
      opacity: 1;
      filter: blur(0px);
      transform: translate(-50%, -50%);
    }
  }
  .banner::after {
    position: absolute;
    left: 0;
    width: 100%;
    height: 10vh;
    top: 100vh;
    background-image: url(https://livedemo00.template-help.com/wt_prod-20838/images/cloud-2.png);
    background-size: 100%;
    content: '';
    filter: brightness(0.87);
  }
  .container-lp {
    min-height: 1500px;
    background-color: #ddd;
  }
  .intro {
    padding: 20px;
    text-align: center;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
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
  @keyframes blurshow {
    from {
      opacity: 0;
      filter: blur(33px);
    }
    to {
      opacity: 1;
      filter: blur(0);
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
  .slug {
    color: #555;
  }
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
  @keyframes showtop {
    from {
      opacity: 0;
      transform: translate(0, 100px);
    }
    to {
      opacity: 1;
      transform: translate(0, 0);
    }
  }
  .delay-02 {
    animation-delay: 0.2s !important;
  }
  .delay-04 {
    animation-delay: 0.4s !important;
  }
  .delay-06 {
    animation-delay: 0.6s !important;
  }
  .delay-08 {
    animation-delay: 0.8s !important;
  }
  .delay-1 {
    animation-delay: 1s !important;
  }
  .delay-12 {
    animation-delay: 1.2s !important;
  }
  .delay-14 {
    animation-delay: 1.4s !important;
  }
  .delay-16 {
    animation-delay: 1.6s !important;
  }
  .delay-18 {
    animation-delay: 1.8s !important;
  }
  .delay-2 {
    animation-delay: 2s !important;
  }
  .delay-12 {
    animation-delay: 1.2s !important;
  }
  .delay-14 {
    animation-delay: 1.4s !important;
  }
  .delay-16 {
    animation-delay: 1.6s !important;
  }
  .delay-18 {
    animation-delay: 1.8s !important;
  }
`
