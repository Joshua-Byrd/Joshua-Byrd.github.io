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
app.mount("#vue-projects-main");

