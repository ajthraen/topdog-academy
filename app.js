let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let faqButton = document.querySelector(".faqButton");
let faqButton2 = document.querySelector(".faqButton2");
let faqButton3 = document.querySelector(".faqButton3");

btn.onclick = function() {
    sidebar.classList.toggle("active");
}

function myFunction() {
    var element = document.getElementById("myDIV");
    element.classList.toggle("active");
    faqButton.classList.toggle("active");
}
function myFunction2() {
    var element = document.getElementById("myDIV2");
    element.classList.toggle("active");
    faqButton2.classList.toggle("active")
}
function myFunction3() {
    var element = document.getElementById("myDIV3");
    element.classList.toggle("active");
    faqButton3.classList.toggle("active")
}