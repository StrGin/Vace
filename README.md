### 小米手环8 现代化框架使用文档

#### 概述
本框架是为小米手环8定制的现代化开发框架，提供了控件管理、事件管理、数据管理、样式管理、公共接口等功能。通过Vace框架，开发者可以更方便地创建和管理手环8上的UI控件，处理事件，管理数据，以及进行样式设置。

#### 目录
1. [控件管理 (Vacm)](#控件管理-vacm)
2. [事件管理 (Vaem)](#事件管理-vaem)
3. [数据管理 (Vadm)](#数据管理-vadm)
4. [样式管理 (Vasm)](#样式管理-vasm)
5. [公共接口 (Vaci)](#公共接口-vaci)
6. [响应式数据 (vaceReactive)](#响应式数据-vacereactive)
7. [组件类 (Vace)](#组件类-vace)
8. [示例代码](#示例代码)

### 控件管理 (Vacm)
`Vacm` 模块提供了创建和管理各种控件的功能。支持的控件类型包括 `label`、`img`、`btn`、`obj`、`arc`、`line`。

#### 方法
- `createWidget(type, config)`: 创建指定类型的控件。
  - `type`: 控件类型 (`label`, `img`, `btn`, `obj`, `arc`, `line`)。
  - `config`: 控件配置对象。

#### 示例
```javascript
const label = Vacm.createWidget('label', {
  id: 'myLabel',
  x: 0,
  y: 120,
  w: 200,
  h: 20,
  text: 'Hello, World!',
  font: 4163,
  color: 0x5E4B42,
  contentCenter: true,
  contentAlign: true,
  onClick: () => {
    console.log('Label clicked!');
  }
});
```

### 事件管理 (Vaem)
`Vaem` 模块提供了事件注册和管理的功能。

#### 方法
- `addEvent(id, eventType, callback)`: 为指定控件添加事件。
  - `id`: 控件ID。
  - `eventType`: 事件类型。
  - `callback`: 事件回调函数。

#### 示例
```javascript
Vaem.addEvent('myLabel', 7, () => {
  console.log('Label clicked!');
});
```

### 数据管理 (Vadm)
`Vadm` 模块提供了数据存储和读取的功能。

#### 方法
- `saveDataToFile(data)`: 将数据保存到文件。
- `readDataToFile(keys)`: 从文件中读取数据。
- `write({key: string, value: string})`: 写入数据。
- `read(key)`: 读取指定键的数据。

#### 示例
```javascript
Vadm.write({ key: 'email', value: '2089827698@qq.com' });
Vadm.remove('email');
var email = Vadm.read('email');
console.log(email);
```

### 样式管理 (Vasm)
`Vasm` 模块提供了样式设置的功能。

#### 方法
- `createStyle(id)`: 创建样式。
- `setStyleOpa(id, opacity)`: 设置样式的不透明度。
- `setStyleBg(id, color)`: 设置样式的背景颜色。
- `resetStyle(id)`: 重置样式。

#### 示例
```javascript
const style = Vasm.createStyle('myStyle');
Vasm.setStyleOpa('myStyle', 0.5);
Vasm.setStyleBg('myStyle', 0xFFFFFF);
```

### 公共接口 (Vaci)
`Vaci` 模块提供了一些公共接口，如退出游戏、获取父节点、数学运算等。

#### 方法
- `exitGame()`: 退出游戏。
- `getJsParent()`: 获取父节点。
- `myPow(x, y)`: 计算 `x` 的 `y` 次方。
- `mySqrt(x)`: 计算 `x` 的平方根。
- `randNum()`: 生成随机数。
- `newEventMap(id, eventType, func, flag)`: 创建事件映射。

#### 示例
```javascript
Vaci.exitGame();
const parent = Vaci.getJsParent();
const random = Vaci.randNum();
```

### 响应式数据 (vaceReactive)
`vaceReactive` 函数用于创建响应式数据对象，当数据发生变化时，会自动触发回调函数。

#### 示例
```javascript
const data = vaceReactive({ count: 0 }, (key, value) => {
  console.log(`${key} changed to ${value}`);
});

data.count = 1; // 输出: count changed to 1
```

### 组件类 (Vace)
`Vace` 类是一个组件类，用于创建和管理组件。

#### 构造函数参数
- `options`: 组件配置对象，包含以下属性：
  - `data`: 组件数据。
  - `methods`: 组件方法。
  - `components`: 子组件。
  - `onInit`: 组件初始化时的回调函数。
  - `onReady`: 组件渲染完成后的回调函数。
  - `onDestroy`: 组件销毁时的回调函数。
  - `render`: 组件渲染函数。

#### 示例
```javascript
const Page = new Vace({
  data: {
    randomNumber: 0,
    color: "#FFFFFF",
    text: `Random Number: null`
  },
  methods: {
    generateRandomNumber() {
      return Vaci.randNum();
    }
  },
  render() {
    this.controls['label'] = Vacm.createWidget('label', {
      id: 'label',
      x: 0,
      y: 120,
      w: 200,
      h: 20,
      text: this.text,
      font: 4163,
      color: this.color,
      contentCenter: true,
      contentAlign: true,
      onClick: () => {
        this.text =  `Random Number: ${this.generateRandomNumber()}`
      }
    });

    return { label: this.controls['label'], btn: this.controls['btn'] };
  }
});
```

### 示例代码
以下是一个完整的示例代码，展示了如何使用Vace框架创建一个简单的页面

```javascript
const Page = new Vace({
  data: {
    randomNumber: 0,
    color: "#FFFFFF",
    text: `Random Number: null`
  },
  methods: {
    generateRandomNumber() {
      return Vaci.randNum();
    }
  },
  render() {
    this.controls['label'] = Vacm.createWidget('label', {
      id: 'label',
      x: 0,
      y: 120,
      w: 200,
      h: 20,
      text: this.text,
      font: 4163,
      color: this.color,
      contentCenter: true,
      contentAlign: true,
      onClick: () => {
        this.text =  `Random Number: ${this.generateRandomNumber()}`
      }
    });

    return { label: this.controls['label'], btn: this.controls['btn'] };
  }
});
```

### 备注
中秋放假刚做的，还不完善））））
