//Create and mount the app inside the main section of the page
const app = Vue.createApp({
   
    data: function() {
        //data is a function that returns an object containing variables
        return {}
    },

    methods: {}

})
//custom component representing a project
app.component("project", {
    template: `
        <article class="project">
            <header>
                <h2>
                    {{heading}}
                </h2>
                <h3 class="project-github-link"><a
                        href="{{githubLink}}">See
                        it on Github</a>
                </h3>
            </header>
            <p class="project-description">{{projectDesc}}</p>
        </article>
        <footer><hr></footer>
    `,

    data: function() {
        return {
        heading: "Test",
        githubLink: "https://github.com/",
        projectDesc: "lorem ipsum"
        }
    },

    methods: {

    }
})
//custom component for main navbar
app.component("navbar", {
    template: `
        <header>
            <nav class="header-navbar">
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li class="spacer">\\</li>
                    <li><a href="resume.html">Resume</a></li>
                    <li class="spacer">\\</li>
                    <li><a href="projects.html">Projects</a></li>
                    <li class="spacer">\\</li>
                    <li><a href="blog.html">Blog</a></li>
                    <li class="spacer">\\</li>
                    <li><a href="gallery.html">Gallery</a></li>
                    <li class="spacer">\\</li>
                    <li><a href="about.html">About</a></li>
                    <li class="spacer">\\</li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </nav>

            <h1>
                {{header}}
            </h1>
        </header>
    `,
    data: function() {
        return {
            header: "Projects"
        }
    },
    methods: {}
})
app.mount("#vue-projects-main");

