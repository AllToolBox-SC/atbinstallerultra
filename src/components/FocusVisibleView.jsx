import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { subscribeInputModality } from "../InputModality";

export default function FocusVisibleView(props) {
  const {
    focusBorderColor = "transparent",
    focusBorderWidth = 0,
    style,
    ...restProps
  } = props;
  const [mode, setMode] = useState("pointer");
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    return subscribeInputModality(setMode);
  }, []);

  const showFocus = mode === "keyboard" && focused;

  return (
    <View
      {...restProps}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      style={[
        style,
        showFocus && {
          borderWidth: focusBorderWidth,
          borderColor: focusBorderColor
        },
      ]}
    />
  );
}
