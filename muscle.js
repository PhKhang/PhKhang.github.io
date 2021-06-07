var dt = new Date();
var thangmoi = 0;
var nammoi = 0;
var lastday = function (y, m) {
    return new Date(y, m + 1, 0).getDate();
}

window.onload = function () {
    document.getElementById("thang").innerHTML = "Tháng " + dt.getMonth() + ', ' + dt.getFullYear();
    chinh();
    thangmoi = dt.getMonth();
    nammoi = dt.getFullYear();

}

function thangtruoc() {
    thangmoi--;
    if (thangmoi < 1) { thangmoi = 12; dt = new Date(new Date().getFullYear(), thangmoi, nammoi--) }
    else dt = new Date(new Date().getFullYear(), thangmoi, new Date().getDate());
    chinh();
    document.getElementById("thang").innerHTML = "Tháng " + thangmoi + ', ' + nammoi;
}
function thangsau() {
    thangmoi++;
    if (thangmoi > 12) { thangmoi = 1; dt = new Date(new Date().getFullYear(), thangmoi, nammoi++) }
    else dt = new Date(new Date().getFullYear(), thangmoi, new Date().getDate());
    chinh();
    document.getElementById("thang").innerHTML = "Tháng " + thangmoi + ', ' + nammoi;
}
function chinh() {
    var week = ["week1", "week2", "week3", "week4", "week5", "week6"];
    var iOfWeek = 0;
    var days = ["thu8", "thu2", "thu3", "thu4", "thu5", "thu6", "thu7"];
    for (var i = 1; i <= lastday(dt.getFullYear(), dt.getMonth()); i++) {
        var ngay = new Date(dt.getFullYear(), dt.getMonth(), i);
        console.log(days[ngay.getDay()] + " ");
        document.getElementsByClassName(week[iOfWeek])[0].getElementsByClassName(days[ngay.getDay()])[0].innerHTML = i;
        document.getElementsByClassName(week[iOfWeek])[0].getElementsByClassName(days[ngay.getDay()])[0].style = "border: 0px;";

        if (ngay.getDate() == dt.getDate()) {
            if (dt.getDay() != 0) { document.getElementsByClassName(week[iOfWeek])[0].getElementsByClassName(days[ngay.getDay()])[0].style.cssText = "box-sizing: border-box; border: 2px solid var(--foregroundColor); box-shadow: inset -5px -5px 6px rgba(255, 255, 255, 0.5), inset 5px 5px 6px rgba(0, 0, 0, 0.33),-5px -5px 10px rgba(255, 255, 255, 0.5), 5px 5px 10px rgba(0, 0, 0, 0.33); background-color: hsl(221, 75%, 78%)"; }
            else document.getElementsByClassName(week[iOfWeek])[0].getElementsByClassName(days[ngay.getDay()])[0].style.cssText = "box-sizing: border-box; border: 2px solid hsl(3, 100%, 87%); box-shadow: inset -5px -5px 6px rgba(255, 255, 255, 0.5), inset 5px 5px 6px rgba(0, 0, 0, 0.33),-5px -5px 10px rgba(255, 255, 255, 0.5), 5px 5px 10px rgba(0, 0, 0, 0.33); background-color: hsl(3, 100%, 78%)";
        }
        if (ngay.getDay() == 0 && ngay.getDate() != lastday(dt.getFullYear(), dt.getMonth())) { iOfWeek++; }
    }
    for (iOfWeek++; iOfWeek < 6; iOfWeek++) {
        document.getElementsByClassName(week[iOfWeek])[0].style.visibility = "hidden";
    }
}