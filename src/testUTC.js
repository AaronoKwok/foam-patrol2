//ampm
/* 

*/

function ampm(nextTideTime) {
        console.log(nextTideTime)
        const iso = new Date(nextTideTime)
        const offset = 7; 
        const localTime = Date.UTC(iso.getUTCFullYear(), iso.getUTCMonth(), iso.getUTCDate(), iso.getUTCHours() - offset, iso.getUTCMinutes(), iso.getUTCSeconds())
        const newStr = new Date(localTime).toUTCString()
        console.log(newStr)
        const splitStr = newStr.split(" ")
        let hrMin = splitStr[4].split(":")
        console.log(hrMin)
        let hr = hrMin[0]
        let min = hrMin[1]
        if (hr === 0) {
            hr = 12
        }
        if (hr === 12) {
            return `${hr}:${min}pm`
        }
        if (hr > 12) {
            return `${hr - 12}:${min}pm`
        } else {
            return `${hr}:${min}am` 
        }
    }
}
console.log(ampm("2022-09-16T02:00:29+00:00"))


