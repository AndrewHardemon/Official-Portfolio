export const capFirstLetter = (name: string) => {
  return name[0].toUpperCase() + name.slice(1)
}

export const changeToStandardFormat = (str: string) => {
  return str.split("-").map((s: string) => capFirstLetter(s)).join(" ")
}