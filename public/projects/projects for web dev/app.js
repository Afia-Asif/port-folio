function getNumber(num){
    var result = document.getElementById("result")
   result.value += num;
}
function clearResult(){
    var result = document.getElementById("result")
    result.value= ""
 }
function getResult(){
    var result = document.getElementById("result") 
   result.value= eval(result.value)
}
// let now = new Date();
// console.log(now)


// var today = new Date();
// var day = today.getDay();
// var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
// var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
// var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
// var dateTime = date+' '+time;
 
// document.getElementById("displayDateTime").innerHTML = dateTime + ' <br> Day :- ' + daylist[day];

setInterval(upDateTime, 1000);
function upDateTime(){
    time.innerHTML= new Date();
}


// for(let i = 0;i<=10; i++){
//     console.log(i)
// }


let u = 'ali';
let y = 'ahmed';
let t = 10
let z = `${u} ${y} ${t}`
console.log(z)





























