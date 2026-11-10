/**
 * Returns a greeting for the given name.
 * @param {string} [name=world] - The name to greet.
 * @returns {string} The greeting string.
 */
export function greet(name = "world") {
  return `Hello, ${name}!`;
}
