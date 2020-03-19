function linkAlertS() {
    var r = confirm("Do you want to be transferred to Soundcloud.com?");
    if (r == true) {
        window.open("https://soundcloud.com/console404");
    }
}
function linkAlertI() {
    var r = confirm("Do you want to be transferred to Instagram.com?");
    if (r == true) {
        window.open("https://www.instagram.com/console404");
    }
}
var time = new Date();
time.setTime(time.getTime() + 24 * 60 * 60 * 1000);
if (activityCheck != "") {
    alert("Welcome back!");
    console.log("alert finished");
}
document.cookie = "BeenHereRecently=true;path=/;secure;expires=" + time.toUTCString();
var activityCheck = document.cookie;
console.log("reached the end");
