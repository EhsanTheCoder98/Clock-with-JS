let is24Hour = true;
function dateAndTime(){
    let date = new Date()
    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()
    let day = date.getDay()
    let month = date.getMonth()
    let year = date.getFullYear()
    let session = "AM"
if(is24Hour){
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
}else{
    if(h>12){
        session = "PM"
    }
    h = h-12
    if(h<10){
        h = `0${h}`
    }
    if(m<10){
        m = `0${m}`
    }
    if(s<10){
        s = `0${s}`
    }

}
    let time = `${h}:${m}:${s} ${session}`
    document.querySelector(".clock").innerText = time;
    let dateOfDay = `${month}/${day}/${year}`
    document.querySelector(".date").innerText = dateOfDay
}
const interval = setInterval(dateAndTime, 100);

document.getElementById("12").addEventListener("click", function () {
  is24Hour = false;
});

document.getElementById("24").addEventListener("click", function () {
  is24Hour = true;
});