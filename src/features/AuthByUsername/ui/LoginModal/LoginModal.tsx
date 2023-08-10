import { classNames } from 'shared/lib/classNames/classNames'

import { Modal } from 'shared/ui/Modal/Modal'
import { LoginForm } from '../LoginFrom/LoginForm'

import styles from './LoginModal.module.scss'

interface LoginModalProps {
  className?: string
  isOpen: boolean
  onClose: () => void
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => {
  return (
    <Modal
      className={classNames(styles.LoginModal, {}, [className])}
      isOpen={isOpen}
      onClose={onClose}
    >
      <LoginForm />
    </Modal>
  )
}
