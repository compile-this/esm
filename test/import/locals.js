import assert from "assert"
import { a as x, a as y } from "../misc/abc"

export function check() {
  assert.strictEqual(x, "a")
  assert.strictEqual(y, "a")
}
