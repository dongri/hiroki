var sum = 0;
function account(principal, startDay, cb){
    var interest = 0.01;
	var toDay    = new Date();
	var days     = parseInt((toDay - startDay)/(60*60*24*1000), 10);
    var total    = principal + (principal * interest) * days;
    sum += total;
    cb(days, total);  
}

account(30000, (new Date(2013, 2-1, 14)), function(days, total){
	document.getElementById('days1').innerHTML = days;
	document.getElementById('money1').innerHTML = total;
});

account(5000, (new Date(2013, 2-1, 19)), function(days, total){
	document.getElementById('days2').innerHTML = days;
	document.getElementById('money2').innerHTML = total;
});

account(40000, (new Date(2013, 2-1, 21)), function(days, total){
	document.getElementById('days3').innerHTML = days;
	document.getElementById('money3').innerHTML = total;
});

account(10000, (new Date(2013, 3-1, 27)), function(days, total){
	document.getElementById('days4').innerHTML = days;
	document.getElementById('money4').innerHTML = total;
});

account(500, (new Date(2013, 3-1, 29)), function(days, total){
	document.getElementById('days5').innerHTML = days;
	document.getElementById('money5').innerHTML = total;
});

account(10000, (new Date(2013, 3-1, 30)), function(days, total){
	document.getElementById('days6').innerHTML = days;
	document.getElementById('money6').innerHTML = total;
});

account(10000, (new Date(2013, 6-1, 25)), function(days, total){
	document.getElementById('days7').innerHTML = days;
	document.getElementById('money7').innerHTML = total;
});

account(10000, (new Date(2013, 6-1, 26)), function(days, total){
	document.getElementById('days8').innerHTML = days;
	document.getElementById('money8').innerHTML = total;
});

account(20000, (new Date(2013, 7-1, 10)), function(days, total){
	document.getElementById('days9').innerHTML = days;
	document.getElementById('money9').innerHTML = total;
});

account(70000, (new Date(2013, 7-1, 29)), function(days, total){
	document.getElementById('days10').innerHTML = days;
	document.getElementById('money10').innerHTML = total;
});

account(10000, (new Date(2013, 8-1, 12)), function(days, total){
	document.getElementById('days11').innerHTML = days;
	document.getElementById('money11').innerHTML = total;
});

account(30000, (new Date(2013, 10-1, 18)), function(days, total){
	document.getElementById('days12').innerHTML = days;
	document.getElementById('money12').innerHTML = total;
});

account(5000, (new Date(2014, 10-1, 31)), function(days, total){
	document.getElementById('days13').innerHTML = days;
	document.getElementById('money13').innerHTML = total;
});

account(5000, (new Date(2014, 11-8, 31)), function(days, total){
  document.getElementById('days14').innerHTML = days;
  document.getElementById('money14').innerHTML = total;
});

document.getElementById('total').innerHTML = sum;

document.getElementById('start-time').innerHTML = new Date(2013, 2-1, 14).toLocaleString()

function time(){
  var now = new Date();
  var watch = now.toLocaleString();
  document.getElementById('now-time').innerHTML = watch;
  setTimeout("time()", 1000);
}

time();

