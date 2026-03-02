import { useState, useEffect } from "react";
import { Platform, Keyboard } from "react-native";

let currentMode = "pointer";
let listeners = new Set();

export function subscribeInputModality(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

function notify() {
  listeners.forEach(fn => fn(currentMode));
}

function onKeyPress(evt) {
  currentMode = "keyboard";
  notify();
}

function onPointer(evt) {
  currentMode = "pointer";
  notify();
}
