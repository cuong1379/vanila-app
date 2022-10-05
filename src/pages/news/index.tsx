import React from 'react'
import css from 'styled-jsx/css'

const News = () => {
  return (
    <>
      <div className="news">News</div>
      <style jsx>{style}</style>
    </>
  )
}

export default News

const style = css`
  .news {
    font-size: 20px;
  }
`
