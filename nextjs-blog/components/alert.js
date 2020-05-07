import styles from './alert.module.css'
import classnames from 'classnames'

export default function Alert({ type, children }) {
  return (
    <div
      className={classnames({
        [styles.success]: type === 'success',
        [styles.error]: type === 'error'
      })}
    >
      {children}
    </div>
  )
}