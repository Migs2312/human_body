const content = document.getElementById('content');
const head = document.getElementById('head');
var pause = false

function highlight(parameter) {
        head.classList.add("opacity_change");
        setTimeout(() => {
            head.style.opacity = "90%";
        }, 99);
}

function off(parameter) {
    if(content.className!=""){
        return;
    }
    else{
        setTimeout(() =>{
            head.classList.remove("opacity_change");
            head.style.opacity = "0%";
        }, 100);
    }
}

function info(parameter){
    content.classList.add("content_change");
    head.classList.add("opacity_change");
    setTimeout(() => {
        head.style.opacity = "90%";
    },999)
    setTimeout (() => {    
        content.innerHTML = "<h1>Cabeça</h1><br><h2>O que está na cabeça?</h2><br><h3>- Crânio<br>- Cérebro<br>- Cerebélo</h3><br><h2>Fatos sobre a cabeça:</h2><br><h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>";
        }, 500);
}