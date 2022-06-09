const burgerButton = document.querySelector(".burger");
const menu = document.querySelector(".nav");

function toggle(){
    burgerButton.classList.toggle("active");
    menu.classList.toggle("active");
    if(burgerButton.classList.contains("active")){
        burgerButton.classList.remove("close")
    }
    else {
        burgerButton.classList.add("close");
    }
}

burgerButton.addEventListener("click",toggle);