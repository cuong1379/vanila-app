import css from 'styled-jsx/css'
import { Input as AntInput } from 'antd'
import { Eye, EyeSlash } from 'react-bootstrap-icons'

interface InputProps {
  className?: string
  prefix?: any
  placeholder?: string
  name?: string
  size?: 'large' | 'middle' | 'small'
  disabled?: boolean
  value?: string
  onChange?: (e: any) => void
  onPressEnter?: () => void
  password?: boolean
}

export const Input = ({ className, ...props }: InputProps) => {
  return (
    <div className="myInput">
      {props?.password ? (
        <AntInput.Password
          iconRender={(visible) => (visible ? <Eye /> : <EyeSlash />)}
          className={`${className || ''} `}
          size={props.size || 'middle'}
          placeholder={props.placeholder || 'This is my content'}
          name={props?.name}
          prefix={props.prefix}
          disabled={props.disabled}
          value={props.value}
          onChange={props.onChange}
          onPressEnter={props.onPressEnter}
        />
      ) : (
        <AntInput
          className={`${className || ''} `}
          size={props.size || 'middle'}
          placeholder={props.placeholder || 'This is my content'}
          name={props?.name}
          prefix={props.prefix}
          disabled={props.disabled}
          value={props.value}
          onChange={props.onChange}
          onPressEnter={props.onPressEnter}
        />
      )}

      <style jsx>{style}</style>
    </div>
  )
}

const style = css`
  :global(.myInput .ant-input) {
    border-radius: var(--round-8);
    padding: 8px 16px;
    font-size: 18px;
    border: 1px solid var(--indigo-3);
  }
  :global(.myInput .ant-input-affix-wrapper) {
    border-radius: var(--round-8);
    padding: 8px 16px;
    font-size: 18px;
    border: 1px solid var(--indigo-3);
  }
`
