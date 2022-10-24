import React from 'react'
import { format } from 'date-fns'
import css from 'styled-jsx/css'

export const DateNow = () => {
  return (
    <div className="datenow">
      {format(new Date(), 'dd/MM/yyyy')}
      <style jsx>{style}</style>
    </div>
  )
}

const style = css`
  .datenow {
    color: var(--gray-100);
    font-size: 19px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 28px;

    margin-right: 30px;
  }
`
