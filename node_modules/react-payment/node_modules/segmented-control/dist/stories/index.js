"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _formsyReact = _interopRequireDefault(require("formsy-react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _addonCentered = _interopRequireDefault(require("@storybook/addon-centered"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _MuiThemeProvider = _interopRequireDefault(require("@material-ui/core/styles/MuiThemeProvider"));

var _SegmentedControl = _interopRequireDefault(require("../SegmentedControl"));

var _SegmentedControlWithoutStyles = _interopRequireDefault(require("../SegmentedControlWithoutStyles"));

var _FormsySegmentedControl = _interopRequireDefault(require("../FormsySegmentedControl"));

(0, _react2.storiesOf)('SegmentedControl', module).addDecorator(_addonCentered["default"]).add('Two options', function () {
  return /*#__PURE__*/_react["default"].createElement(_SegmentedControl["default"], {
    className: "custom-class",
    name: "twoOptions",
    options: [{
      label: 'One',
      value: 'one',
      "default": true
    }, {
      label: 'Two',
      value: 'two'
    }],
    style: {
      width: 300,
      color: '#42a5f5'
    } // blue400
    ,
    setValue: (0, _addonActions.action)('setValue')
  });
}).add('Three options', function () {
  return /*#__PURE__*/_react["default"].createElement(_SegmentedControl["default"], {
    name: "threeOptions",
    options: [{
      label: 'One',
      value: 'one'
    }, {
      label: 'Two',
      value: 'two',
      "default": true
    }, {
      label: 'Three',
      value: 'three'
    }],
    style: {
      width: 303,
      color: '#ef5350'
    } // red400
    ,
    setValue: (0, _addonActions.action)('setValue')
  });
}).add('One disabled', function () {
  return /*#__PURE__*/_react["default"].createElement(_SegmentedControl["default"], {
    name: "oneDisabled",
    options: [{
      label: 'One',
      value: 'one',
      disabled: true
    }, {
      label: 'Two',
      value: 'two'
    }, {
      label: 'Three',
      value: 'three',
      "default": true
    }, {
      label: 'Four',
      value: 'four'
    }],
    style: {
      width: 400,
      color: '#ab47bc'
    } // purple400
    ,
    setValue: (0, _addonActions.action)('setValue')
  });
}).add('Ten options', function () {
  return /*#__PURE__*/_react["default"].createElement(_SegmentedControl["default"], {
    name: "tenOptions",
    options: [{
      label: 'One',
      value: 'one'
    }, {
      label: 'Two',
      value: 'two'
    }, {
      label: 'Three',
      value: 'three'
    }, {
      label: 'Four',
      value: 'four'
    }, {
      label: 'Five',
      value: 'five'
    }, {
      label: 'Six',
      value: 'six'
    }, {
      label: 'Seven',
      value: 'seven'
    }, {
      label: 'Eight',
      value: 'eight',
      "default": true
    }, {
      label: 'Nine',
      value: 'nine'
    }, {
      label: 'Ten',
      value: 'ten'
    }],
    style: {
      width: 1000,
      color: '#ef5350'
    } // red400
    ,
    setValue: (0, _addonActions.action)('setValue')
  });
});
(0, _react2.storiesOf)('FormsySegmentedControl', module).addDecorator(_addonCentered["default"]).add('Three options', function () {
  return /*#__PURE__*/_react["default"].createElement(_MuiThemeProvider["default"], null, /*#__PURE__*/_react["default"].createElement(_formsyReact["default"], {
    onValidSubmit: (0, _addonActions.action)('onFormsySubmit')
  }, /*#__PURE__*/_react["default"].createElement(_FormsySegmentedControl["default"], {
    name: "threeOptions",
    options: [{
      label: 'One',
      value: 'one'
    }, {
      label: 'Two',
      value: 'two',
      "default": true
    }, {
      label: 'Three',
      value: 'three'
    }],
    style: {
      width: 300,
      color: 'rgb(0, 188, 212)'
    } // match default material-ui primary teal
    ,
    setValue: (0, _addonActions.action)('setValue')
  }), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    variant: "contained",
    type: "submit",
    label: "submit formsy form",
    style: {
      display: 'block',
      width: 200,
      margin: '20px auto'
    },
    primary: true
  }, "Submit")));
});
(0, _react2.storiesOf)('SegmentedControlWithoutStyles', module).addDecorator(_addonCentered["default"]).add('Two options without styles', function () {
  return /*#__PURE__*/_react["default"].createElement(_SegmentedControlWithoutStyles["default"], {
    className: "custom-class",
    name: "twoOptions",
    options: [{
      label: 'One',
      value: 'one',
      "default": true
    }, {
      label: 'Two',
      value: 'two'
    }],
    setValue: (0, _addonActions.action)('setValue')
  });
});