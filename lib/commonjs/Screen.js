"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Screen = Screen;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _Background = require("./Background.js");
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function Screen(props) {
  // const dimensions = useSafeAreaFrame();
  // const insets = useSafeAreaInsets();

  // const isParentHeaderShown = React.useContext(HeaderShownContext);
  // const parentHeaderHeight = React.useContext(HeaderHeightContext);

  const {
    focused,
    // modal = false,
    // header,
    // headerShown = true,
    // headerTransparent,
    // // eslint-disable-next-line @eslint-react/no-unstable-default-props
    // headerStatusBarHeight = isParentHeaderShown ? 0 : insets.top,
    // navigation,
    // route,
    children,
    style
  } = props;

  // const [headerHeight, setHeaderHeight] = React.useState(() =>
  //   getDefaultHeaderHeight(dimensions, modal, headerStatusBarHeight)
  // );

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Background.Background, {
    accessibilityElementsHidden: !focused,
    importantForAccessibility: focused ? 'auto' : 'no-hide-descendants',
    style: [styles.container, style]
    // On Fabric we need to disable collapsing for the background to ensure
    // that we won't render unnecessary views due to the view flattening.
    ,
    collapsable: false,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
      style: styles.content,
      children: children
    })
  });
}
const styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    flex: 1
  }
  // header: {
  //   zIndex: 1,
  // },
  // absolute: {
  //   position: 'absolute',
  //   top: 0,
  //   start: 0,
  //   end: 0,
  // },
});
//# sourceMappingURL=Screen.js.map