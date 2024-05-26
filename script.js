//first project
let firstProject = document.getElementById("first-project");
let first_front = document.getElementById("first_front");
let first_back = document.getElementById("first_back");

//second project
let secondProject = document.getElementById("second-project");
let second_front = document.getElementById("second_front");
let second_back = document.getElementById("second_back");

//third project
let thirdProject = document.getElementById("third-project");
let third_front = document.getElementById("third_front");
let third_back = document.getElementById("third_back");

//fourth project
let fourthProject = document.getElementById("fourth-project");
let fourth_front = document.getElementById("fourth_front");
let fourth_back = document.getElementById("fourth_back");

//fifth project
let fifthProject = document.getElementById("fifth-project");
let fifth_front = document.getElementById("fifth_front");
let fifth_back = document.getElementById("fifth_back");

//sixth project
let sixthProject = document.getElementById("sixth-project");
let sixth_front = document.getElementById("sixth_front");
let sixth_back = document.getElementById("sixth_back");

let firstProjectFuncOn = function() {
    //when the card is not flipped

    if(first_front.style.display !== "none") {
        first_front.style.display = "none";
        first_back.style.display = "block";
    } else {
        first_front.style.display = "block";
        first_back.style.display = "none";
    }
}

let secondProjectFuncOn = function() {
    if(second_front.style.display !== "none") {
        second_front.style.display = "none";
        second_back.style.display = "block";
    } else {
        second_front.style.display = "block";
        second_back.style.display = "none";
    }
}

let thirdProjectFuncOn = function() {
    if(third_front.style.display !== "none") {
        third_front.style.display = "none";
        third_back.style.display = "block";
    } else {
        third_front.style.display = "block";
        third_back.style.display = "none";
    }
}

let fourthProjectFuncOn = function() {
    if(fourth_front.style.display !== "none") {
        fourth_front.style.display = "none";
        fourth_back.style.display = "block";
    } else {
        fourth_front.style.display = "block";
        fourth_back.style.display = "none";
    }
}

let fifthProjectFuncOn = function() {
    if(fifth_front.style.display !== "none") {
        fifth_front.style.display = "none";
        fifth_back.style.display = "block";
    } else {
        fifth_front.style.display = "block";
        fifth_back.style.display = "none";
    }
}

let sixthProjectFuncOn = function() {
    if(sixth_front.style.display !== "none") {
        sixth_front.style.display = "none";
        sixth_back.style.display = "block";
    } else {
        sixth_front.style.display = "block";
        sixth_back.style.display = "none";
    }
}

firstProject.addEventListener("click", firstProjectFuncOn);
secondProject.addEventListener("click", secondProjectFuncOn);
thirdProject.addEventListener("click", thirdProjectFuncOn);
fourthProject.addEventListener("click", fourthProjectFuncOn);
fifthProject.addEventListener("click", fifthProjectFuncOn);
sixthProject.addEventListener("click", sixthProjectFuncOn);
