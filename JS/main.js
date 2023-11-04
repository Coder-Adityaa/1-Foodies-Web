// Active Navbar 

let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("header-scrolled");
    } else {
        nav.classList.remove("header-scrolled")
    }
}



// Nav Hide

let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function (a) {
    a.addEventListener("click", function () {
        navCollapse.classList.remove("show")
    })
})

// Counter Design

// Facts counter

var project = setInterval(projectDone, 10)
var clients = setInterval(happyClients, 10)
var coffee = setInterval(cupsCoffee, 10)
var happyClients = setInterval(happyClients2, 10)
let count1 = 1;
let count2 = 1;
let count3 = 1;
let count4 = 1;

function projectDone() {
    count1++
    document.querySelector("#number1").innerHTML = count1
    if (count1 == 1234) {
        clearInterval(project)
    }
}

function happyClients() {
    count2++
    document.querySelector("#number2").innerHTML = count2
    if (count2 == 1312) {
        clearInterval(clients)
    }
}

function cupsCoffee() {
    count3++
    document.querySelector("#number3").innerHTML = count3
    if (count3 == 1142) {
        clearInterval(coffee)
    }
}
function happyClients2() {
        count4++
        document.querySelector("#number4").innerHTML = count4
        if (count4 == 1421) {
            clearInterval(happyClients)
        }
}