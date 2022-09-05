let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");

btn.onclick = function() {
    sidebar.classList.toggle("active");
}

function myFunction() {
    var element = document.getElementById("myDIV");
    element.classList.toggle("active");
}
function myFunction2() {
    var element = document.getElementById("myDIV2");
    element.classList.toggle("active");
}
function myFunction3() {
    var element = document.getElementById("myDIV3");
    element.classList.toggle("active");
}