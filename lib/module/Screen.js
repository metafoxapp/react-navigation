"use strict";

import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Background } from "./Background.js";
import { jsx as _jsx } from "react/jsx-runtime";
export function Screen(props) {
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

  return /*#__PURE__*/_jsx(Background, {
    accessibilityElementsHidden: !focused,
    importantForAccessibility: focused ? 'auto' : 'no-hide-descendants',
    style: [styles.container, style]
    // On Fabric we need to disable collapsing for the background to ensure
    // that we won't render unnecessary views due to the view flattening.
    ,
    collapsable: false,
    children: /*#__PURE__*/_jsx(View, {
      style: styles.content,
      children: children
    })
  });
}
const styles = StyleSheet.create({
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