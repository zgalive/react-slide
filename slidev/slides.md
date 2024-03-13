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

create-react-app (还能用，但已经被官方抛弃)
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
父组件可以通过props向子组件传参, 类似Angular input。
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
setState是一个merge的操作
```js
this.state = {
  name: 'Jack',
  age: 20,
  hobbies: ['basketball', 'swimming']
}
setState({age: 21})
```
---

# Life cycle
###
同Angular组件，React class component也有自己的生命周期钩子。
<!-- ![Local Image](/ReactLifecycle.PNG) -->
<img style="height: calc(100% - 66px)" src='ReactLifecycle.PNG'>
---

# Function components(recommended)
###
Function components即用写方法的方式，去编写react组件。
Class components中的props通过函数传参的方式传递。
```js
function Greeting({name}){
  return <h1>Hello, {name}!</h1>
}
```
```html
<Greeting name='Tom'>
```
---

# React Hooks
###
React Hooks能够使函数组件使用react的一些特性。v16.3版本后引入  
Hooks都以use开头, useEffect,useMemo,useRef   
useState能够在函数组件中模拟state以及setState
```js
const [index, setIndex] = useState(0);
```
定义了一个index的初始状态，setIndexuseState返回的用于更新index状态的函数，调用setIndex(newValue)来更新index状态。   

---

# React Render
<img src='ComponentRender.PNG'> 
---

# Virtual Dom
#### Virtual Dom虚拟dom 最先由facebook提出，最先运用于React，之后在Vue中也有运用。   
虚拟dom就是树形结构的js对象，虚拟dom出现之前，只能遍历dom去寻找指定的dom，引入虚拟dom之后，找到js对应的节点对象，就可找到对应的dom

```html
<ul id="list">
    <li class="item">Item1</li>
    <li class="item">Item2</li>
</ul>
```

```js {all}{maxHeight:'200px'}
{
	tag: 'ul',
	attrs: {
		id: 'list'
	},
	children: [{
			tag: 'li',
			attrs: {
				className: 'item'
			},
			children: ['Item 1']
		},
		{
			tag: 'li',
			attrs: {
				className: 'item'
			},
			children: ['Item 2']
		}
	]
}
```
---

# React Diff
###
渲染dom的开销很大，为了减少回流和重绘并只更新需要的一部分dom，diff算法帮助我们实现了这一点。   
本质：**找出两个虚拟dom对象之间的差异，尽可能节点复用**。   
React diff 有三种策略：   
1. Tree Diff
2. Component Diff
3. Element Diff
---

# Tree Diff
###
只对同层级的节点进行比较，如果发现节点不存在，那么直接删除
![Local Image](/TreeDiff.PNG)
---

# Component Diff
###
对同一个层级的同一个节点进行比较，如果是同一个类的组件，就往下进行比较，如果不同，那么就先删除后创建
![Local Image](/ComponentDiff.PNG)
---

# Element Diff
###
Element Diff 分为三种操作   
1.添加：新的节点不在旧集合中，对新节点进行插入操作   
2.移动：节点存在于旧集合中且是可更新的类型，此时可复用之前的node节点，更新属性，执行移动操作。  
3.删除：原节点不在新的集合中，或者在新的集合中不能直接复用或更新，对原节点执行删除操作。   

---

# React Fiber
###
React Fiber是react v16版本之后引入的架构。   

js线程和渲染线程是互斥的，同一时间只能有一个线程执行，所以当js线程占用过多时间，用户会觉得页面卡顿。   

可以通过把大的任务分片，优化或者减少页面卡顿问题，React Fiber便产生了。   

通俗的理解为：   
把一个大型计算任务，分割成了一个一个微小的任务，微小任务执行完，检查是否有高优先级任务，以及该次渲染是否有空闲时间,
如果有，则完成高优先级任务或者等待下一次渲染间隔去继续执行微小任务。   

---

# React Fiber
<img style="height: calc(100% - 20px)" src='ReactFiber.png'> 
---

# Summary
### 
React v16版本进行了重大改革，重命名了一些生命周期函数，引入react hooks，react fiber。
<div><v-click>React is library</v-click>
<v-click>=>Two Component Types </v-click>
<v-click>=>Class Component</v-click>
<v-click>=>State(UI=F(D))</v-click>
<v-click>=>LifeCycle</v-click>
<v-click>=>Function Component</v-click>
<v-click>=>React Hooks</v-click></div>     

<div><v-click>Virtual Dom</v-click>
<v-click>=>React Diff</v-click>
<v-click>=>React Fiber</v-click></div>   
<a target='_blank' href='https://component-party.dev' v-click>https://component-party.dev</a>
<img style="height: calc(100% - 200px)" v-click src='/Learning.PNG'/>

---

# Taro
###
https://taro-docs.jd.com/docs/
![Local Image](/Taro.PNG)
---

# Electron
###
https://www.electronjs.org/ https://zhuanlan.zhihu.com/p/342806849   
Electron is a framework for building desktop applications using JavaScript, HTML, and CSS. 
<!-- ![Local Image](/Electron.PNG) -->
<img style="height: calc(100% - 100px)" src='Electron.PNG'> 

---
layout: end
---
# Thanks
