export const starter: "import { useState } from \"react\";\n/** @jsx jsx */\nimport { css, jsx, Global } from \"@emotion/react\";;\n\nconst Hello = () => {\n  const [name, setName] = useState(0);\n\n  return <div>\n    <h1>\n      Hello {name}! \n    </h1>\n    <input value={name} onChange={(e)=>setName(e.target.value)} /> \n  </div>\n}\n\nexport default () => <>\n  <Global styles={css`\n      body{\n          margin: 0;\n          overflow: overlay;\n        }  \n    `}/>\n  <Slider />\n</>\n";