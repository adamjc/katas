import { tap, pipe } from "ramda"

const main = pipe(
  tap(console.log)
)

main("Hello, World!")