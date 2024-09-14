// 由 Struggle 开发
// 控件管理
const Vacm = {
  createWidget(type: any, config: any) {
    switch (type) {
      case 'label':
        return this.createLabel(config);
      case 'img':
        return this.createImg(config);
      case 'btn':
        return this.createBtn(config);
      case 'obj':
        return this.createObj(config);
      case 'arc':
        return this.createArc(config);
      case 'line':
        return this.createLine(config);
      default:
        throw new Error(`错误的属性: ${type}`);
    }
  },
  createLabel(config: { id: any; x: any; y: any; w: any; h: any; text: any; font: any; color: any; contentCenter: any; contentAlign: any; onClick: any; }) {
    const label = create_label(config.id, config.x, config.y, config.w, config.h);
    if (config.text) this.setLabelText(label, config.text);
    if (config.font) this.setLabelFont(label, config.font);
    if (config.color) this.setLabelColor(label, config.color);
    if (config.contentCenter) this.setLabelContentCenter(label);
    if (config.contentAlign) this.setLabelContentAlign(label);
    if (config.onClick) Vaem.addEvent(label, 7, config.onClick);
    return label;
  },
  setLabelText(id: any, text: any) {
    set_label_text(id, text);
  },
  setLabelFont(id: any, font: any) {
    set_label_font(id, font);
  },
  setLabelColor(id: any, color: any) {
    set_label_color(id, color);
  },
  setLabelContentCenter(id: any) {
    set_label_content_center(id);
  },
  setLabelContentAlign(id: any) {
    set_label_content_align(id);
  },
  createImg(config: { id: any; src: any; x: any; y: any; }) {
    const img = create_img(config.id, config.src, config.x, config.y);
    if (config.src) this.setImgSrc(img, config.src);
    return img;
  },
  setImgSrc(id: any, src: any) {
    set_img_src(id, src);
  },
  createBtn(config: { id: any; x: any; y: any; w: any; h: any; onClick: any; }) {
    const btn = create_btn(config.id, config.x, config.y, config.w, config.h);
    if (config.onClick) Vaem.addEvent(btn, 7, config.onClick);
    return btn;
  },
  createObj(config: { id: any; x: any; y: any; w: any; h: any; size: { w: any; h: any; }; pos: { x: any; y: any; }; onClick: any; hidden: any; display: any; del: any; }) {
    const obj = create_obj(config.id, config.x, config.y, config.w, config.h);
    if (config.size) this.setObjSize(obj, config.size.w, config.size.h);
    if (config.pos) this.setObjPos(obj, config.pos.x, config.pos.y);
    if (config.onClick) this.setObjClick(obj, config.onClick);
    if (config.hidden) this.setObjHidden(obj);
    if (config.display) this.setObjDisplay(obj);
    if (config.del) this.setObjDel(obj);
    return obj;
  },
  setObjSize(id: any, w: any, h: any) {
    set_obj_size(id, w, h);
  },
  setObjPos(id: any, x: any, y: any) {
    set_obj_pos(id, x, y);
  },
  setObjClick(id: any, func: any) {
    set_obj_click(id, func);
  },
  setObjHidden(id: any) {
    set_obj_hidden(id);
  },
  setObjDisplay(id: any) {
    set_obj_display(id);
  },
  setObjDel(id: any) {
    set_obj_del(id);
  },
  createArc(config: { id: any; x: any; y: any; w: any; h: any; start: any; end: any; timeLabel: any; fgColor: any; fgWidth: any; fgRadius: any; bgColor: any; bgWidth: any; bgRadius: any; }) {
    const arc = create_arc(config.id, config.x, config.y, config.w, config.h, config.start, config.end, config.timeLabel);
    if (config.fgColor) this.setArcFgColor(arc, config.fgColor);
    if (config.fgWidth) this.setArcFgWidth(arc, config.fgWidth);
    if (config.fgRadius) this.setArcFgRadius(arc, config.fgRadius);
    if (config.bgColor) this.setArcBgColor(arc, config.bgColor);
    if (config.bgWidth) this.setArcBgWidth(arc, config.bgWidth);
    if (config.bgRadius) this.setArcBgRadius(arc, config.bgRadius);
    return arc;
  },
  setArcFgColor(id: any, color: any) {
    set_arc_fg_color(id, color);
  },
  setArcFgWidth(id: any, width: any) {
    set_arc_fg_width(id, width);
  },
  setArcFgRadius(id: any, radius: any) {
    set_arc_fg_radius(id, radius);
  },
  setArcBgColor(id: any, color: any) {
    set_arc_bg_color(id, color);
  },
  setArcBgWidth(id: any, width: any) {
    set_arc_bg_width(id, width);
  },
  setArcBgRadius(id: any, radius: any) {
    set_arc_bg_radius(id, radius);
  },
  objModifyValue(id: any, value: any) {
    obj_modify_value(id, value);
  },
  createLine(config: { id: any; x: any; y: any; w: any; h: any; point: { x: any; y: any; }; width: any; color: any; }) {
    const line = create_line(config.id, config.x, config.y, config.w, config.h);
    if (config.point) this.setLinePoint(line, config.point.x, config.point.y);
    if (config.width) this.setLineWidth(line, config.width);
    if (config.color) this.setLineColor(line, config.color);
    return line;
  },
  setLinePoint(id: any, x: any, y: any) {
    set_line_point(id, x, y);
  },
  setLineWidth(id: any, width: any) {
    set_line_width(id, width);
  },
  setLineColor(id: any, color: any) {
    set_line_color(id, color);
  }
};

// 事件管理
const Vaem = {
  addEvent(id: any, eventType: any, callback: any) {
    addEvent(id, [eventType], callback);
  },
  registerEvent(event: any) {
    registerEvent(event);
  },
  rotate90Degrees(id: any, angle: any) {
    rotate_90_degrees(id, angle);
  },
  moveHorizontal(id: any, distance: any, duration: any) {
    move_horizontal(id, distance, duration);
  },
  moveVertical(id: any, distance: any, duration: any) {
    move_vertical(id, distance, duration);
  }
};



const Vadm = {
  saveDataToFile(data: { [x: string]: any; }) {
      Object.keys(data).forEach(key => {
          saveDataToFile({ [key]: data[key] });
      });
  },
  readDataToFile(keys: any[]) {
      const result = {};
      readDataFromFile(result);
      return keys.reduce((acc: { [x: string]: any; }, key: string | number) => {
          acc[key] = result[key];
          return acc;
      }, {});
  },
  write(data: { key: any; value: any; }) {
      saveDataToFile({ [data.key]: data.value });
  },
  read(key: string | number) {
      const result = {};
      readDataFromFile(result);
      return result[key];
  },
  remove(key: string | number) {
      const result = {};
      readDataFromFile(result);
      delete result[key];
      saveDataToFile(result);
  },
  increment(key: string | number) {
      const result = {};
      readDataFromFile(result);
      const value = parseInt(result[key]) || 0;
      saveDataToFile({ [key]: value + 1 });
  },
  saveArray(key: any, arr: any) {
      saveDataToFile({ [key]: arr });
  },
  readArray(key: string | number) {
      const result = {};
      readDataFromFile(result);
      return result[key] || [];
  }
};

// 样式管理
const Vasm = {
  createStyle(id: any) {
    return create_style(id);
  },
  setStyleOpa(id: any, opacity: any) {
    set_style_opa(id, opacity);
  },
  setStyleBg(id: any, color: any) {
    set_style_bg(id, color);
  },
  resetStyle(id: any) {
    reset_style(id);
  }
};

// 公共接口
const Vaci = {
  exitGame() {
    exit_game();
  },
  getJsParent() {
    return get_js_parent();
  },
  myPow(x: any, y: any) {
    return my_pow(x, y);
  },
  mySqrt(x: any) {
    return my_sqrt(x);
  },
  randNum() {
    return rand_num();
  },
  newEventMap(id: any, eventType: any, func: any, flag: any) {
    return new EventMap(id, eventType, func, flag);
  }
};

// 响应式数据
function vaceReactive(obj: any, callback: { (key: any, value: any): void; (key: any, value: any): void; (arg0: string | symbol, arg1: any): void; }) {
  return new Proxy(obj, {
    set(target, key, value) {
      target[key] = value;
      callback(key, value);
      return true;
    }
  });
}

// 组件类
class Vace {
  constructor(options: { data: any; methods: {}; components: {}; onInit: () => void; onReady: () => void; onDestroy: () => void; render: () => void; }) {
    this.data = vaceReactive(options.data || {}, (key: any, value: any) => this.updateControl(key, value));
    this.methods = options.methods || {};
    this.components = options.components || {};
    this.onInit = options.onInit || (() => {});
    this.onReady = options.onReady || (() => {});
    this.onDestroy = options.onDestroy || (() => {});
    this.render = options.render || (() => {});
    this.el = null;
    this.controls = {};

    // 将 data 对象的属性直接绑定到组件实例上
    Object.keys(this.data).forEach(key => {
      Object.defineProperty(this, key, {
        get() {
          return this.data[key];
        },
        set(value) {
          this.data[key] = value;
        }
      });
    });

    // 将 methods 对象的方法直接绑定到组件实例上
    Object.keys(this.methods).forEach(methodName => {
      this[methodName] = this.methods[methodName].bind(this);
    });

    this.init();
  }

  init() {
    this.onInit();
    this.el = this.render();
    this.onReady();
  }

  destroy() {
    this.onDestroy();
  }

  update() {
    this.el = this.render();
  }

  getControl(id: string | number) {
    if (!this.controls[id]) {
      this.controls[id] = this.createControl(id);
    }
    return this.controls[id];
  }

  createControl(id: any) {
    return Vacm.createWidget('label', {
      id,
      x: 0,
      y: 0,
      w: 0,
      h: 0,
      text: '',
      font: 4163,
      color: 0x5E4B42,
      contentCenter: true,
      contentAlign: true
    });
  }

  updateControl(key: string, value: any) {
    Object.keys(this.controls).forEach(controlId => {
      const control = this.controls[controlId];
      if (control && control.id) {
        switch (control.id) {
          case 'label':
            if (key === 'text') {
              Vacm.setLabelText(control, value);
            }
            if (key === 'color') {
              Vacm.setLabelColor(control, value);
            }
            break;
        }
      }
    });
  }
}

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
    Vadm.write({ key: 'email', value: 'Bob' });

Vadm.remove('email');
// 再次读取数据
const email = Vadm.read('email');
console.log(email); // 输出: undefined
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
