function displayTime(){
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();

    var ampm = document.getElementById('am/pm');
    if(hrs >= 12){
        ampm.innerHTML = 'PM';
    }else{
        ampm.innerHTML = 'AM';
    }

    if(hrs > 12){
        hrs = hrs - 12;
    }
   
    document.getElementById('hr').innerHTML = hrs;
    document.getElementById('min').innerHTML = min;
    document.getElementById('sec').innerHTML = sec;
}
setInterval(displayTime, 1000);