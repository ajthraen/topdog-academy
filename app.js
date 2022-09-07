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
let users = [
{
    userName: 'Andrew',
    userEmail: 'ajtrain@gmail.com',
    password: 'test123',
    subStatus: 'VIP',
    lessonsComp: [0, 1],
},
{
    userName: 'Andy',
    userEmail: 'train@gmail.com',
    password: 'test1',
    subStatus: 'Pro',
    lessonsComp: [1, 1],
},
{
    userName: 'AJ',
    userEmail: 'AJ@gmail.com',
    password: 'test',
    subStatus: 'None',
    lessonsComp: [0, 0],
},
];
//console.log(users.userEmail);
//console.log(users[0].subStatus);
//console.log(users.lessonsComp[1]);

function login(userEmail, password) {
    for (let i = 0; i < users.length; i++) {
        // console.log(users[i].userEmail, users[i].password);
        if (users[i].userEmail == userEmail){
            //console.log(users[i].userEmail);
            if (users[i].password == password){
                console.log('You are logged in')
                return;
            }
            else {
                console.log('Password Incorrect') 
                return;
            }
        }
        else if (i == (users.length - 1)) {
            console.log('User Not Found')
        }
        //return;
    }
}
login ('AJ@gmail.com', 'test');