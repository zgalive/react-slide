# React
Gang Zhu

2024/03/01
---

# Agenda
## 
1.What is JSX

2.What is React

3.React components

---

# What is JSX
##
JSX是一种JavaScript的扩展语言，能够允许在JS中编写html

React使用JSX来编写component，以及构建UI。

typescript有相对应的tsx

```js {all|3|5}
function getGreeting(user) {
    if (user) {
        return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
}
```

---

# What is React
###
React是用于构建用户界面的JavaScript库, 由Facebook研发。React本身不提供路由，数据获取等功能，所以它仅仅是个库，需要依赖其他工具库完成项目构建。
如react-router提供路由功能，axios提供数据获取功能等等。   
1. 声明式设计：React使创建交互式UI变得简单, **UI=F(D)**
2. 组件化：构建管理自身 **状态(State)** 的封装组件，然后组合构成复杂界面   
3. 高效：通过使用 **虚拟dom**，减少了与真实DOM的交互   
4. 灵活：因为React是个库，所以能够在不同的技术栈中使用   
---


# How to install
###
可以使用不同的框架（脚手架）去创建React应用，也可以自行通过webpack构建React应用   

Vite
```js
npm create vite@latest xxx -- --template react-ts
```
Remix
```js
npx create-remix
```
create-react-app (还能用，推荐初学者，但已经被官方抛弃)
```js
npx create-react-app my-app
```

---

# How to create components
React提供了两种构建组件的方式
1. Class component
2. Function component(recommended)

---

# Class components
```js
import { Component } from 'react';
class Greeting extends Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}
```
```html
<Greeting name="Taylor" />
```

---
# Life cycle

---
# Function components(recommended)

---

# React diff
# React 
# Compare to angular
# Router
# Taro, Electron


