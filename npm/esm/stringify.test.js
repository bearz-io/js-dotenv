import { test } from "@bearz/testing";
import { equal } from "@bearz/assert";
import { stringify } from "./stringify.js";
import { WINDOWS } from "./globals.js";
test("dotenv::stringifyDocument", () => {
    const env = {
        "FOO": "bar",
        "BAR": "baz\n",
    };
    const source = stringify(env);
    let expected = `FOO='bar'
BAR="baz
"`;
    if (WINDOWS) {
        expected = `FOO='bar'\r\nBAR="baz\n"`;
    }
    equal(source, expected);
});
