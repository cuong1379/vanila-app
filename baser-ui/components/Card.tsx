import React from 'react'
import css from 'styled-jsx/css'

interface CardProps {
  title?: string
  width?: string
  className?: string
  children?: any
}

export const Card = ({ className, ...props }: CardProps) => {
  return (
    <>
      <article
        title={props?.title}
        style={{ width: `${props?.width || 300}` }}
        className={`drop-shadow ${className || ''} `}
      >
        <div>{props.children}</div>
      </article>
      <style jsx>{style}</style>
    </>
  )
}

const style = css`
  .drop-shadow {
    padding: 2% 5%;
    border-radius: var(--round-16);
    background: rgba(255, 255, 255, 0.63);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(0px);
    -webkit-backdrop-filter: blur(0px);
    border: 2px solid rgba(255, 255, 255, 1);
  }
`
