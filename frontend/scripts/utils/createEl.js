export function createEl(tag, options) {
  const el = document.createElement(tag);

  if (!options) {
    return el;
  }

  // Object.entries ---> Eg.: [ ['key', 'value'], ['key', 1], ['key', null] ]
  for (const entry of Object.entries(options)) {
    const [key, value] = entry; // destructuring
    el[key] = value;
  }

  return el;
}