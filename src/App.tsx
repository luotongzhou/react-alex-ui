import React from 'react'
import Button from './components/Button'
import Alert from './components/Alert'
import Menu from './components/Menu'
import Tabs from './components/Tabs'
import Icon from './components/Icon'
const { Item, SubMenu } = Menu

function App() {
  return (
    <div className="App">
      <div style={{ marginBottom: 20 }}>
        <Button onClick={() => console.log(111)}>Hello</Button>
        <Button disabled>Button</Button>
        <Button size="lg" btnType="primary">
          primary
        </Button>
        <Button size="sm" btnType="danger">
          primary
        </Button>
        <Button disabled btnType="link" href="https://www.baidu.com">
          Link
        </Button>
        <Button btnType="link" href="https://www.baidu.com" target="_blank">
          Link
        </Button>
      </div>
      <div style={{ marginBottom: 20 }}>
        <Alert
          title="hello world"
          className="haha"
          onClose={() => {
            console.log(111)
          }}
        />
        <Alert type="danger" className="haha" closable={false} title="hello world" />
        <Alert
          type="success"
          style={{ width: 600, height: 100 }}
          closable={false}
          title="hello world"
          description="hello fucking world"
        />
      </div>
      <div style={{ marginBottom: 20 }}>
        <Menu mode="vertical" defaultIndex="1" defaultOpenSubMenus={['3']} onSelect={(index) => console.log(index)}>
          <Item>1111</Item>
          <Item>2222</Item>
          <Item disabled>3333</Item>
          <SubMenu title="444">
            <Item>555</Item>
            <Item>666</Item>
            <Item disabled>777</Item>
          </SubMenu>
        </Menu>
      </div>
      <div style={{ marginBottom: 20 }}>
        <Tabs type="card" defaultIndex={1} onSelect={(index) => console.log(index)}>
          <Tabs.Item label="学校">
            <p>中南民族大学</p>
          </Tabs.Item>
          <Tabs.Item label="公司">
            <p>腾讯</p>
          </Tabs.Item>
          <Tabs.Item label="城市">
            <p>深圳市</p>
          </Tabs.Item>
          <Tabs.Item label="职业" disabled>
            <p>前端工程师</p>
          </Tabs.Item>
        </Tabs>
      </div>
      <div style={{ marginBottom: 20 }}>
        <Icon icon="arrow-down" size="2x" theme="success" />
      </div>
    </div>
  )
}

export default App
