const slider = document.querySelector(".input-slider")
const value = document.querySelector(".value")
value.textContent = slider.value;

slider.oninput = function (){
    value.textContent = this.value;
}