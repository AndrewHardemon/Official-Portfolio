export const capFirstLetter = (name) => {
  return name[0].toUpperCase() + name.slice(1)
}

export const changeToStandardFormat = (str) => {
  return str.split("-").map(s => capFirstLetter(s)).join(" ")
}