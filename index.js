const botaoTrailer = document.querySelector(".botao-trailer");
const popup = document.querySelector(".popup");
const video = document.getElementById("video");
const fecharPopup = document.querySelector(".close-popup");
const linkVideo =  video.src; 


function alternar () {
    popup.classList.toggle("aberto");

}

botaoTrailer.addEventListener("click", () => {
    alternar(); 
    video.setAttribute("src", linkVideo) 
});


 fecharPopup.addEventListener("click", () => {
    alternar(); 
    video.setAttribute("src", ""); 
});