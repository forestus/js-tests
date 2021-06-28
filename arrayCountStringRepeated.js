let data = [
    "flamengo","vasco","corintians","botafogo","santos",
    "flamengo","vasco","corintians","botafogo","santos",
    "flamengo","vasco","corintians","botafogo","santos",
    "flamengo","vasco","corintians","botafogo","santos",
    "flamengo","vasco","corintians","botafogo","santos",
    "flamengo","vasco","corintians","botafogo","santos",
]

function getCountName(name,data) {
    let count=0;
    data.map((valueCheck)=>{
        if (name == valueCheck) {
            count++
        }
    })
    const timeCount = {"name":name,"value":count}
    return {timeCount}
}

function getTimes(data) {
    let timesCount = []
    data.map((time,x)=>{
        if (x = 0 || !timesCount.includes(time)) {
            timesCount.push(time)
        }
    })
    return {timesCount}
}

function getMatches(timesCount) {
    let times = []
    timesCount.map((checkEach)=>{
        if (x = 0 || !times.includes(checkEach)) {
            times.push(getCountName(checkEach,data))
        }
    })
    return {times}
}
const {timeCount} = getCountName(data[0],data)
const {timesCount} = getTimes(data)
const {times} = getMatches(timesCount)

console.log(timesCount)
console.log(timeCount)
console.log(times)