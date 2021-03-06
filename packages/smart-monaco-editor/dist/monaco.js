export const getMonaco = async () => {
    const importScript = (src, res = []) => {
        if (typeof window === "undefined")
            return {};
        return (window.document.head.querySelector(`script[src="${src}"]`) &&
            window) ||
            new Promise(function (resolve, reject) {
                const s = window.document.createElement("script");
                s.src = src;
                s.async = "async";
                s.type = "application/javascript";
                s.onload = (() => {
                    if (res.length === 0) {
                        resolve(window);
                    }
                    const ret = {};
                    res.forEach((x) => Object.assign(ret, window[x]));
                    resolve(ret);
                });
                s.onerror = reject;
                window.document.head.appendChild(s);
            });
    };
    const vsPath = `https://unpkg.com/monaco-editor@0.26.1/min/vs`;
    const { require } = await importScript(`${vsPath}/loader.js`);
    require.config({ paths: { "vs": vsPath } });
    const monaco = await new Promise((resolve) => require(["vs/editor/editor.main"], (_m) => resolve(_m)));
    return monaco;
};
