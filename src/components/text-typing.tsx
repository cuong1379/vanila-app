import React from 'react'
import css from 'styled-jsx/css'

const TextTyping = () => {
  return (
    <div>
      <div className="text-typing">
        <p>Marry Christmas!</p>
      </div>
      <style jsx>{style}</style>
    </div>
  )
}

export default TextTyping

const style = css.global`
  @import url('https://fonts.googleapis.com/css2?family=Cookie&display=swap');
  .text-typing {
    font-family: 'Cookie', cursive !important;
    font-size: 100px;

    p {
      border-right: 5px solid orange;
      display: inline;
      animation: typing 1.5s steps(17) 1, caret 0.5s steps(2) infinite;
      overflow: hidden;
      white-space: nowrap;
    }
  }

  @keyframes caret {
    from {
      border-color: transparent;
    }
    to {
      border-color: orange;
    }
  }

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
`