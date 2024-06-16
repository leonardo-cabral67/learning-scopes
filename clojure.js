function outer(xNumber) {
  const y = xNumber + 1
  function inner() {
    return y
  }
  return inner()
}

export { outer }