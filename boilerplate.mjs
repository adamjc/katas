import { tap } from "ramda"

const main = pipe(
  tap(console.log)
)

main(input)