"use strict";

const userName = document.getElementById("name");
const userBday = document.getElementById("bday");
const submit = document.getElementById("submit");

let content;
let value;
let time;


const doSomething = function(){
  submit.addEventListener("click", userInput);
  console.log(document.cookie);
};


const userInput = function(){
  name = userName.value + userBday.value;
  value = 42;
  time = 1;
  console.log(userBday.value)
  createCookie(name, value, time);
};


function createCookie(name, value, days) {
    let expires;
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 0.0069));
        expires = "; expires=" + date.toGMTString();
    }
    else {
        expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
    console.log(document.cookie);

};




window.addEventListener('load', doSomething);
