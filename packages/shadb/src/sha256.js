export const sha256 = async (x) =>
  Array.from(
    new Uint8Array(
      await crypto.subtle.digest(
        "SHA-256",
        typeof x === "string" ? new TextEncoder().encode(x) : x,
      ),
    ).slice(0, 4),
  ).map((b) => ("00" + b.toString(16)).slice(-2)).join("");
