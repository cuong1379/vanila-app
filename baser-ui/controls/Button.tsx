import React from 'react'

export interface ButtonProps extends Omit<React.HTMLProps<HTMLButtonElement>, 'type' | 'size'> {
  type?:
    | 'primary'
    | 'secondary'
    | 'white'
    | 'neutral'
    | 'neutralBorder'
    | 'secondaryBorder'
    | 'neutralLink'
    | 'secondaryLink'
    | 'whiteShadow'
    | 'lightOrange'
    | 'lightRed'
    | 'lightBlue'
  size?: 'big' | 'medium' | 'small' | 'tiny'
  isLoading?: boolean
  width?: string
  isShadow?: boolean
}

export function Button({
  type = 'primary',
  size = 'medium',
  isLoading = false,
  className = '',
  children,
  width = 'auto',
  isShadow = true,
  ...props
}: React.PropsWithChildren<ButtonProps>) {
  return (
    <button
      className={`button_ ${type} ${size} ${className} ${!isShadow && 'no-shadow'} ${isLoading && 'is-loading'}`}
      {...props}
    >
      {children}
      <style jsx>{`
        .button_ {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-family: var(--font);
          font-weight: 500;
          border-radius: var(--round-4);
          padding: 7px 12px;
          height: 40px;
          width: ${width};
          transition: background-color var(--transition), border-color var(--transition), color var(--transition);

          color: var(--white-100);
          background-color: var(--primary-100);
          border: 2px solid;
          border-color: var(--primary-100);

          &:hover {
            background-color: var(--primary-100-darker);
            border-color: var(--primary-100-darker);
          }
          &:focus,
          &:active {
            background-color: var(--primary-100-dark);
            border-color: var(--primary-100-dark);
          }
          &:disabled {
            cursor: default;
            opacity: 0.8;
            pointer-events: none;
          }

          &.secondary {
            background-color: var(--secondary-100);
            border-color: var(--secondary-100);
            &:hover {
              background-color: var(--secondary-100-darker);
              border-color: var(--secondary-100-darker);
            }
            &:focus,
            &:active {
              background-color: var(--secondary-100-dark);
              border-color: var(--secondary-100-dark);
            }
          }

          &.white {
            background-color: var(--white-100);
            border-color: var(--white-100);
            color: var(--indigo-10);
            &:hover {
              background-color: var(--indigo-2);
              border-color: var(--indigo-2);
              color: var(--indigo-8);
            }
            &:focus,
            &:active {
              background-color: var(--indigo-1);
              border-color: var(--indigo-1);
              color: var(--indigo-8);
            }
          }

          &.whiteShadow {
            background-color: var(--white-100);
            border-color: var(--white-100);
            color: var(--indigo-10);
            box-shadow: var(--depth-8);
            &:hover {
              background-color: var(--indigo-2);
              border-color: var(--indigo-2);
              color: var(--indigo-8);
            }
            &:focus,
            &:active {
              background-color: var(--indigo-1);
              border-color: var(--indigo-1);
              color: var(--indigo-8);
            }
          }

          &.lightOrange {
            background-color: var(--orange-50);
            border-color: var(--orange-50);
            color: var(--orange-600);
            &:hover {
              background-color: var(--orange-100);
              border-color: var(--orange-50);
              color: var(--orange-600);
            }
            &:focus,
            &:active {
              background-color: var(--orange-100);
              border-color: var(--orange-50);
              color: var(--orange-600);
            }
          }

          &.lightRed {
            background-color: var(--red-50);
            border-color: var(--red-50);
            color: var(--red-600);
            &:hover {
              background-color: var(--red-100);
              border-color: var(--red-50);
              color: var(--red-600);
            }
            &:focus,
            &:active {
              background-color: var(--red-100);
              border-color: var(--red-50);
              color: var(--red-600);
            }
          }

          &.lightBlue {
            background-color: var(--blue-50);
            border-color: var(--blue-50);
            color: var(--blue-600);
            &:hover {
              background-color: var(--blue-100);
              border-color: var(--blue-50);
              color: var(--blue-600);
            }
            &:focus,
            &:active {
              background-color: var(--blue-100);
              border-color: var(--blue-50);
              color: var(--blue-600);
            }
          }

          &.neutral {
            background-color: var(--indigo-2);
            border-color: var(--indigo-2);
            color: var(--indigo-10);
            &:hover {
              background-color: var(--indigo-4);
              border-color: var(--indigo-4);
              color: var(--indigo-8);
            }
            &:focus,
            &:active {
              background-color: var(--indigo-3);
              border-color: var(--indigo-3);
              color: var(--indigo-8);
            }
          }

          &.neutralBorder {
            background-color: var(--white-100);
            border: 1px solid #dadce0;
            color: var(--gray-100);
            &:hover {
              background-color: var(--indigo-2);
            }
            &:focus,
            &:active {
              background-color: var(--indigo-1);
            }

            &.is-loading {
              color: transparent;
              &:after {
                border-right-color: transparent;
                border-top-color: transparent;
              }
            }
          }

          &.secondaryBorder {
            background-color: var(--white-100);
            border-color: var(--secondary-50);
            color: var(--secondary-100);
            &:hover {
              background-color: var(--indigo-2);
              border-color: var(--secondary-50-darker);
              color: var(--secondary-100);
            }
            &:focus,
            &:active {
              background-color: var(--indigo-1);
              border-color: var(--secondary-50-dark);
              color: var(--secondary-100);
            }
            &.is-loading {
              color: transparent;
              &:after {
                border: 2px solid var(--secondary-100);
                border-right-color: transparent;
                border-top-color: transparent;
              }
            }
          }

          &.neutralLink {
            background-color: var(--white-100);
            border-color: transparent;
            color: var(--indigo-10);
            &:hover {
              background-color: transparent;
              border-color: transparent;
              color: var(--indigo-6);
              text-decoration: underline;
            }
            &:focus,
            &:active {
              background-color: transparent;
              border-color: transparent;
              color: var(--indigo-8);
            }
          }

          &.secondaryLink {
            background-color: transparent;
            border-color: transparent;
            color: var(--secondary-100);
            &:hover {
              background-color: transparent;
              border-color: transparent;
              color: var(--secondary-100-darker);
              text-decoration: underline;
            }
            &:focus,
            &:active {
              background-color: transparent;
              border-color: transparent;
              color: var(--secondary-100-dark);
            }
          }

          &.big {
            height: 48px;
            font-family: var(--font-header);
            padding: 12px 24px;
            font-size: 14px;
            line-height: 24px;
          }

          &.small {
            height: 32px;
            border-radius: var(--round-4);
            padding: 4px 12px;
            font-size: 13px;
            line-height: 24px;
          }
          &.tiny {
            height: 28px;
            border-radius: var(--round-4);
            padding: 0px 8px;
            font-size: 11px;
            line-height: 22px;
            font-weight: 500;
          }
          &.no-shadow {
            box-shadow: none;
          }
        }
        .is-loading {
          color: transparent;
          pointer-events: none;
          position: relative;
          &:after {
            border-color: transparent transparent var(--white-100) var(--white-100);
            position: absolute;
            left: calc(50% - 0.5em);
            top: calc(50% - 0.5em);
            transform: translate(-50%, -50%);
            animation: spin 0.5s linear infinite;
            border: 2px solid var(--white-100);
            border-radius: 50%;
            border-right-color: transparent;
            border-top-color: transparent;
            content: '';
            display: block;
            height: 1em;
            width: 1em;
          }
        }
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </button>
  )
}
