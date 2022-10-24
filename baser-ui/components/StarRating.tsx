import React, { FC, useEffect, useState } from 'react'
import css from 'styled-jsx/css'

type StarRatingProps = {
  editable?: boolean
  rating?: number
  onChange?: (idx: number) => void
  className?: string
}

const StarRating: FC<StarRatingProps> = ({ editable = false, rating = 0, onChange, className }) => {
  const [currentRating, setCurrentRating] = useState(rating)

  useEffect(() => setCurrentRating(rating), [rating])

  const onMouseEnter = (idx: number) => () => editable && setCurrentRating(idx)

  const onMouseLeave = () => editable && setCurrentRating(rating)

  const onClick = (idx: number) => () => onChange?.(idx)

  return (
    <div className={`star-rating is-inline-flex ${className || ''}`}>
      <style jsx global>
        {globalStyle}
      </style>
      {[1, 2, 3, 4, 5].map((idx) => {
        return (
          <React.Fragment key={idx}>
            {Math.floor(currentRating) >= idx ? (
              <svg
                className={`star mr-1 ${editable ? 'editable' : ''}`}
                height="13"
                viewBox="0 0 13 13"
                width="13"
                xmlns="http://www.w3.org/2000/svg"
                onMouseEnter={onMouseEnter(idx)}
                onMouseLeave={onMouseLeave}
                onClick={onClick(idx)}
              >
                <path
                  d="m73.9513043 10.85-4.1400526 1.813119.4557424-4.47340357-3.0144356-3.35283439 4.4217169-.95159647 2.2770289-3.88528457 2.277029 3.88528457 4.4217169.95159647-3.0144356 3.35283439.4557424 4.47340357z"
                  fill={'  #FFC107'}
                  fillRule="evenodd"
                  transform="translate(-67)"
                />
              </svg>
            ) : (
              <>
                {Math.floor(currentRating) + 1 === idx && Math.floor(currentRating) !== currentRating ? (
                  <svg
                    className={`star mr-1 star-half`}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0_15608_28270"
                      style={{ maskType: 'alpha' }}
                      maskUnits="userSpaceOnUse"
                      x="1"
                      y="1"
                      width="14"
                      height="14"
                    >
                      <path
                        d="M8.00065 1.3335C8.23133 1.3335 8.44201 1.46445 8.54411 1.6713L10.276 5.17983L14.1489 5.74592C14.3771 5.77927 14.5666 5.93928 14.6378 6.15868C14.7089 6.37807 14.6493 6.61883 14.4841 6.77976L11.6822 9.50885L12.3434 13.3643C12.3824 13.5917 12.2889 13.8215 12.1023 13.9571C11.9156 14.0927 11.6682 14.1106 11.464 14.0032L8.00065 12.1819L4.5373 14.0032C4.33311 14.1106 4.08566 14.0927 3.899 13.9571C3.71235 13.8215 3.61887 13.5917 3.65787 13.3643L4.31913 9.50885L1.51719 6.77976C1.35197 6.61883 1.29241 6.37807 1.36355 6.15868C1.43469 5.93928 1.62419 5.77927 1.85241 5.74592L5.72535 5.17983L7.45719 1.6713C7.5593 1.46445 7.76997 1.3335 8.00065 1.3335Z"
                        fill="#222427"
                      />
                    </mask>
                    <g mask="url(#mask0_15608_28270)">
                      <rect width="8" height="16" fill="#FBC02D" />
                      <rect x="8" width="8" height="16" fill="#E0E3E9" />
                    </g>
                  </svg>
                ) : (
                  <>
                    <svg
                      className={`star mr-1 ${editable ? 'editable' : ''}`}
                      height="13"
                      viewBox="0 0 13 13"
                      width="13"
                      xmlns="http://www.w3.org/2000/svg"
                      onMouseEnter={onMouseEnter(idx)}
                      onMouseLeave={onMouseLeave}
                      onClick={onClick(idx)}
                    >
                      <path
                        d="m73.9513043 10.85-4.1400526 1.813119.4557424-4.47340357-3.0144356-3.35283439 4.4217169-.95159647 2.2770289-3.88528457 2.277029 3.88528457 4.4217169.95159647-3.0144356 3.35283439.4557424 4.47340357z"
                        fill={'#d1d1d1'}
                        fillRule="evenodd"
                        transform="translate(-67)"
                      />
                    </svg>
                  </>
                )}
              </>
            )}
          </React.Fragment>
        )
      })}
    </div>
  )
}

const globalStyle = css.global`
  .star-rating {
    height: 15px;
    align-items: center;
    display: flex;

    .star {
      height: 100%;
      width: auto;
      cursor: pointer;

      &:not(:last-child) {
        margin-right: 5px;
      }

      &.editable {
        cursor: pointer;
      }
    }

    .star-half {
      height: 19px;
    }
  }
`

export default StarRating
