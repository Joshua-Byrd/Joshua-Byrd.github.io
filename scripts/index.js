window.addEventListener("scroll", reveal)

function reveal() {
    const hiddenSections = document.querySelectorAll(".hidden");

    for (hidden of hiddenSections) {
        const windowHeight = window.innerHeight;
        let hiddenTop = hidden.getBoundingClientRect().top;
        let hiddenPoint = 150;

        if (hiddenTop - windowHeight - hiddenTop) {
            hidden.classList.add("active");
            hiddenSections[0].childNodes[3].classList.add("active");
        } else {
            hidden.classList.remove("active");
            hiddenSections[0].childNodes[3].classList.remove("active");
        }
    }
}


// const app = Vue.createApp({
//     data: function() {
//         return {
//             greeting: "Hello Vue JS!"
//         }
//     }
// })

// app.mount("#app");