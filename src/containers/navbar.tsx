import Logo from 'src/components/logo'
import React, { useEffect } from 'react'
import css from 'styled-jsx/css'

export const Navbar = () => {
  useEffect(() => {
    let nav = document.getElementById('nav')
    document.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        nav?.classList.add('tofixed')
      } else {
        nav?.classList.remove('tofixed')
      }
    })
  }, [])
  return (
    <div>
      <div className="nav" id="nav">
        <Logo />
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
      <style jsx>{style}</style>
    </div>
  )
}

const style = css.global`
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

  .nav ul {
    padding: 0;
    margin: 0;
    list-style: none;
    margin-left: 50px;
    display: flex;
    align-items: center;
    font-weight: 600;
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
`
