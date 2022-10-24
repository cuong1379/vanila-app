import css from 'styled-jsx/css'

interface TextProps {
  className?: string
  children?: any
  color?: string
  b?: boolean
  size?: string
}

export const TextColor = ({ className, size = '24px', ...props }: TextProps) => {
  return (
    <>
      {props?.b ? (
        <b className={`styler ${className || ''} `} style={{ color: `${props.color}`, fontSize: `${size}` }}>
          {props.children}
        </b>
      ) : (
        <span className={`styler ${className || ''} `} style={{ color: `${props.color}`, fontSize: `${size}` }}>
          {props.children}
        </span>
      )}

      <style jsx>{style}</style>
    </>
  )
}

const style = css`
  .styler {
    color: var(--primary-100);
  }
`
