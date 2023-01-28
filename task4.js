const capitalize = (string) => {
  const change = string.charAt(0).toUpperCase() + string.slice(1);
  return change;
}

module.exports = capitalize