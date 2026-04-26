"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _formsyReact = require("formsy-react");

var _SegmentedControl = _interopRequireDefault(require("./SegmentedControl"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var FormsySegmentedControl = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(FormsySegmentedControl, _Component);

  var _super = _createSuper(FormsySegmentedControl);

  function FormsySegmentedControl() {
    (0, _classCallCheck2["default"])(this, FormsySegmentedControl);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(FormsySegmentedControl, [{
    key: "render",
    value: function render() {
      var _this = this;

      return /*#__PURE__*/_react["default"].createElement(_SegmentedControl["default"], (0, _extends2["default"])({}, this.props, {
        setValue: function setValue(val) {
          _this.props.setValue && _this.props.setValue(val);
          return _this.props.setValue(val); // Formsy's setValue
        }
      }));
    }
  }]);
  return FormsySegmentedControl;
}(_react.Component);

var _default = (0, _formsyReact.withFormsy)(FormsySegmentedControl);

exports["default"] = _default;