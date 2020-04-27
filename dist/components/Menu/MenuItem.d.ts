import { FC, CSSProperties } from 'react';
export interface MenuItemProps {
    index?: string;
    /**选项是否被禁用 */
    disabled?: boolean;
    /**选项扩展的 className */
    className?: string;
    /**选项的自定义 style */
    style?: CSSProperties;
}
export declare const MenuItem: FC<MenuItemProps>;
export default MenuItem;
