import React from 'react'
// import css from 'styled-jsx/css'

interface TextTyping {
  content: string
  className?: string
  color?: string
}

const TextTyping = ({ content, className, color }: TextTyping) => {
  return (
    <div className={`d-flex justify-content-center ${className}`}>
      <div className="text-typing">
        <p>{content}</p>
      </div>
      <style jsx>{`
        .text-typing {
          font-family: 'Cookie', cursive !important;
          font-size: 100px;
          color: ${color};
          p {
            border-right: 5px solid ${color};
            overflow: hidden;
            white-space: nowrap;
            animation: typing 2s steps(${content?.length}) 1, caret 1s steps(2) infinite;
          }
        }

        @keyframes caret {
          from {
            border-color: transparent;
          }

          to {
            border-color: ${color};
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
      `}</style>
    </div>
  )
}

export default TextTyping
