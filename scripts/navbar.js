const navbar =document.querySelector(".header-navbar");
const navbarLis = document.querySelectorAll("li.menu-item");
const x = document.querySelector(".fa-x");
const bars = document.querySelector(".fa-bars");

navbar.addEventListener("click", () => {
    //apply open class to the navbar, lis, X, and bars
    navbar.classList.toggle("open");
    // navbar.style.height = "${navbar.scrollHeight}px";
    for(li of navbarLis) {
        li.classList.toggle("open");
    }
    
    x.classList.toggle("open");
    bars.classList.toggle("open");

})