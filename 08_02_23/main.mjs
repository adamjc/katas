import { until, pipe, prop } from "ramda"

const evaporator = (ml, evapRate, t) => {
  let days = 0
  const mlThresh = ml * t / 100
  const evapRatePct = evapRate / 100
  while (ml > mlThresh) {
    ml = ml - ml * evapRatePct
    days++
  }

  return days
}

const hasEvaporationThresholdBeenReached = ({ ml, mlThresh }) => mlThresh >= ml
const evaporateOneDay = ({ ml, evapRatePct, days, ...r }) => 
  ({ ml: ml - ml * evapRatePct, evapRatePct, days: days + 1, ...r})

const evaporator2 = pipe(
  (ml, evapRate, t) => ({ ml, mlThresh: ml * t / 100, evapRatePct: evapRate / 100, days: 0}),
  until(
    hasEvaporationThresholdBeenReached,
    evaporateOneDay
  ),
  prop('days')
)

const r = evaporator2(10, 10, 5)

console.log(r)