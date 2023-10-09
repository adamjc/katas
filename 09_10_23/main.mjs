// ignoring the 'make as few changes as possible' criteria

const solve = (string) => pipe(
  split(/[A-Z]/),
  join(''),
  length, // find out num. of lowercase letters vs length
  cond([
    [gte(__, string.length / 2), always(toLower(string))],  // if >= length / 2, make all lowercase
    [lt(__, string.length / 2), always(toUpper(string))], // if < length / 2, make all uppercase,
  ])
)(string)

solve('coDe')