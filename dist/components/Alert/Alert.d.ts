import { FC, CSSProperties } from "react";
export declare type AlertType = "success" | "default" | "danger" | "warning";
interface AlertProps {
    /**标题 */
    title: string;
    /**描述 */
    description?: string;
    /**类型 四种可选 针对四种不同的场景 */
    type?: AlertType;
    /**关闭alert时触发的事件 */
    onClose?: () => void;
    /**是否显示关闭图标*/
    closable?: boolean;
    /**添加最外层自定义类名*/
    className?: string;
    /**添加最外层自定义样式*/
    style?: CSSProperties;
}
/**
 *用于页面中展示重要的提示信息。 点击右侧的叉提示自动消失
 * @param keyof AlertProps
 * @returns
 */
declare const Alert: FC<AlertProps>;
export default Alert;
