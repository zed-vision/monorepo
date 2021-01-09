//@ts-nocheck
export async function renderPreviewWindow(mode, session, open, v, renderEmotion, jsx, DraggableWindow) {
    if (mode === "window") {
        const onShare = async () => {
            const { shareItAsHtml } = await import("./share.js");
            const link = await shareItAsHtml({
                code: session.code,
                transpiled: session.transpiled,
                HTML: session.HTML,
            });
            console.log({ link });
            open(link);
        };
        let preview = window.document.getElementById("preview");
        if (!preview) {
            const element = window.document.createElement("div");
            window.document.body.appendChild(element);
            preview = element;
        }
        renderEmotion(jsx(DraggableWindow, { onShare }), preview);
        const zbody = window.document.getElementById("zbody");
        if (zbody !== null) {
            zbody.appendChild(session.div);
        }
        if (session.HTML) {
            session.div.innerHTML = session.HTML;
        }
    }
}
