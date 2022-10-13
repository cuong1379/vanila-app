import { LoginDataType } from '@hooks'
import { message } from 'antd'
import React, { useEffect, useState } from 'react'
import css from 'styled-jsx/css'

interface AuthFormProps {
  handleLoginClick: (data: LoginDataType) => void
}

const AuthForm = ({ handleLoginClick }: AuthFormProps) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    if (!username || !password) {
      message.warning('You should fill username and password')
      return
    }
    handleLoginClick({ username, password })
  }

  useEffect(() => {
    let options = document?.querySelectorAll('.changeType')
    let form = document?.getElementById('form')
    let bgactive = document?.getElementById('bg-active')
    var rotatedeg = 0

    options.forEach((val) => {
      val.addEventListener('click', function () {
        if (val.classList.contains('active')) {
          return
        }
        form?.classList.remove('login')
        form?.classList.remove('register')
        form?.classList.add(val.id)
        ;(bgactive as any).style.left = (val as any)?.offsetLeft + 'px'
        options.forEach((item) => {
          item.classList.remove('active')
        })
        val.classList.add('active')

        rotatedeg = rotatedeg + 200
        ;(document as any).getElementById('rotate').style.transform = 'translate(-50%) rotate(' + rotatedeg + 'deg)'
      })
    })

    var input = document.getElementById('pass-login')
    input?.addEventListener('keypress', function (event) {
      if (event.key === 'Enter') {
        event.preventDefault()
        ;(document as any).getElementById('id-btn-login').click()
      }
    })
  }, [])

  return (
    <div>
      <div className="auth-form">
        <div className="container-auth">
          <div className="form login" id="form">
            <div className="content">
              <h1>Login</h1>
              <div className="group">
                <input
                  type="text"
                  id="username-login"
                  className="inputText"
                  placeholder="&nbsp;"
                  required
                  onChange={(e) => setUsername(e?.target?.value)}
                />
                <label htmlFor="username-login">Username</label>
              </div>
              <div className="group">
                <input
                  type="password"
                  id="pass-login"
                  className="inputText"
                  placeholder="&nbsp;"
                  required
                  onChange={(e) => setPassword(e?.target?.value)}
                />
                <label htmlFor="pass-login">Password</label>
              </div>
              <div className="group">
                <input type="checkbox" /> Save login
              </div>
              <button className="option-btn" id="id-btn-login" onClick={handleLogin}>
                Login
              </button>
            </div>

            <div className="content">
              <h1>Register</h1>
              <div className="group">
                <input type="text" id="username-reg" className="inputText" placeholder="&nbsp;" required />
                <label htmlFor="username-reg">Username</label>
              </div>
              <div className="group">
                <input type="password" id="email-reg" className="inputText" placeholder="&nbsp;" required />
                <label htmlFor="email-reg">Email</label>
              </div>
              <div className="group">
                <input type="password" id="pass-reg" className="inputText" placeholder="&nbsp;" required />
                <label htmlFor="pass-reg">Password</label>
              </div>
              <div className="group checkbox-group">
                <input type="checkbox" /> Save login
              </div>
              <button className="option-btn">Register</button>
            </div>

            <div className="form-rotate">
              <div id="rotate"></div>
            </div>
          </div>
          <div className="option">
            <div className="bg-active" id="bg-active"></div>
            <div className="changeType active option-btn" id="login">
              Login
            </div>
            <div className="changeType option-btn" id="register">
              Register
            </div>
          </div>
        </div>
      </div>
      <style jsx>{style}</style>
    </div>
  )
}

export default AuthForm

const style = css`
  .auth-form {
    background-image: linear-gradient(to bottom right, var(--primary-50), var(--primary-100));
    height: 100vh;
    overflow: hidden;
  }
  .container-auth {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    height: 70vh;
    z-index: 1;
  }
  .container-auth::before {
    position: absolute;
    bottom: 50%;
    left: 80%;
    width: 600px;
    height: 600px;
    content: '';
    background-image: linear-gradient(to top right, var(--primary-50), var(--primary-100));
    border-radius: 50%;
    z-index: -1;
    animation: backgroundanimation 6s ease-in-out 2s infinite alternate;
  }
  .container-auth::after {
    position: absolute;
    top: 50%;
    right: 60%;
    width: 400px;
    height: 400px;
    content: '';
    background-image: linear-gradient(to top right, var(--primary-50), var(--primary-100));
    border-radius: 50%;
    z-index: -1;
    filter: blur(10px);
    animation: backgroundanimation 5s ease-in-out infinite alternate;
  }
  @keyframes backgroundanimation {
    from {
      transform: translate(0, 0);
    }
    to {
      transform: translate(0, 100px);
    }
  }
  .form {
    background-color: rgb(239, 239, 239, 0.3);
    width: 100%;
    height: 100%;
    border-radius: 30px;
    overflow: hidden;
    position: absolute;
  }
  .content {
    width: 100%;
    padding: 10%;
    height: auto;
    position: absolute;
    margin-top: 10%;
  }
  h1 {
    color: #fff;
    margin-bottom: 10px;
  }
  button {
    width: 80%;
    border: none;
    margin-top: 20px;
    padding: 10px 0;
    position: absolute;
    bottom: 0;
    background-image: linear-gradient(to right, var(--primary-50), var(--primary-100));
    color: #fff;
  }
  .option-btn {
    cursor: pointer;
  }
  .group {
    height: 60px;
    position: relative;
    margin-bottom: 30px;
    width: 100%;
  }
  .group label {
    position: absolute;
    top: 40px;
    left: 10%;
    transition: 0.5s;
  }
  .group .inputText {
    margin-top: 30px;
    width: 100%;
    padding: 0 10%;
    height: 45px;
    border: none;
    outline: none;
    background-color: rgb(255, 255, 255, 0.6);
  }
  .inputText:focus + label,
  .inputText:not(:placeholder-shown) + label {
    top: 0;
    left: 10%;
  }
  .inputText:valid {
    border-bottom: 1px solid #909fee;
  }
  input[type='checkbox'] + label {
    position: unset;
  }
  input[type='checkbox'] {
    margin-top: 10px;
  }
  .checkbox-group {
    margin-bottom: 10px;
  }
  .form-rotate {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    z-index: -1;
  }
  #rotate {
    background-image: linear-gradient(to right, var(--primary-50), var(--primary-100));
    width: 500px;
    height: 500px;
    border-radius: 30% 70% 70% 30% / 30% 43% 57% 70%;
    z-index: -1;
    position: absolute;
    top: -200px;
    left: 50%;
    transform: translate(-50%);
    transition: 1s;
  }
  .option {
    position: absolute;
    bottom: 10px;
    width: 70%;
    left: 50%;
    transform: translate(-50%);
  }
  .changeType {
    width: 50%;
    float: left;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 1s;
    height: 40px;
  }
  .bg-active {
    position: absolute;
    width: 50%;
    left: 0;
    transition: 1s;
    background-color: var(--primary-50);
    height: 40px;
    z-index: -1;
    border-radius: 20px;
  }
  .changeType.active {
    color: #fff;
  }
  .form.login .content:nth-child(1) {
    z-index: 1;
    animation: nextContent 1s ease-in-out 1 forwards;
  }
  .form.login .content:nth-child(2) {
    z-index: 1;
    animation: outContent 1s ease-in-out 1 forwards;
  }
  @keyframes nextContent {
    from {
      transform: translate(100%, 0px);
    }
    to {
      transform: translate(0, 0px);
    }
  }
  @keyframes outContent {
    from {
      transform: translate(0, 0px);
    }
    to {
      transform: translate(-100%, 0px);
    }
  }
  .form.register .content:nth-child(2) {
    z-index: 1;
    animation: nextContent 1s ease-in-out 1 forwards;
  }
  .form.register .content:nth-child(1) {
    z-index: 1;
    animation: outContent 1s ease-in-out 1 forwards;
  }

  @media screen and (max-width: 850px) {
    .container-auth::before {
      display: none;
    }
  }

  @media screen and (max-width: 1400px) {
    .container-auth::before {
      position: absolute;
      bottom: 50%;
      left: 80%;
      width: 300px;
      height: 300px;
      content: '';
      background-image: linear-gradient(to top right, var(--primary-50), var(--primary-100));
      border-radius: 50%;
      z-index: -1;
      animation: backgroundanimation 6s ease-in-out 2s infinite alternate;
    }
  }
`
