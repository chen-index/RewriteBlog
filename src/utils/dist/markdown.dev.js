"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _highlight = require("highlight.js");

var _marked = require("marked");

var tocObj = {
  add: function add(text, level) {
    var anchor = "#toc".concat(level).concat(++this.index);
    this.toc.push({
      anchor: anchor,
      level: level,
      text: text
    });
    return anchor;
  },
  // 使用堆栈的方式处理嵌套的ul,li，level即ul的嵌套层次，1是最外层
  // <ul>
  //   <li></li>
  //   <ul>
  //     <li></li>
  //   </ul>
  //   <li></li>
  // </ul>
  toHTML: function toHTML() {
    var levelStack = [];
    var result = "";

    var addStartUL = function addStartUL() {
      result += '<ul class="anchor-ul" id="anchor-fix">';
    };

    var addEndUL = function addEndUL() {
      result += "</ul>\n";
    };

    var addLI = function addLI(anchor, text) {
      result += '<li><a class="toc-link" href="#' + anchor + '">' + text + "<a></li>\n";
    };

    this.toc.forEach(function (item) {
      var levelIndex = levelStack.indexOf(item.level); // 没有找到相应level的ul标签，则将li放入新增的ul中

      if (levelIndex === -1) {
        levelStack.unshift(item.level);
        addStartUL();
        addLI(item.anchor, item.text);
      } // 找到了相应level的ul标签，并且在栈顶的位置则直接将li放在此ul下
      else if (levelIndex === 0) {
          addLI(item.anchor, item.text);
        } // 找到了相应level的ul标签，但是不在栈顶位置，需要将之前的所有level出栈并且打上闭合标签，最后新增li
        else {
            while (levelIndex--) {
              levelStack.shift();
              addEndUL();
            }

            addLI(item.anchor, item.text);
          }
    }); // 如果栈中还有level，全部出栈打上闭合标签

    while (levelStack.length) {
      levelStack.shift();
      addEndUL();
    } // 清理先前数据供下次使用


    this.toc = [];
    this.index = 0;
    return result;
  },
  toc: [],
  index: 0
};

var MarkUtils =
/*#__PURE__*/
function () {
  function MarkUtils() {
    _classCallCheck(this, MarkUtils);

    this.rendererMD = new _marked.Renderer();

    this.rendererMD.heading = function (text, level, raw) {
      var anchor = tocObj.add(text, level);
      return "<h".concat(level, " id=").concat(anchor, ">").concat(text, "</h").concat(level, ">\n");
    };

    _highlight.configure({
      useBR: true
    });

    _marked.setOptions({
      renderer: this.rendererMD,
      headerIds: false,
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      highlight: function highlight(code) {
        return _highlight.highlightAuto(code).value;
      }
    });
  }

  _createClass(MarkUtils, [{
    key: "marked",
    value: function marked(data) {
      var content, toc;
      return regeneratorRuntime.async(function marked$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!data) {
                _context.next = 8;
                break;
              }

              _context.next = 3;
              return regeneratorRuntime.awrap(_marked(data));

            case 3:
              content = _context.sent;
              // 文章内容
              toc = tocObj.toHTML(); // 文章目录

              return _context.abrupt("return", {
                content: content,
                toc: toc
              });

            case 8:
              return _context.abrupt("return", null);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }]);

  return MarkUtils;
}();

var markdown = new MarkUtils();
var _default = markdown;
exports["default"] = _default;