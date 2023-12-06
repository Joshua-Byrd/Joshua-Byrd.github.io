/**All accordion content is hidden by default in case JavaScript is disabled. This reveals it all if JavaScript is present. */
window.addEventListener("load", () => {
    const accordionContainer = document.querySelector("#accordion-container");
    accordionContainer.style.display = "flex";
})

/**Accordion------------------------------------------------------------------*/
const accordionContent = document.querySelectorAll(".accordion-content");

//Select the header in each blog post and add a toggle class "open"
//to show or hide the post
accordionContent.forEach((item, index) => {
    let header = item.querySelector("header")
    //when the header is clicked, toggle "open" class on the accordion content
    header.addEventListener("click", () => {
        item.classList.toggle("open");

        let description = item.querySelector(".description");
        if (item.classList.contains("open")) {
            //scroll height is the height of all child elements including
            //hidden ones
            description.style.height = `${description.scrollHeight}px`;
            item.querySelector("i").classList.replace("fa-plus","fa-minus");
        } else {
            description.style.height = "0px";
            item.querySelector("i").classList.replace("fa-minus","fa-plus");
        }
        
        console.log(description);
    })

})


/**11-18-23 Blog Post---------------------------------------------------------*/


//Select the blog div and call the randomization functions on click
const blogPostDiv1118 = document.querySelector("#blog-post-div-11-18-23");
blogPostDiv1118.addEventListener("click", () => {
    blogPostDiv1118.style.color = selectRandomColor();
    blogPostDiv1118.style.backgroundColor = selectRandomColor();
    blogPostDiv1118.style.border = selectRandomBorder();
})

/*
Constructs and returns as a string a random color by randomizing the RGB values.
*/
function selectRandomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return `rgb(${r}, ${g}, ${b})`;
}

/*
Constructs and returns as a string a border style by randomizing the size (up to 10 pixels), the style, and the color.
*/
function selectRandomBorder() {
    const borderStyle = ['solid', 'dotted', 'dashed', 'double', 'groove', 'ridge', 'inset', 'outset'];

    //select random pixel size < 10
    const px = Math.floor(Math.random() * 10) + 'px';

    //select random style
    const style = borderStyle[Math.floor(Math.random() * borderStyle.length)]

    //select random color
    const borderColor = selectRandomColor();
    
    return `${px} ${style} ${borderColor}`;
}
 
