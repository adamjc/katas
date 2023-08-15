import { pipe, converge, identity, length, divide, __, match, concat, join, filter, reject, splitAt, map } from "ramda"

const isVowel = pipe(match(/^[aeiou]{1}$/g), x => x.length > 0)
const getVowels = filter(isVowel) 
const getConsonants = reject(isVowel)
const joinString = pipe(concat, join(''))

// str -> str
// takes in a string, applies functions a and b to it, then concats them together
const applyAndJoin = (a, b) => converge(joinString, [a, b])

const vowelsToFront = applyAndJoin(getVowels, getConsonants)
const vowelsToBack = applyAndJoin(getConsonants, getVowels)

// str -> int. gets mid point of string length rounded up
const getMidPoint = pipe(length, divide(__, 2), n => Math.ceil(n)) 

const main = pipe(
  converge(splitAt, [getMidPoint, identity]),
  ([firstHalf, secondHalf]) => [vowelsToFront(firstHalf), vowelsToBack(secondHalf)],
  join('')
)

const results = map(main, [
  'Hello',
  'Maneuver'
])

console.log(results)