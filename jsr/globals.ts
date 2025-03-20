// deno-lint-ignore no-explicit-any
const globals: typeof globalThis & Record<string, any> = globalThis;

export const WINDOWS = globals.Deno?.build?.os === "windows" ||
    globals.process.platform === "win32" ||
    globals.navigator?.userAgent.includes("Windows");

export const EOL = WINDOWS ? "\r\n" : "\n";
