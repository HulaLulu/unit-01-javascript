"use strict";
const EXAM_DATE = new date (2026, 10, 25)

function checkScreen() {
let screenMsg = document.getElementById("screenMsg")
    if (window.width < 600) {
    screenMsg.textContent = "Small screen: turn your device sideways for a bigger card."
    } else {
        screenMsg.textContent = "Window width: " + innerWidth + "px"
    }
}

function startApp(){
    checkScreen()
}