/** @jsx jsx */
// import {motion} from 'https://cdn.skypack.dev/framer-motion'

// import { css, jsx, Global } from "https://cdn.skypack.dev/@zedvision/code/src/shame@emotion/react";
// import React from "https://cdn.skypack.dev/react";
// import ReactDOM from "https://cdn.skypack.dev/react-dom";
///import ReactDOMServer from "https://cdn.skypack.dev/react-dom-server";

export const DraggableWindow = ({ onShare }) => {
  return jsx(
    React.Fragment,
    null,
    jsx(
      motion.div,
      {
        css: css`
            background: red;
            border: 4px solid red;
            border-radius: 8px;
          `,
        animate: {
          scale: 1,
          top: 1,
          left: 600,
        },
        dragElastic: 0.5,
        dragMomentum: false,
        initial: {
          top: 1,
          left: 0,
          scale: 0.7,
        },
        transition: {
          duration: 0.5,
        },
        drag: true,
        dragConstraints: {
          left: -window.innerWidth + 200,
          right: 0,
          bottom: window.innerHeight - 200,
          top: 0,
        },
      },
      jsx(
        "div",
        {
          css: `
      display: block;
      with: 100%;
      text-align: right;
      background: linear-gradient(0deg, darkred, red);
    `,
        },
        jsx("button", {
          css: css`
              background: darkred;
              margin-top: -4px;
              margin-right: -4px;
              color: white;
              cursor: pointer;
              font-weight: bold;
              font-family: Roboto;
              padding: 8px 16px;
              outline: none;
              border: none;
              border-radius: 0px 8px 0px 0px;
            `,
          onClick: () => onShare(),
        }, "🌎 SHARE"),
      ),
      jsx("div", {
        css: css`  
      min-width: 200px;
      padding: 30px;
      max-width: 600px;
      background: white;
      max-height: 800px;
      border-radius: 0px 0px 8px 8px;
      overflow-y: overlay;
    `,
        id: "zbody",
      }),
    ),
  );
};
export { ReactDOMServer };
// export {ReactDOM}
export { jsx };
// const str = ReactDOMServer.renderToString(jsx(DraggableWindow,{onShare: ()=>{}}))

// console.log(str);
