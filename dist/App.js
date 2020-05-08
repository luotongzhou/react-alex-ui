import React from 'react';
import Button from './components/Button';
import Alert from './components/Alert';
import Menu from './components/Menu';
import Tabs from './components/Tabs';
import Icon from './components/Icon';
var Item = Menu.Item, SubMenu = Menu.SubMenu;
function App() {
    return (React.createElement("div", { className: "App" },
        React.createElement("div", { style: { marginBottom: 20 } },
            React.createElement(Button, { onClick: function () { return console.log(111); } }, "Hello"),
            React.createElement(Button, { disabled: true }, "Button"),
            React.createElement(Button, { size: "lg", btnType: "primary" }, "primary"),
            React.createElement(Button, { size: "sm", btnType: "danger" }, "primary"),
            React.createElement(Button, { disabled: true, btnType: "link", href: "https://www.baidu.com" }, "Link"),
            React.createElement(Button, { btnType: "link", href: "https://www.baidu.com", target: "_blank" }, "Link")),
        React.createElement("div", { style: { marginBottom: 20 } },
            React.createElement(Alert, { title: "hello world", className: "haha", onClose: function () {
                    console.log(111);
                } }),
            React.createElement(Alert, { type: "danger", className: "haha", closable: false, title: "hello world" }),
            React.createElement(Alert, { type: "success", style: { width: 600, height: 100 }, closable: false, title: "hello world", description: "hello fucking world" })),
        React.createElement("div", { style: { marginBottom: 20 } },
            React.createElement(Menu, { mode: "vertical", defaultIndex: "1", defaultOpenSubMenus: ['3'], onSelect: function (index) { return console.log(index); } },
                React.createElement(Item, null, "1111"),
                React.createElement(Item, null, "2222"),
                React.createElement(Item, { disabled: true }, "3333"),
                React.createElement(SubMenu, { title: "444" },
                    React.createElement(Item, null, "555"),
                    React.createElement(Item, null, "666"),
                    React.createElement(Item, { disabled: true }, "777")))),
        React.createElement("div", { style: { marginBottom: 20 } },
            React.createElement(Tabs, { type: "card", defaultIndex: 1, onSelect: function (index) { return console.log(index); } },
                React.createElement(Tabs.Item, { label: "\u5B66\u6821" },
                    React.createElement("p", null, "\u4E2D\u5357\u6C11\u65CF\u5927\u5B66")),
                React.createElement(Tabs.Item, { label: "\u516C\u53F8" },
                    React.createElement("p", null, "\u817E\u8BAF")),
                React.createElement(Tabs.Item, { label: "\u57CE\u5E02" },
                    React.createElement("p", null, "\u6DF1\u5733\u5E02")),
                React.createElement(Tabs.Item, { label: "\u804C\u4E1A", disabled: true },
                    React.createElement("p", null, "\u524D\u7AEF\u5DE5\u7A0B\u5E08")))),
        React.createElement("div", { style: { marginBottom: 20 } },
            React.createElement(Icon, { icon: "arrow-down", size: "2x", theme: "success" }))));
}
export default App;
