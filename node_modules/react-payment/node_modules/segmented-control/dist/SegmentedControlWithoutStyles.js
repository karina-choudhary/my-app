"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _find = _interopRequireDefault(require("lodash/find"));

var _extend = _interopRequireDefault(require("lodash/extend"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var SegmentedControlWithoutStyles = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(SegmentedControlWithoutStyles, _Component);

  var _super = _createSuper(SegmentedControlWithoutStyles);

  function SegmentedControlWithoutStyles() {
    (0, _classCallCheck2["default"])(this, SegmentedControlWithoutStyles);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(SegmentedControlWithoutStyles, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var defaultOption = (0, _find["default"])(this.props.options, {
        "default": true
      });
      this.setValue(defaultOption.value);
    }
  }, {
    key: "setValue",
    value: function setValue(val) {
      this.props.setValue && this.props.setValue(val);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var getId = function getId(option) {
        return _this.props.name + option.value;
      };

      var defaultStyle = {
        width: '100%'
      };
      var style = (0, _extend["default"])(defaultStyle, this.props.style);
      var containerClassName = 'segmented-control';

      if (typeof this.props.className !== 'undefined') {
        containerClassName = "".concat(containerClassName, " ").concat(this.props.className);
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: containerClassName,
        style: style
      }, this.props.options.map(function (option) {
        return /*#__PURE__*/_react["default"].createElement("input", {
          key: option.value,
          type: "radio",
          name: _this.props.name,
          id: getId(option),
          defaultChecked: option["default"],
          disabled: option.disabled
        });
      }), this.props.options.map(function (option) {
        return /*#__PURE__*/_react["default"].createElement("label", {
          key: option.value,
          onClick: function onClick() {
            return _this.setValue(option.value);
          },
          htmlFor: getId(option),
          "data-value": option.label
        }, option.label);
      }));
    }
  }]);
  return SegmentedControlWithoutStyles;
}(_react.Component);

(0, _defineProperty2["default"])(SegmentedControlWithoutStyles, "propTypes", {
  className: _propTypes["default"].string,
  name: _propTypes["default"].string.isRequired,
  options: _propTypes["default"].array.isRequired,
  style: _propTypes["default"].object,
  setValue: _propTypes["default"].func
});
var _default = SegmentedControlWithoutStyles;
exports["default"] = _default;