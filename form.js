// Link values of the two elements

// Get values
var slider = document.getElementById("slider");


var number = document.getElementById("number");


slider.onchange = function(){
    number.value = slider.value;
}

number.onchange = function() {
    slider.value = number.value;
}





