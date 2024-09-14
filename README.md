# Vace

## 概述

Vace 是一个专为小米手环8设计的现代化框架。它提供了控件管理、事件管理、数据管理、样式管理等功能，并且支持响应式数据绑定和组件化开发。

## 主要模块

### 1. 控件管理 (`Vacm`)

`Vacm` 模块负责创建和管理各种 UI 控件，如标签 (`label`)、图片 (`img`)、按钮 (`btn`)、对象 (`obj`)、弧形 (`arc`)、线条 (`line`) 等。

#### 方法

- `createWidget(type, config)`: 创建指定类型的控件。
  - `type`: 控件类型（如 `'label'`, `'img'`, `'btn'` 等）。
  - `config`: 控件配置对象。

- `createLabel(config)`: 创建标签控件。
- `setLabelText(id, text)`: 设置标签文本。
- `setLabelFont(id, font)`: 设置标签字体。
- `setLabelColor(id, color)`: 设置标签颜色。
- `setLabelContentCenter(id)`: 设置标签内容居中。
- `setLabelContentAlign(id)`: 设置标签内容对齐方式。

- `createImg(config)`: 创建图片控件。
- `setImgSrc(id, src)`: 设置图片源。

- `createBtn(config)`: 创建按钮控件。

- `createObj(config)`: 创建对象控件。
- `setObjSize(id, w, h)`: 设置对象大小。
- `setObjPos(id, x, y)`: 设置对象位置。
- `setObjClick(id, func)`: 设置对象点击事件。
- `setObjHidden(id)`: 隐藏对象。
- `setObjDisplay(id)`: 显示对象。
- `setObjDel(id)`: 删除对象。

- `createArc(config)`: 创建弧形控件。
- `setArcFgColor(id, color)`: 设置弧形前景色。
- `setArcFgWidth(id, width)`: 设置弧形前景宽度。
- `setArcFgRadius(id, radius)`: 设置弧形前景半径。
- `setArcBgColor(id, color)`: 设置弧形背景色。
- `setArcBgWidth(id, width)`: 设置弧形背景宽度。
- `setArcBgRadius(id, radius)`: 设置弧形背景半径。

- `createLine(config)`: 创建线条控件。
- `setLinePoint(id, x, y)`: 设置线条点。
- `setLineWidth(id, width)`: 设置线条宽度。
- `setLineColor(id, color)`: 设置线条颜色。

### 2. 事件管理 (`VaceEventManager`)

`VaceEventManager` 模块负责管理控件的事件，如点击事件、旋转事件、移动事件等。

#### 方法

- `addEvent(id, eventType, callback)`: 为控件添加事件。
  - `id`: 控件 ID。
  - `eventType`: 事件类型。
  - `callback`: 事件回调函数。

- `registerEvent(event)`: 注册事件。
- `rotate90Degrees(id, angle)`: 旋转控件 90 度。
- `moveHorizontal(id, distance, duration)`: 水平移动控件。
- `moveVertical(id, distance, duration)`: 垂直移动控件。

### 3. 数据管理 (`VaceDataManager`)

`VaceDataManager` 模块负责数据的存储和读取。

#### 方法

- `saveDataToFile(data)`: 将数据保存到文件。
- `readDataToFile(keys)`: 从文件读取数据。
- `write(data)`: 写入数据。
- `read(key)`: 读取数据。

### 4. 样式管理 (`VaceStyleManager`)

`VaceStyleManager` 模块负责管理控件的样式。

#### 方法

- `createStyle(id)`: 创建样式。
- `setStyleOpa(id, opacity)`: 设置样式透明度。
- `setStyleBg(id, color)`: 设置样式背景色。
- `resetStyle(id)`: 重置样式。

### 5. 公共接口 (`VaceCommonInterface`)

`VaceCommonInterface` 模块提供了一些常用的公共接口。

#### 方法

- `exitGame()`: 退出游戏。
- `getJsParent()`: 获取父级对象。
- `myPow(x, y)`: 计算幂。
- `mySqrt(x)`: 计算平方根。
- `randNum()`: 生成随机数。
- `newEventMap(id, eventType, func, flag)`: 创建事件映射。

### 6. 响应式数据 (`vaceReactive`)

`vaceReactive` 函数用于创建响应式数据对象。

#### 方法

- `vaceReactive(obj, callback)`: 创建响应式数据对象。
  - `obj`: 原始数据对象。
  - `callback`: 数据变化时的回调函数。

### 7. 组件类 (`VaceComponent`)

`VaceComponent` 类用于创建组件，支持数据绑定和方法绑定。

#### 构造函数

- `constructor(options)`: 创建组件实例。
  - `options`: 组件配置对象，包含 `data`, `methods`, `components`, `onInit`, `onReady`, `onDestroy`, `render` 等属性。

#### 方法

- `init()`: 初始化组件。
- `destroy()`: 销毁组件。
- `update()`: 更新组件。
- `getControl(id)`: 获取控件实例。
- `createControl(id)`: 创建控件实例。
- `updateControl(key, value)`: 更新控件属性。

## 示例

### 创建一个简单的页面组件

```javascript
const Page = new VaceComponent({
  data: {
    text: 'hello world',
    color: "#00FFFF"
  },
  methods: {
    onClick() {
      console.log('button clicked');
    }
  },
  render() {
    this.controls['label'] = Vacm.createWidget('label', {
      id: 'label',
      x: 20,
      y: 20,
      w: 100,
      h: 20,
      text: this.text,
      font: 4163,
      color: this.color,
      contentCenter: true,
      contentAlign: true
    });

    this.controls['btn'] = Vacm.createWidget('btn', {
      id: 'btn',
      x: 20,
      y: 80,
      w: 40,
      h: 20,
      onClick: this.onClick
    });

    return { label: this.controls['label'], btn: this.controls['btn'] };
  },
  onReady() {
    setTimeout(() => {
      this.color = "#FFFFFF";
      this.text = 'new text';
    }, 1000);
  }
});
```

### 使用响应式数据

```javascript
const reactiveData = vaceReactive({ count: 0 }, (key, value) => {
  console.log(`${key} changed to ${value}`);
});

reactiveData.count += 1; // 输出: count changed to 1
```

## 备注
我还没有做好很多功能，例如控件的响应式变量尚未完善，目前仅支持“伪响应式变量”（即在 updateControl 里提前添加变量名）））））））））
