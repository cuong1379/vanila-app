import css from 'styled-jsx/css'

export const animation = css.global`
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
