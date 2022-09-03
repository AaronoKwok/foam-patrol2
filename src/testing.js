/* const test = new Date()
const test1 = test.getTimezoneOffset()
console.log(test1, "timezone offset to my Loc")
const test2 = test1 * 60 * 1000
console.log(test2, "ms")

const utcTime = Date.parse("2022-08-25T13:51:00+00:00")
console.log(utcTime)

 */

 const utc = new Date("2022-09-03T05:38:00+00:00") //returned utc time
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

