import React from 'react'
import css from 'styled-jsx/css'
import { Google, Facebook, Github } from 'react-bootstrap-icons'

const BtnLogin = ({ type, provider }: any) => {
  return (
    <div>
      <button
        className="w-100 my-3 py-2 styler d-flex align-items-center justify-content-center"
        style={{ background: `white`, color: `black` }}
      >
        {type === 'google' && <Google className="mr-2" size={19} color="#DC3545" />}
        {type === 'facebook' && <Facebook className="mr-2" size={19} color="#1094F4" />}
        {type === 'github' && <Github className="mr-2" size={19} color="#161B22" />}
        Sign in with {provider?.name}
      </button>
      <style jsx>{style}</style>
    </div>
  )
}

const style = css`
  .styler {
    border: 1px solid rgb(234, 236, 240);
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;

    box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;

    &:hover {
      box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
    }
    &:focus,
    &:active {
      box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
    }
  }
`

export default BtnLogin
