import React from 'react'
import css from 'styled-jsx/css'
import { TextColor } from 'baser-ui/components'
import { Snow3 } from 'react-bootstrap-icons'

export const Logo = () => {
  return (
    <>
      <div className="d-flex align-items-center">
        <Snow3 size={40} color="var(--gray-100)" className='mr-2' />
        {/* <span className="styler mr-2"></span> */}
        <TextColor  size='30px' color='var(--gray-100)' >Baser</TextColor>
      </div>

      <style jsx>{style}</style>
    </>
  )
}

const style = css`
  .styler {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    background-color: var(--primary-100);
  }
`
