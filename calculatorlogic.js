///*.5 * (P2 - P1) * (Q1 - Q2)*/
//balance now = p1//
//rate now ==p2//
//rate now == q1//
//years now ==q2//

function onlyNumbers(keyinput){
var input=keyinput.charCode? keyinput.charCode : keyinput.keyCode;
// if key press is not a backspace, a period, or a number, then stop character input
if ((input != 8) && (input != 46)) {
if ((input < 48) || (input > 57)) {
return false;
}
}
}

function totalDWL()
{

  // Reset error messages to blank
document.getElementById('q1Error').innerHTML = '';
document.getElementById('q2Error').innerHTML = '';
document.getElementById('p1Error').innerHTML = '';
document.getElementById('p2Error').innerHTML = '';

// Form validation checking
if ((document.dwlCalc.p1.value == null) || (document.dwlCalc.p1.value.length == 0) || (isNaN(document.dwlCalc.p1.value) == true))
{
document.getElementById('finalDWL').innerHTML = '';
document.getElementById('p1Error').innerHTML = 'Please enter a valid number';
} else if ((document.dwlCalc.p2.value == null) || (document.dwlCalc.p2.value.length == 0) || (isNaN(document.dwlCalc.p2.value) == true))
{
document.getElementById('finalDWL').innerHTML = '';
document.getElementById('p2Error').innerHTML = 'Please enter a valid number';
} else if ((document.dwlCalc.q1.value == null) || (document.dwlCalc.q1.value.length == 0) || (isNaN(document.dwlCalc.q1.value) == true))
{
document.getElementById('finalDWL').innerHTML = '';
document.getElementById('q1Error').innerHTML = 'Please enter a valid number';
} else if ((document.dwlCalc.q2.value == null) || (document.dwlCalc.q2.value.length == 0) || (isNaN(document.dwlCalc.q2.value) == true))
{
document.getElementById('finalDWL').innerHTML = '';
document.getElementById('q2Error').innerHTML = 'Please enter a valid number';
} else
{
// Set variables from form data
var price1 = document.dwlCalc.p1.value;
var price2 = document.dwlCalc.p2.value;
var quant1 = document.dwlCalc.q1.value;
var quant2 = document.dwlCalc.q2.value;

var divideBy2 = 0.5;
  
// Calculate final DWL and display result
var dwl = ((price1-price2) * (quant1-quant2) * divideBy2);
document.getElementById('finalDWL').innerHTML = $((price1-price2)*(quant1-quant2)*divideBy2);
console.log(dwl);
$("#finalDWL").text(dwl);
}



  

}
function totalDWLReset()
{
// Reset 
document.getElementById('finalDWL').innerHTML = '';
document.getElementById('q1Error').innerHTML = '';
document.getElementById('q2Error').innerHTML = '';
document.getElementById('p1Error').innerHTML = '';
document.getElementById('p2Error').innerHTML = '';
document.dwlCalc.p1.value = null;
document.dwlCalc.p2.value = null;
document.dwlCalc.q2.value = null;
}


// function format1(n) {
//     return " " + n.toFixed(2).replace(/./g, function(c, i, a) {
//         return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "," + c : c;
//     });
// }
$("#p1Range").attr({
   "max" : 10000,
   "min" : 0
});
$("#p2Range").attr({
   "max" : 100000,
   "min" : 0
});
$("#q1Range").attr({
   "max" : 100000,
   "min" : 0
});
$("#q2Range").attr({
   "max" : 100000,
   "min" : 0
 });
// });
// $.fn.addCommas = function() {
//   $(this).each(function(){
//     $(this).text(addCommas($(this).text()));
//   });
// };