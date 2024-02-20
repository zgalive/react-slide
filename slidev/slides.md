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

---

# How to install

```js
npm install react
```


---

# How to create components
```js {1-4}
class FirstComponent extends ReactComponent {
  constructor(props){
    super(props)
  }

  function abc(){
    console.log('abc')
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


