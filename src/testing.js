/* const test = new Date()
const test1 = test.getTimezoneOffset()
console.log(test1, "timezone offset to my Loc")
const test2 = test1 * 60 * 1000
console.log(test2, "ms")

const utcTime = Date.parse("2022-08-25T13:51:00+00:00")
console.log(utcTime)

 */

 /* const utc = new Date("2022-09-03T05:38:00+00:00") //returned utc time
 console.log(utc)
 const localTime = utc.toString()
 console.log(localTime)
 //console.log(localTime.getHours()) //does not work with day of week in front
 console.log(localTime.split(" "))
 const arr = localTime.split(" ")
 const newArr = arr.slice(1, 5)
 console.log(newArr)
 const joinArr = newArr.join(" ")
 console.log(joinArr)

 const newStr = new Date(joinArr)
 console.log(newStr.getHours())
 console.log(newStr.getMinutes())

 const hours = newStr.getHours()
 const minutes = newStr.getMinutes()

 function ampm(hours, minutes) {
     if (hours > 12) {
        return `${hours - 12}:${minutes}pm` 
     } else {
         return `${hours}:${minutes}am`
     }
 }
 console.log(ampm(hours, minutes))

 */

/* const utcYear = (new Date()).getUTCFullYear()
    const utcMonth = (new Date()).getUTCMonth() + 1
    const utcDay = (new Date()).getUTCDate()
    const utcHour = (new Date()).getUTCHours()

    function addZeroHour() {
        return utcHour < 10 ? 0 : ""
    }
    function addZeroDay() {
        return utcDay < 10 ? 0 : ""
    }
    function addZeroMonth() {
        return utcMonth < 10 ? 0 : ""
    }

    //const utcDate = `${utcYear}-${addZeroMonth()}${utcMonth}-${addZeroDay()}${utcDay} ${addZeroHour()}${utcHour}:00`  // format is 0digit:00 if utc hour is less than 10
    const utcDate = `${utcYear}-${addZeroMonth()}${utcMonth}-${addZeroDay()}${utcDay} ${addZeroHour()}${utcHour}:00`  // format is 0digit:00 if utc hour is less than 10

    console.log(utcDate, "utcDate")
    console.log(utcYear, "utcYear")
    console.log(addZeroDay())
    console.log(addZeroHour())
    console.log(addZeroHour())

    //const start = utcDate //MAYBE start format is bad
    const start = `2022-9-06 ${utcHour}:00`
    console.log(start, "start")
    const histEnd = `2022-9-07 ${utcHour}:00` //time format is 00:00, need 0 if hour is less than 10
    console.log(histEnd, "end") */

    /* const msl = 0.862;
    const height = -1.106749669359218
    console.log((msl + height) * 3.321)
    console.log(((msl + height) * 3.281).toString().slice(0, 3))
    console.log(((msl + height) * 3.281).toFixed(1))
    console.log(3.45432.toFixed(1))
    console.log(3.45432.toString().slice(0, 3))
     */

    /* For Tide Start and End
     
    const utcYear = new Date().getUTCFullYear()
    console.log(utcYear)
    const utcDate = new Date().getUTCDate()
    console.log(utcDate)
    const utcMonth = new Date().getUTCMonth()
    console.log(utcMonth + 1)
    const utcHour = new Date().getUTCHours()
    console.log(utcHour)

    function addZero(num) {
        return num < 10 ? 0 : ""
    }

    const tideStart = `${utcYear}-${utcMonth + 1}-${addZero(utcDate)}${utcDate} 00:00`
    console.log(tideStart)

   */

//Reduce method

const arr = [1, 2, 3, 4]
const add = arr.reduce((a, b) => {
    return a + b
})
//console.log(add)

const arrr = [
    {"num": 13, "id": 0}, //1.3b
    {"num": 20, "id": 1}, //2b
    {"num": 30, "id": 2}, //3b
    {"num": 50, "id": 3}, //5b
    {"num": 90, "id": 4}, //9b
    {"num": 140, "id": 5} //14b
]
console.log(arrr.length)
const time = 140; //1.3b 
function margin(arr) {
    let margin = 1110; // 100b //should be value larger than largest time in data array
    for (let i = 0; i < arr.length; i++) {
        console.log("")
        console.log("loop index:", i)
        console.log("margin:", margin)
        console.log("time", time)
        console.log("obj.num-time = 0:", arr[i].num - time === 0)   
        console.log(arr[i], (arr[i].num - time) <= margin, (arr[i].num - time > 0))
        if ((arr[i].num - time === 0)) {
            console.log("final margin:", arr[i].num)  
            margin = arr[i].num
            return margin
        } else if ((arr[i].num - time) < margin && (arr[i].num - time > 0)) { //checking if array obj num value minus time is less than margin is not necessary
            console.log(i+1 === arr.length)
            if ((i + 1) !== arr.length) { //next arr element is not last in array
                if (arr[i+1].num - time > arr[i].num - time) {
                    console.log(arr[i+1].num - time, ">", arr[i].num - time)
                    return margin = arr[i].num 
                }  
            } else { // arr element is last in array
                console.log("next num:", arr[i].num)
                return margin = arr[i].num
            }
        }
    }
    return `${time} exceeds/is too low for provided times or is negative`
}
console.log(margin(arrr))

