import { Modal as AntdModal } from 'antd'
import css from 'styled-jsx/css'

interface ModalProps {
  visible: boolean
  title?: string
  children?: any
  handleOk?: () => void
  handleCancel?: () => void
}

export const Modal = ({ visible, title = 'Basic Modal', handleOk, handleCancel, children }: ModalProps) => {
  return (
    <div className="modal-style">
      <AntdModal title={title} visible={visible} onOk={handleOk} onCancel={handleCancel}>
        {children}
      </AntdModal>
      <style jsx>{style}</style>
    </div>
  )
}

const style = css`
  :global(.modal-style .ant-modal-content .ant-modal-header) {
    border-radius: 8px;
  }
`
