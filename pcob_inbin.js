// 由 Struggle 开发
// 控件管理
const Vacm = {
  createWidget(type, config) {
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
  createLabel(config) {
    const label = create_label(config.id, config.x, config.y, config.w, config.h);
    if (config.text) this.setLabelText(label, config.text);
    if (config.font) this.setLabelFont(label, config.font);
    if (config.color) this.setLabelColor(label, config.color);
    if (config.contentCenter) this.setLabelContentCenter(label);
    if (config.contentAlign) this.setLabelContentAlign(label);
    if (config.onClick) Vaem.addEvent(label, 7, config.onClick);
    return label;
  },
  setLabelText(id, text) {
    set_label_text(id, text);
  },
  setLabelFont(id, font) {
    set_label_font(id, font);
  },
  setLabelColor(id, color) {
    set_label_color(id, color);
  },
  setLabelContentCenter(id) {
    set_label_content_center(id);
  },
  setLabelContentAlign(id) {
    set_label_content_align(id);
  },
  createImg(config) {
    const img = create_img(config.id, config.src, config.x, config.y);
    if (config.src) this.setImgSrc(img, config.src);
    return img;
  },
  setImgSrc(id, src) {
    set_img_src(id, src);
  },
  createBtn(config) {
    const btn = create_btn(config.id, config.x, config.y, config.w, config.h);
    if (config.onClick) Vaem.addEvent(btn, 7, config.onClick);
    return btn;
  },
  createObj(config) {
    const obj = create_obj(config.id, config.x, config.y, config.w, config.h);
    if (config.size) this.setObjSize(obj, config.size.w, config.size.h);
    if (config.pos) this.setObjPos(obj, config.pos.x, config.pos.y);
    if (config.onClick) this.setObjClick(obj, config.onClick);
    if (config.hidden) this.setObjHidden(obj);
    if (config.display) this.setObjDisplay(obj);
    if (config.del) this.setObjDel(obj);
    return obj;
  },
  setObjSize(id, w, h) {
    set_obj_size(id, w, h);
  },
  setObjPos(id, x, y) {
    set_obj_pos(id, x, y);
  },
  setObjClick(id, func) {
    set_obj_click(id, func);
  },
  setObjHidden(id) {
    set_obj_hidden(id);
  },
  setObjDisplay(id) {
    set_obj_display(id);
  },
  setObjDel(id) {
    set_obj_del(id);
  },
  createArc(config) {
    const arc = create_arc(config.id, config.x, config.y, config.w, config.h, config.start, config.end, config.timeLabel);
    if (config.fgColor) this.setArcFgColor(arc, config.fgColor);
    if (config.fgWidth) this.setArcFgWidth(arc, config.fgWidth);
    if (config.fgRadius) this.setArcFgRadius(arc, config.fgRadius);
    if (config.bgColor) this.setArcBgColor(arc, config.bgColor);
    if (config.bgWidth) this.setArcBgWidth(arc, config.bgWidth);
    if (config.bgRadius) this.setArcBgRadius(arc, config.bgRadius);
    return arc;
  },
  setArcFgColor(id, color) {
    set_arc_fg_color(id, color);
  },
  setArcFgWidth(id, width) {
    set_arc_fg_width(id, width);
  },
  setArcFgRadius(id, radius) {
    set_arc_fg_radius(id, radius);
  },
  setArcBgColor(id, color) {
    set_arc_bg_color(id, color);
  },
  setArcBgWidth(id, width) {
    set_arc_bg_width(id, width);
  },
  setArcBgRadius(id, radius) {
    set_arc_bg_radius(id, radius);
  },
  objModifyValue(id, value) {
    obj_modify_value(id, value);
  },
  createLine(config) {
    const line = create_line(config.id, config.x, config.y, config.w, config.h);
    if (config.point) this.setLinePoint(line, config.point.x, config.point.y);
    if (config.width) this.setLineWidth(line, config.width);
    if (config.color) this.setLineColor(line, config.color);
    return line;
  },
  setLinePoint(id, x, y) {
    set_line_point(id, x, y);
  },
  setLineWidth(id, width) {
    set_line_width(id, width);
  },
  setLineColor(id, color) {
    set_line_color(id, color);
  }
};

// 事件管理
const Vaem = {
  addEvent(id, eventType, callback) {
    addEvent(id, [eventType], callback);
  },
  registerEvent(event) {
    registerEvent(event);
  },
  rotate90Degrees(id, angle) {
    rotate_90_degrees(id, angle);
  },
  moveHorizontal(id, distance, duration) {
    move_horizontal(id, distance, duration);
  },
  moveVertical(id, distance, duration) {
    move_vertical(id, distance, duration);
  }
};

// 数据管理
const Vadm = {
  saveDataToFile(data) {
    saveDataToFile(data);
  },
  readDataToFile(keys) {
    return readDataToFile(keys);
  },
  write(data) {
    write(data);
  },
  read(key) {
    return read(key);
  }
};

// 样式管理
const Vasm = {
  createStyle(id) {
    return create_style(id);
  },
  setStyleOpa(id, opacity) {
    set_style_opa(id, opacity);
  },
  setStyleBg(id, color) {
    set_style_bg(id, color);
  },
  resetStyle(id) {
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
  myPow(x, y) {
    return my_pow(x, y);
  },
  mySqrt(x) {
    return my_sqrt(x);
  },
  randNum() {
    return rand_num();
  },
  newEventMap(id, eventType, func, flag) {
    return new EventMap(id, eventType, func, flag);
  }
};

// 响应式数据
function vaceReactive(obj, callback) {
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
  constructor(options) {
    this.data = vaceReactive(options.data || {}, (key, value) => this.updateControl(key, value));
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

  getControl(id) {
    if (!this.controls[id]) {
      this.controls[id] = this.createControl(id);
    }
    return this.controls[id];
  }

  createControl(id) {
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

  updateControl(key, value) {
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