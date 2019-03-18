import React from 'react'
interface ModalProps {
  closeModal():void,
  children: any
}

function Modal (props: ModalProps) {
  const { closeModal, children } = props
  return (
    <div>
      <div
        className="modal-backdrop"
        onClick={() => closeModal() }>
      </div>
      <div className="modal">
        {children}
      </div>
    </div>
  )
}

export { Modal }
