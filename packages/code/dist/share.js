import { sha256 } from "./sha256.js";
import { getZkey } from "./data.js";
export const shareItAsHtml = async ({ code, HTML }) => {
    var _a;
    const bodyClass = String((_a = document.getElementById("zbody")) === null || _a === void 0 ? void 0 : _a.getAttribute("class"));
    const css = Array.from(window.document.querySelector("head > style[data-emotion=css]").sheet
        .cssRules).map((x) => x.cssText).filter((cssRule) => HTML.includes(cssRule.substring(3, 8))).join("\n  ").replace(`.${bodyClass}`, "body");
    const { getHtml } = await import("./templates.js");
    const linkToCode = await saveToIPFS(code, "application/javascript");
    console.log({
        HTML,
        linkToCode,
        css,
        code,
    });
    const link = await saveHtml(getHtml({ HTML, css, link: linkToCode }));
    return link;
};
function saveHtml(html) {
    return saveToIPFS(html, "text/html");
}
let ipfsKV;
async function saveToIPFS(content, type) {
    ipfsKV = ipfsKV || (await import("./ipfsKV.js")).ipfsKV;
    const cid = await ipfsKV.add(URL.createObjectURL(new Blob([content], { type })));
    return `https://ipfs.io/ipfs/${cid}`;
}
async function save(content, type) {
    const hash = await sha256(content);
    const request = new Request("https://code.zed.vision", {
        body: content,
        method: "POST",
        headers: {
            "Content-Type": type + ";charset=UTF-8",
            "ZKEY": await getZkey(hash),
        },
    });
    await fetch(request);
    return `https://code.zed.vision/${hash}`;
}