let clock = document.getElementById("clock");
let date = document.getElementById("date");
let body = document.getElementById("gradient")
let change = document.getElementById("change");

function randColor(){
    let colorR = Math.floor(Math.random() * 255);
    let colorG = Math.floor(Math.random() * 255);
    let colorB = Math.floor(Math.random() * 255);
    let final = "rgb("+ colorR +","+ colorB+","+colorB+")";

    return final;
}

function setGradient() {
    body.style.background = "linear-gradient(to right, " + randColor() + ", " + randColor() + ")";
}


function showTime() {
    let time = new Date();
    let h = time.getHours()
    let m = time.getMinutes()
    let s = time.getSeconds()

    let w = time.getDay()//weekday
    let dd = time.getDate()//day of the month
    let mm = time.getMonth() + 1;//month(from 0 to 11)
    let yy = time.getFullYear()//4-digit year
    let weekDay = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

    h = ("0" + h).slice(-2);
    m = ("0" + m).slice(-2);
    s = ("0" + s).slice(-2);
    dd = ("0" + dd).slice(-2);
    mm = ("0" + mm).slice(-2);

    let timeLong = h +":"+ m +"<span class=\"seconds\">:"+ s +"</span>";
    let dateLong = weekDay[w] +", "+ dd +"/"+ mm +"/"+ yy;

    clock.innerHTML = timeLong;
    date.innerHTML = dateLong;
}

showTime();
setInterval(showTime, 500);
setGradient();
change.addEventListener("click", setGradient);
