var dt = new Date();
var lastday = function (y, m) {
    return new Date(y, m + 1, 0).getDate();
}

window.onload = function () {
    /* var x = document.getElementsByClassName("week1")[0].getElementsByClassName("thu2")[0];
    x.innerHTML = 67; */

    var week = ["week1", "week2", "week3", "week4", "week5", "week6"];
    var iOfWeek=0;
    var days = ["thu8", "thu2", "thu3", "thu4", "thu5", "thu6", "thu7"];
    for (var i = 1; i <= lastday(dt.getFullYear(), dt.getMonth()); i++){
        var ngay = new Date(dt.getFullYear(),dt.getMonth(),i);
        console.log(days[ngay.getDay()] + " ");
        document.getElementsByClassName(week[iOfWeek])[0].getElementsByClassName(days[ngay.getDay()])[0].innerHTML = i;
        if (ngay.getDay()==0) {iOfWeek++;}
    }
}


/* var dayofweek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sar", "Sun"]
document.write("getDay() : " + dayofweek[dt.getDay()]);
console.log(dayofweek[dt.getDay()]); */


