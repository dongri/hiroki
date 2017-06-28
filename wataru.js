var sum = 0;
function account(principal, startDay, cb){
  var interest = 0.01;
	var toDay    = new Date();
	var days     = parseInt((toDay - startDay)/(60*60*24*1000), 10);
  var total    = principal + (principal * interest) * days;
  sum += total;
  cb(days, total);
}

account(23000000000000, (new Date(2017, 6-1, 27)), function(days, total){
	document.getElementById('days1-wataru').innerHTML = days;
	document.getElementById('money1-wataru').innerHTML = total;
});

document.getElementById('total-wataru').innerHTML = sum;

document.getElementById('start-time-wataru').innerHTML = new Date(2016, 6-1, 27).toLocaleString()

function time(){
  var now = new Date();
  var watch = now.toLocaleString();
  document.getElementById('now-time-wataru').innerHTML = watch;
  setTimeout("time()", 1000);
}

time();

$(function(){
  $("#grid-content-wataru").vgrid({
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
