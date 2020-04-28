import React, { FC, useState, CSSProperties } from 'react'
import classNames from 'classnames'
import Transition from '../Transition'
import Icon from '../Icon'

export type AlertType = 'success' | 'default' | 'danger' | 'warning'

interface AlertProps {
  /**标题 */
  title: string
  /**描述 */
  description?: string
  /**类型 四种可选 针对四种不同的场景 */
  type?: AlertType
  /**关闭alert时触发的事件 */
  onClose?: () => void
  /**是否显示关闭图标*/
  closable?: boolean
  /**添加最外层自定义类名*/
  className?: string
  /**添加最外层自定义样式*/
  style?: CSSProperties
}

/**
 *用于页面中展示重要的提示信息。 点击右侧的叉提示自动消失
 * @param keyof AlertProps
 * @returns
 */
const Alert: FC<AlertProps> = (props) => {
  const [hide, setHide] = useState(false)
  const { title, description, type, onClose, closable, className, style } = props

  const classes = classNames('alex-alert', {
    [`alex-alert-${type}`]: type,
    [`${className}`]: className
  })

  const titleClass = classNames('alex-alert-title', {
    'bold-title': description
  })

  const handleClose = (e: React.MouseEvent) => {
    if (onClose) {
      onClose()
    }
    setHide(true)
  }

  return (
    <Transition in={!hide} timeout={300} animation="zoom-in-bottom">
      <div style={style} className={classes}>
        <span className={titleClass}>{title}</span>
        {description && <p className="alex-alert-desc">{description}</p>}
        {closable && (
          <span className="alex-alert-close" onClick={handleClose}>
            <Icon icon="times" />
          </span>
        )}
      </div>
    </Transition>
  )
}

Alert.defaultProps = {
  type: 'default',
  closable: true
}

export default Alert
