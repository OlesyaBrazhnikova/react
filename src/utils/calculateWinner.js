export const calculateTime = (time) => {
    let [hrs, mins, secs] = time.split(':')
    return Number(hrs) * 3600 + Number(mins) * 60 + Number(secs)
}

export const calculateWinner = (array) => {
    return array.map(elem => {
        return {
            ...elem,
            timeInSec: calculateTime(elem.time)
        }
    }).sort((a, b) => a.timeInSec > b.timeInSec ? 1 : -1)[0]
}