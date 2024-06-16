import assert from "node:assert"
import { describe, it } from "node:test"
import { outer } from "./clojure.js"

describe("Javascript clojure test", () => {
  it('for input equal 1, output should be 2', () => {
    const result = outer(1)
    assert.equal(result, 2)
  })
})