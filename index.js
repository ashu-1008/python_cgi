
var slider = document.getElementById("myRange1")

// for hover tracker
element = document.getElementById("hover-range");

function update_slider_color(){
     
    var x = slider.value;
    element.innerText = x;
    var p = 3.85*x+ 7;
    element.style.left = `${p}px`;
  
    var color = 'linear-gradient(90deg, rgb(117,252,117) ' + (x/120)*100 + '%, rgb(214,214,214)' + (x/120)*100 + '%)';
    slider.style.background = color;    
    
}

slider.addEventListener("mousemove", update_slider_color);
slider.addEventListener("click", update_slider_color);

// to fill input
console.log("js loaded")
var output = document.getElementById("input-box-1");

output.value = slider.value;


slider.oninput = function(){
  
    output.value = this.value;
}

output.addEventListener("input", function(){
    if (output.value === ""){
        slider.value = 0;}
    slider.value = output.value;
    var p = 3.85*output.value+ 7;
    element.style.left = `${p}px`;
    update_slider_color();
})

// for discrete slider

var slider_descrete = document.getElementById("myRange2")
var output_descrete = document.getElementById("input-box-2");

output_descrete.value = slider_descrete.value;

element_2 = document.getElementById("hover-range-2");
slider_descrete.oninput = function(){
    output_descrete.value = this.value;
    var x = this.value;
    var p = 3.88*x+ 5.5;
    element_2.style.left = `${p}px`;
    element_2.innerText = x;
    console.log(x)
}

output_descrete.addEventListener("input", function(){
    if (output_descrete.value === ""){
        slider_descrete.value = 0;
        // var p = 3.95*output_descrete.value+ 5.5;
        // element_2.style.left = `${p}px`;
        // element_2.innerText = output_descrete.value;    
    }
    // var x = Math.ceil((this.value+1)/10)
    var p = 3.95*output_descrete.value+ 5.5;
    element_2.style.left = `${p}px`;
    element_2.innerText = output_descrete.value;

    slider_descrete.value = output_descrete.value;
})


// clear data by cancel button

var cancel_btn = document.getElementById("btn-cancel");

cancel_btn.addEventListener('click', function(){
    console.log("reset");
    var p = 5.5;
    element_2.style.left = `${p}px`;
    element_2.innerText = 0;

    element.innerText = 0;
    var p = 7;
    element.style.left = `${p}px`;
    var color = 'linear-gradient(90deg, rgb(117,252,117) ' + 0 + '%, rgb(214,214,214)' + 0 + '%)';
    slider.style.background = color;
})


