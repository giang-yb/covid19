let today = new Date();
let date =  "Thứ" + ' ' + today.getDay() + ', ' + today.getDate() + '/' + (today.getMonth()+1) + '/' + today.getFullYear();
document.getElementById("hvn").innerHTML = date;