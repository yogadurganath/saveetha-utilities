// Initialize app
var myApp = new Framework7();


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});


// Now we need to run the code that will be executed only for About page.
function calculate(){
var x,a;
x = document.getElementById("form3");
a = parseInt(x.elements["tw2"].value);
var b = 80*a/100;
var c =a-b;
document.getElementById("result2").innerHTML = "Should attend "+b+ " days & Can take leave upto "+c+" days";
}
function myFunction() {
var x,a,b;    
x = document.getElementById("form1");
a = parseInt(x.elements["tw"].value);
b = parseInt(x.elements["dp"].value);

var p = ((b/a)*100);
if(a<b)
{
    document.getElementById("result").innerHTML = "Error.! Wrong input format. !"
}
else{
    document.getElementById("result").innerHTML = p +" %";

}
}