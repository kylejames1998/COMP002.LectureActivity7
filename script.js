let form = document.getElementById("form");
let button = document.getElementById("button");
let textInput = document.getElementById("text");
let favcolor = document.getElementById("color");
// favcolor.innerText = localStorage.getItem("favcolor")

form.addEventListener("submit", event => {
    event.preventDefault();
    console.log(favcolor.value);
    localStorage.setItem("color", favcolor.value);
});

window.onload = function () {
    favcolor.value = localStorage.getItem("color")
};

 // favcolor.addEventListener("")

console.log(favcolor);