var sum = 0;
function account(principal, startDay, cb){
  var interest = 0.01;
	var toDay    = new Date();
	var days     = parseInt((toDay - startDay)/(60*60*24*1000), 10);
  var total    = principal + (principal * interest) * days;
  sum += total;
  cb(days, total);
}

account(150, (new Date(2018, 8-1, 10)), function(days, total){
  document.getElementById('days1-yuya').innerHTML = days;
  document.getElementById('money1-yuya').innerHTML = total;
});

account(2400, (new Date(2019, 3-1, 27)), function(days, total){
  document.getElementById('days2-yuya').innerHTML = days;
  document.getElementById('money2-yuya').innerHTML = total;
});

document.getElementById('total-yuya').innerHTML = sum;

document.getElementById('start-time-yuya').innerHTML = new Date(2018, 8-1, 10).toLocaleString()

function time(){
  var now = new Date();
  var watch = now.toLocaleString();
  document.getElementById('now-time-yuya').innerHTML = watch;
  setTimeout("time()", 1000);
}

time();

$(function(){
  $("#grid-content-yuya").vgrid({
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
