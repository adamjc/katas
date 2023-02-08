import { reduce, pipe, add, converge } from "ramda"

const segregate = ({pos, neg}, n) => {
  if (n > 0) return { pos: [...pos, n], neg }
  if (n < 0) return { pos, neg: [...neg, n] }
}

const main = pipe(
  reduce(segregate, {pos: [], neg: []}),
  converge(
    (a, b) => [a, b],
    [
      ({pos}) => pos.length,
      ({neg}) => reduce(add, 0, neg)
    ]
  )
)

const r = main([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])

console.log(r)