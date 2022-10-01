function open(){
    document.querySelector(".navbar nav").classList.toggle("opened")
    document.querySelector(".welcome .arrow").classList.toggle("hidden")
    document.querySelector(".welcome .text-heading").classList.toggle("hidden")
}
document.querySelector(".open").addEventListener("click",open);