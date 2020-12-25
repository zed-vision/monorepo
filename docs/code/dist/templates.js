export const getHtml = ({ HTML, css, link }) => {
    //
    // For some reason, pre-rendering doesn't care about global styles, the site flickers without this patch
    //
    // let bodyStylesFix = "";
    // const start = js.indexOf("body{");
    // if (start !== -1) {
    //   const firstBit = js.slice(start);
    //   const last = firstBit.indexOf("}");
    //   bodyStylesFix = firstBit.slice(0, last + 1);
    // }
    const titleStart = HTML.indexOf("<title>");
    const titleEnd = HTML.indexOf("</title>");
    const hasTitle = titleStart < titleEnd && titleStart >= -1;
    const title = hasTitle
        ? HTML.slice(titleStart, titleEnd)
        : "(code).zed.vision :)";
    return `<!DOCTYPE html>
<html lang="en">
<head profile="http://www.w3.org/2005/10/profile">
<title>${title}</title>
<link rel="preload" href="${link}" type="text/html" as="fetch" crossorigin>
<link rel="icon" type="image/png" href="https://zed.vision/zed-icon-big.png" />
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">

<meta name="Description" content="Generated with code.zed.vision">
<style>
    ${css}
</style>
</head>
<body>
<div id="zbody">
  ${HTML}
</div>
<script type="module">
import { renderEmotion } from "https://unpkg.com/@zedvision/emotion-react-renderer@10.13.3/dist/bundle.js"
fetch("${link}")
.then(data=>data.text())
.then(async (text) => {
  const App = (
    await import(URL.createObjectURL(
      new Blob([text], { type: "application/javascript" }
      ))
    )).default;
    renderEmotion(App(), document.body.children[0]);
})
</script>
</body>
</html>
`;
};