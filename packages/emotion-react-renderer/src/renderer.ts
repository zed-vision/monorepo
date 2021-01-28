import { EmotionJSX } from "@emotion/react/types/jsx-namespace";
import * as Motion from "framer-motion";
import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { css, Global, jsx } from "@emotion/react";

//@ts-ignore
import { DraggableWindow } from "./DraggableWindow";

export { DraggableWindow };

export { React };
export { Fragment };
export { Motion };

export const { motion } = Motion;

export { jsx };
export { css };
export { Global };

export const render = (
  el: EmotionJSX.Element,
  container: HTMLElement,
) => {
  ReactDOM.render(jsx(Fragment, { children: el }), container);
  return () => ReactDOM.unmountComponentAtNode(container);
};

export default React;