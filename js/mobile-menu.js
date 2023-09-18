const mobile_menu_button = document.querySelector(".menu-icon")
const mobile_menu = document.querySelector(".mobile-menu")
mobile_menu_button.addEventListener("click",()=>{
    mobile_menu.classList.toggle("active")
})