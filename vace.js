// 由 Struggle 开发
// 控件管理
var Vacm = {
  createWidget: function (type, config) {
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
              throw new Error("\u9519\u8BEF\u7684\u5C5E\u6027: ".concat(type));
      }
  },
  createLabel: function (config) {
      var label = create_label(config.id, config.x, config.y, config.w, config.h);
      if (config.text)
          this.setLabelText(label, config.text);
      if (config.font)
          this.setLabelFont(label, config.font);
      if (config.color)
          this.setLabelColor(label, config.color);
      if (config.contentCenter)
          this.setLabelContentCenter(label);
      if (config.contentAlign)
          this.setLabelContentAlign(label);
      if (config.onClick)
          Vaem.addEvent(label, 7, config.onClick);
      return label;
  },
  setLabelText: function (id, text) {
      set_label_text(id, text);
  },
  setLabelFont: function (id, font) {
      set_label_font(id, font);
  },
  setLabelColor: function (id, color) {
      set_label_color(id, color);
  },
  setLabelContentCenter: function (id) {
      set_label_content_center(id);
  },
  setLabelContentAlign: function (id) {
      set_label_content_align(id);
  },
  createImg: function (config) {
      var img = create_img(config.id, config.src, config.x, config.y);
      if (config.src)
          this.setImgSrc(img, config.src);
      return img;
  },
  setImgSrc: function (id, src) {
      set_img_src(id, src);
  },
  createBtn: function (config) {
      var btn = create_btn(config.id, config.x, config.y, config.w, config.h);
      if (config.onClick)
          Vaem.addEvent(btn, 7, config.onClick);
      return btn;
  },
  createObj: function (config) {
      var obj = create_obj(config.id, config.x, config.y, config.w, config.h);
      if (config.size)
          this.setObjSize(obj, config.size.w, config.size.h);
      if (config.pos)
          this.setObjPos(obj, config.pos.x, config.pos.y);
      if (config.onClick)
          this.setObjClick(obj, config.onClick);
      if (config.hidden)
          this.setObjHidden(obj);
      if (config.display)
          this.setObjDisplay(obj);
      if (config.del)
          this.setObjDel(obj);
      return obj;
  },
  setObjSize: function (id, w, h) {
      set_obj_size(id, w, h);
  },
  setObjPos: function (id, x, y) {
      set_obj_pos(id, x, y);
  },
  setObjClick: function (id, func) {
      set_obj_click(id, func);
  },
  setObjHidden: function (id) {
      set_obj_hidden(id);
  },
  setObjDisplay: function (id) {
      set_obj_display(id);
  },
  setObjDel: function (id) {
      set_obj_del(id);
  },
  createArc: function (config) {
      var arc = create_arc(config.id, config.x, config.y, config.w, config.h, config.start, config.end, config.timeLabel);
      if (config.fgColor)
          this.setArcFgColor(arc, config.fgColor);
      if (config.fgWidth)
          this.setArcFgWidth(arc, config.fgWidth);
      if (config.fgRadius)
          this.setArcFgRadius(arc, config.fgRadius);
      if (config.bgColor)
          this.setArcBgColor(arc, config.bgColor);
      if (config.bgWidth)
          this.setArcBgWidth(arc, config.bgWidth);
      if (config.bgRadius)
          this.setArcBgRadius(arc, config.bgRadius);
      return arc;
  },
  setArcFgColor: function (id, color) {
      set_arc_fg_color(id, color);
  },
  setArcFgWidth: function (id, width) {
      set_arc_fg_width(id, width);
  },
  setArcFgRadius: function (id, radius) {
      set_arc_fg_radius(id, radius);
  },
  setArcBgColor: function (id, color) {
      set_arc_bg_color(id, color);
  },
  setArcBgWidth: function (id, width) {
      set_arc_bg_width(id, width);
  },
  setArcBgRadius: function (id, radius) {
      set_arc_bg_radius(id, radius);
  },
  objModifyValue: function (id, value) {
      obj_modify_value(id, value);
  },
  createLine: function (config) {
      var line = create_line(config.id, config.x, config.y, config.w, config.h);
      if (config.point)
          this.setLinePoint(line, config.point.x, config.point.y);
      if (config.width)
          this.setLineWidth(line, config.width);
      if (config.color)
          this.setLineColor(line, config.color);
      return line;
  },
  setLinePoint: function (id, x, y) {
      set_line_point(id, x, y);
  },
  setLineWidth: function (id, width) {
      set_line_width(id, width);
  },
  setLineColor: function (id, color) {
      set_line_color(id, color);
  }
};
// 事件管理
var Vaem = {
  addEvent: function (id, eventType, callback) {
      addEvent(id, [eventType], callback);
  },
  registerEvent: function (event) {
      registerEvent(event);
  },
  rotate90Degrees: function (id, angle) {
      rotate_90_degrees(id, angle);
  },
  moveHorizontal: function (id, distance, duration) {
      move_horizontal(id, distance, duration);
  },
  moveVertical: function (id, distance, duration) {
      move_vertical(id, distance, duration);
  }
};
var Vadm = {
  saveDataToFile: function (data) {
      Object.keys(data).forEach(function (key) {
          var _a;
          saveDataToFile((_a = {}, _a[key] = data[key], _a));
      });
  },
  readDataToFile: function (keys) {
      var result = {};
      readDataFromFile(result);
      return keys.reduce(function (acc, key) {
          acc[key] = result[key];
          return acc;
      }, {});
  },
  write: function (data) {
      var _a;
      saveDataToFile((_a = {}, _a[data.key] = data.value, _a));
  },
  read: function (key) {
      var result = {};
      readDataFromFile(result);
      return result[key];
  },
  remove: function (key) {
      var result = {};
      readDataFromFile(result);
      delete result[key];
      saveDataToFile(result);
  },
  increment: function (key) {
      var _a;
      var result = {};
      readDataFromFile(result);
      var value = parseInt(result[key]) || 0;
      saveDataToFile((_a = {}, _a[key] = value + 1, _a));
  },
  saveArray: function (key, arr) {
      var _a;
      saveDataToFile((_a = {}, _a[key] = arr, _a));
  },
  readArray: function (key) {
      var result = {};
      readDataFromFile(result);
      return result[key] || [];
  }
};
// 样式管理
var Vasm = {
  createStyle: function (id) {
      return create_style(id);
  },
  setStyleOpa: function (id, opacity) {
      set_style_opa(id, opacity);
  },
  setStyleBg: function (id, color) {
      set_style_bg(id, color);
  },
  resetStyle: function (id) {
      reset_style(id);
  }
};
// 公共接口
var Vaci = {
  exitGame: function () {
      exit_game();
  },
  getJsParent: function () {
      return get_js_parent();
  },
  myPow: function (x, y) {
      return my_pow(x, y);
  },
  mySqrt: function (x) {
      return my_sqrt(x);
  },
  randNum: function () {
      return rand_num();
  },
  newEventMap: function (id, eventType, func, flag) {
      return new EventMap(id, eventType, func, flag);
  }
};
// 响应式数据
function vaceReactive(obj, callback) {
  return new Proxy(obj, {
      set: function (target, key, value) {
          target[key] = value;
          callback(key, value);
          return true;
      }
  });
}
// 组件类
var Vace = /** @class */ (function () {
  class Vace {
    constructor(options) {
      var _this = this;
      this.data = vaceReactive(options.data || {}, function (key, value) { return _this.updateControl(key, value); });
      this.methods = options.methods || {};
      this.components = options.components || {};
      this.onInit = options.onInit || (function () { });
      this.onReady = options.onReady || (function () { });
      this.onDestroy = options.onDestroy || (function () { });
      this.render = options.render || (function () { });
      this.el = null;
      this.controls = {};
      // 将 data 对象的属性直接绑定到组件实例上
      Object.keys(this.data).forEach(function (key) {
        Object.defineProperty(_this, key, {
          get: function () {
            return this.data[key];
          },
          set: function (value) {
            this.data[key] = value;
          }
        });
      });
      // 将 methods 对象的方法直接绑定到组件实例上
      Object.keys(this.methods).forEach(function (methodName) {
        _this[methodName] = _this.methods[methodName].bind(_this);
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
        id: id,
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
      var _this = this;
      Object.keys(this.controls).forEach(function (controlId) {
        var control = _this.controls[controlId];
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
  return Vace;
}());
var Page = new Vace({
  data: {
      randomNumber: 0,
      color: "#FFFFFF",
      text: "Random Number: null"
  },
  methods: {
      generateRandomNumber: function () {
          return Vaci.randNum();
      }
  },
  render: function () {
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
          onClick: function () {
              _this.text = "Random Number: ".concat(_this.generateRandomNumber());
          }
      });
      return { label: this.controls['label'], btn: this.controls['btn'] };
  }
});
