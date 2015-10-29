var sum = 0;
function account(principal, startDay, cb){
  var interest = 0.01;
	var toDay    = new Date();
	var days     = parseInt((toDay - startDay)/(60*60*24*1000), 10);
  var total    = principal + (principal * interest) * days;
  sum += total;
  cb(days, total);  
}

account(6000, (new Date(2015, 4-1, 14)), function(days, total){
	document.getElementById('days1-hiroyuki').innerHTML = days;
	document.getElementById('money1-hiroyuki').innerHTML = total;
});

account(2000, (new Date(2015, 4-1, 23)), function(days, total){
	document.getElementById('days2-hiroyuki').innerHTML = days;
	document.getElementById('money2-hiroyuki').innerHTML = total;
});

account(2000, (new Date(2015, 4-1, 30)), function(days, total){
	document.getElementById('days3-hiroyuki').innerHTML = days;
	document.getElementById('money3-hiroyuki').innerHTML = total;
});

account(5000, (new Date(2015, 6-1, 09)), function(days, total){
	document.getElementById('days4-hiroyuki').innerHTML = days;
	document.getElementById('money4-hiroyuki').innerHTML = total;
});

account(60000, (new Date(2015, 8-1, 01)), function(days, total){
	document.getElementById('days5-hiroyuki').innerHTML = days;
	document.getElementById('money5-hiroyuki').innerHTML = total;
});

account(10000, (new Date(2015, 10-1, 29)), function(days, total){
	document.getElementById('days6-hiroyuki').innerHTML = days;
	document.getElementById('money6-hiroyuki').innerHTML = total;
});

document.getElementById('total-hiroyuki').innerHTML = sum - 6000;

document.getElementById('start-time-hiroyuki').innerHTML = new Date(2015, 4-1, 14).toLocaleString()

function time(){
  var now = new Date();
  var watch = now.toLocaleString();
  document.getElementById('now-time-hiroyuki').innerHTML = watch;
  setTimeout("time()", 1000);
}

time();

$(function(){
  $("#grid-content-hiroyuki").vgrid({
    easing: "easeOutQuint",
    time: 400,
    delay: 20,
    fadeIn: {
      time: 500,
      delay: 50,
      wait: 500
    }
  });
});
