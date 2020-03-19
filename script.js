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
if (name != "") {
  alert("Welcome to console404, " + name + "!")
} else {
  var name = prompt("Please enter your name.");
	document.cookie = name + ";path=/;secure;expires=" + time.toUTCString();
}
