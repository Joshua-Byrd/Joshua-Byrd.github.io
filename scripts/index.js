/**
 * Adds the glow effect to the down arrow
 */
window.addEventListener("load", () => {
    const subheading = document.querySelector("#subheading-1");
    const subheading2 = document.querySelector("#subheading-2");
    const downArrow = document.querySelector("#down-arrow");
    
    //subheading-1 appears first...
    setTimeout(() => {
        subheading.style.opacity = 1;
    }, 1000)

    //...then the second subheading...
    setTimeout(() => {
        subheading2.style.opacity = 1;
    }, 2000)

    //...finally the down arrow
     setTimeout(() => {
       downArrow.style.opacity = 1;
    }, 3000)

    //glow appears every 1 to 4 seconds
    setInterval(() => {
        downArrow.classList.toggle("glow");
    }, Math.floor((Math.random() * 4 + 1) * 1000));
});


/**
 * Reveals the headings on scroll
 */
window.addEventListener("scroll", () => {
     const hiddenSections = document.querySelectorAll(".hidden");

    for (hidden of hiddenSections) {
        const windowHeight = window.innerHeight;
        let hiddenTop = hidden.getBoundingClientRect().top;
        let hiddenPoint = 150;

        if (hiddenTop - windowHeight - hiddenTop) {
            hidden.classList.add("active");
        } else {
            hidden.classList.remove("active");
        }
    }
});



