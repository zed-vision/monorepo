import { EmotionJSX } from "@emotion/react/types/jsx-namespace";

import  React from "react"
import {render} from "react-dom";
import {jsx, css, Global} from "@emotion/react"

export { React}

export {jsx}
export {css}
export {Global}


export const renderEmotion= (el: EmotionJSX.Element, container:HTMLElement)=>render(jsx(Fragment,{children: el}),container )


export default React;