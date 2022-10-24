import React, { useEffect } from 'react'

interface ZoomImgProps {
  imgSrc: string
  zoom?: string
  id?: string
}

const ZoomImg = ({ imgSrc, zoom = '1.5', id = '1' }: ZoomImgProps) => {
  useEffect(() => {
    var elementImgContainer = document.querySelector(`.img_producto_container_${id}`)

    elementImgContainer?.addEventListener('mouseover', function () {
      ;(document as any).querySelector(`.img_producto_${id}`).style.transform =
        'scale(' + elementImgContainer?.getAttribute('data-scale') + ')'
    })

    elementImgContainer?.addEventListener('mouseout', function () {
      ;(document as any).querySelector(`.img_producto_${id}`).style.transform = 'scale(1)'
    })

    elementImgContainer?.addEventListener('mousemove', function (e) {
      ;(document as any).querySelector(`.img_producto_${id}`).style.transformOrigin =
        (((e as any).pageX - (elementImgContainer as any).offsetLeft) / (elementImgContainer as any).offsetWidth) *
          100 +
        '% ' +
        (((e as any).pageY - (elementImgContainer as any).offsetTop) / (elementImgContainer as any).offsetHeight) *
          100 +
        '%'
    })
  }, [])

  return (
    <>
      <div className={`img_producto_container_${id}`} data-scale={zoom}>
        <div className={`img_producto_${id}`}></div>
      </div>

      <style jsx>{`
        .img_producto_container_${id} {
          width: 390px;
          height: 500px;
          position: relative;
          overflow: hidden;
          cursor: zoom-in;
        }
        .img_producto_${id} {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url(${imgSrc});
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
          transition: transform 0.3s ease-out;
        }
      `}</style>
    </>
  )
}

export default ZoomImg