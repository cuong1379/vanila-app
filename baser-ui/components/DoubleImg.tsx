import React from 'react'

interface DoubleImgProps {
  firstImg: string
  secondImg: string
}

const DoubleImg = ({ firstImg, secondImg }: DoubleImgProps) => {
  return (
    <>
      <div className="double-container">
        <div className='bg-white'></div>
        <img className='first-img' src={firstImg} alt="" />
        <img className='second-img' src={secondImg} alt="" />
      </div>

      <style jsx>{`
        .double-container {
          position: relative;

          img {
            position: absolute;
            top: 0px;
            left: 0px;
            z-index: 1;

            width: 350px;
          }   
        }

        .second-img {
            animation: showimage 0.5s ease-in-out 1 forwards;
        }

        .double-container:hover .first-img {
            z-index: 10;
            animation: showimage 0.5s ease-in-out 1 forwards;
        }

        .double-container:hover .second-img {
            z-index: 10;
            animation: hideimage 0.5s ease-in-out 1 forwards;
        }

        @keyframes showimage {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }

        @keyframes hideimage {
            from {
                opacity: 1;
            }
            to {
                opacity: 0;
            }
        }

      `}</style>
    </>
  )
}

export default DoubleImg
