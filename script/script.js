const content = document.getElementById('content');
const head = document.getElementById('head');
var pause = false

function highlight(parameter) {
        head.classList.add("opacity_change");
        setTimeout(() => {
            head.style.opacity = "90%";
        }, 99);
};

function off(parameter) {
    if(parameter!=null){
    if(content.className!=""){
        return;
    }
    else{
        setTimeout(() =>{
            head.classList.remove("opacity_change");
            head.style.opacity = "0%";
        }, 100);
    };
    }
    else{
            head.classList.remove("opacity_change");
            head.style.opacity = "0%";
        };
};

function info(parameter){
    content.classList.remove("content_change");
    setTimeout(() =>{ 
        content.classList.add("content_change");
    }, 0.1)
    if(parameter!=null){
        head.classList.add("opacity_change");
        setTimeout(() => {
            head.style.opacity = "90%";
        },999)
    }
    setTimeout (() => {
        if(parameter!=null){
        content.innerHTML = "<h1><img id='delete' src='style/images/delete.png' onclick='off(null), info(null)'>Cabeça</h1><br><h2>O que está na cabeça?</h2><br><h3>- Crânio<br>- Cérebro<br>- Cerebélo</h3><br><h2>Fatos sobre a cabeça:</h2><br><h3>- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br>- Além disso tembém é possível encotrar todos os 5 sentidos na cabeça: olfato, tato, audição, paladar e visão.</h3><br><h2>Fontes:</h2><br><h3>https://morfologia.paginas.ufsc.br/files/2020/07/Livro-Novo-Anatomia.pdf</h3>"
        
        }
        else{
            content.innerHTML = "<h1>Bem vindo, veja em detalhe as partes do corpo humano!</h1 >"
        }
    }, 500);
};