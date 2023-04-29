function dateAndTime(){
    let date = new Date()
    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()
    let day = date.getDay()
    let month = date.getMonth()
    let year = date.getFullYear()
    let session = "AM"

    if(h>12){
        session = "PM"
    }
    if(h<10){
        h = `0${h}`
    }
    if(m<10){
        m = `0${m}`
    }
    if(s<10){
        s = `0${s}`
    }


    let time = `${h}:${m}:${s} ${session}`
    document.querySelector(".clock").innerText = time;
    let dateOfDay = `${year}/${month}/${day}`
    document.querySelector(".date").innerText = dateOfDay
}
setInterval(dateAndTime,1000)

let date = new Date()
let fullDate = date.getMonth()
console.log(fullDate)