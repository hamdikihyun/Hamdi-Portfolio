const cardModal = document.querySelector(".profile-card-popup");
const closeCardModal = document.querySelector(".profile-card-popup-close");

window.addEventListener("load",function(){
    showModal();
})

function showModal(){
    const timeLimit = 5 //seconds
    let i=0;
    const timer = setInterval(function(){
        i++;
        if(i == timeLimit){
            clearInterval(timer);
            cardModal.classList.add("show");
        }
    },1000);
}

closeCardModal.addEventListener("click",function(){
    cardModal.classList.remove("show");
})