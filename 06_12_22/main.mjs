import { add, always, cond, equals, gt, lt, map, pipe, reduce, split, tap, __ } from "ramda"

const input = ["3:1", "1:1", "0:1"]

// string => int
// a > b => 3 points
// a < b => 0 points
// a = b => 1 point
const calculateScore = pipe(
  split(":"),
  ([a, b]) => a - b,
  cond([
    [lt(__, 0), always(0)],
    [equals(0), always(1)],
    [gt(__, 0), always(3)]
  ])
)

// [string] => int
const main = pipe(
  map(calculateScore),
  reduce(add, 0),
  tap(console.log)
)

main(input)