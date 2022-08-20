setInterval(showTime, 1000);
function showTime(){
	var time = new Date();
	var hour =time.getHours();
	var min =time.getMinutes();
	var sec =time.getSeconds();
	var am_pm="AM" 

	if (hour>12){
  hour=hour-12
  am_pm ="pm"
}


if (hour==0) {
	hour=12
	am_pm="am"
}

  hour = (hour < 10) ? "0" + hour: hour;
  min = (min< 10) ? "0" + min: min;
  sec = (sec < 10) ? "0" + sec: sec;

  var reloj = hour+":"+min+":"+sec+am_pm

  // console.log(reloj)

  document.getElementById("clock").innerHTML = reloj;
}

showTime();




