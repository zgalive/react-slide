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
React是用于构建用户界面的JavaScript库, 由Facebook研发。   
1. 声明式设计：React使创建交互式UI变得简单, **UI=F(D)**
2. 组件化：构建管理自身 **状态(State)** 的封装组件，然后组合构成复杂界面   
3. 高效：通过使用 **虚拟dom**，减少了与真实DOM的交互   
4. 灵活：因为React是个库，所以能够在不同的技术栈中使用   
---


# How to install
###
可以使用不同的框架（脚手架）去创建React应用，也可以自行通过webpack构建React应用   

Next.js
```js
npx create-next-app@latest
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
```js {1-4}
class FirstComponent extends ReactComponent {
  constructor(props){
    super(props)
  }

  function render(){
    return <div>Hello world</div>
  }
}
```

---

# Class components

---

# Function components

---

# Life cycle

---
# Write with typescript
# Compare to angular
# Router
# Taro, Electron


