import React, { useState } from "react";
import classNames from "classnames";
import Transition from "../Transition";
import Icon from "../Icon";
/**
 *用于页面中展示重要的提示信息。 点击右侧的叉提示自动消失
 * @param keyof AlertProps
 * @returns
 */
var Alert = function (props) {
    var _a;
    var _b = useState(false), hide = _b[0], setHide = _b[1];
    var title = props.title, description = props.description, type = props.type, onClose = props.onClose, closable = props.closable, className = props.className, style = props.style;
    var classes = classNames("alex-alert", (_a = {},
        _a["alex-alert-" + type] = type,
        _a["" + className] = className,
        _a));
    var titleClass = classNames("alex-alert-title", {
        "bold-title": description
    });
    var handleClose = function (e) {
        if (onClose) {
            onClose();
        }
        setHide(true);
    };
    return (React.createElement(Transition, { in: !hide, timeout: 300, animation: "zoom-in-bottom" },
        React.createElement("div", { style: style, className: classes },
            React.createElement("span", { className: titleClass }, title),
            description && React.createElement("p", { className: "alex-alert-desc" }, description),
            closable && (React.createElement("span", { className: "alex-alert-close", onClick: handleClose },
                React.createElement(Icon, { icon: "times" }))))));
};
Alert.defaultProps = {
    type: "default",
    closable: true
};
export default Alert;
