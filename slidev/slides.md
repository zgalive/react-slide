# React
Gang Zhu

2024/03/14
---

# Agenda
## 
1.What is React

2.React components

3.React features

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
3. 高效：通过使用 **虚拟dom**，**diff算法**，**react fiber**，减少了与真实DOM的交互,优化了渲染过程    
4. 灵活：因为React是个库，所以能够在不同的技术栈中使用,小程序，移动app，桌面应用程序都可以使用react开发   
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
###
React提供了两种构建组件的方式
1. Class component
2. Function component(recommended)

---

# Class components
###
通过render函数渲染UI，每一个class component都需要一个render函数。   
React组件命名需要首字母大写，从而区分是react组件还是原生组件。   
父组件可以通过props向子组件传参。
```js {all|2|4}
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

# State
###
UI=F(D), D即是data，也是指程序当前的状态state(Object对象)，通过setState更新状态（数据）
```js
this.state = {
  name: 'Jack',
  age: 20,
  hobbies: ['basketball', 'swimming']
}
```
---

# Life cycle
### 同Angular组件，React class component也有自己的生命周期钩子。
<!-- ![Local Image](/ReactLifecycle.PNG) -->
<img style="height: calc(100% - 66px)" src='ReactLifecycle.PNG'>
---

# Function components(recommended)
Function components即用写方法的方式，去编写react组件。
Class components中的props通过函数传参的方式传递。
```js
function Greeting({name: string}){
  return <h1>Hello, {name}!</h1>
}
```
---

# React Hooks
### React Hooks能够使函数组件使用react的一些特性。   
useState能够在函数组件中模拟state以及setState
---

# Virtual Dom
### Virtual Dom虚拟dom 最先由facebook提出，最先运用于React，之后在Vue中也有运用。   
虚拟dom就是树形结构的js对象，虚拟dom出现之前，只能遍历dom去寻找指定的dom，引入虚拟dom之后，找到js对应的节点对象，就可找到对应的dom

---

# React diff
### 渲染dom的开销很大，为了减少回流和重绘并只更新需要的一部分dom，diff算法帮助我们实现了这一点。
本质：找出两个虚拟dom对象之间的差异，尽可能节点复用。

---

# React fiber
---

# Compare to angular
---

# Summary
### React=>Two Component Types=>Class Component=>State=>LifeCycle=>Function Component=>React Hooks
### Virtual Dom => React Diff => React Fiber

# Taro
### https://taro-docs.jd.com/docs/
![Local Image](/Taro.PNG)
---

# Electron
### https://www.electronjs.org/ https://zhuanlan.zhihu.com/p/342806849
Electron is a framework for building desktop applications using JavaScript, HTML, and CSS. 
![Local Image](/Electron.PNG)
