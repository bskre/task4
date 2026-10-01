var cleanText = (text) => text.replaceAll(" ", '')
var capitalize = (text) => text.slice(0, 1).toUpperCase() + text.slice(1).toLowerCase()
var formatDisplayName = (firstName, lastName) => `${capitalize(cleanText(firstName))} ${capitalize(cleanText(lastName))}`

console.log(formatDisplayName('  ava', 'STONE  '));
console.log(formatDisplayName('nOAh', '  kim'));
console.log(formatDisplayName('  mINA  ', 'pATEL'));