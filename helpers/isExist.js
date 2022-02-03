export function isExistArr(value) {
  return value && Array.isArray(value) && value.length
}

export function isExistStr(value) {
  return value && typeof value === "string"
}
