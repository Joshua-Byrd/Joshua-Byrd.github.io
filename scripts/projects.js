let projectCount = 0;

//Create and mount the app inside the main section of the page
const app = Vue.createApp({
   
    data: function() {
        //data is a function that returns an object containing variables
        return {
            projects: [
                {
                id: projectCount++,
                heading: "Database for Fitness/Nutrition App",
                github: "https://github.com/Joshua-Byrd/CS669_term_project",
                description: "This PostgreSQL database was my term project for CS669 at Boston University. I built it with the idea that it could be used for a fitness and nutrition tracking app. With this database, an app could store data about users' workouts, food eaten, and so on, and query for statistics for both. Included in  the script are queries to populate all tables, stored procedures to apply transactions like creating a new template entry and associating a template with a users, and triggers for updating a users' personal bests and logging a password change by a user."},
                {
                id: projectCount++,
                heading: "MVC App in Java",
                github: "https://github.com/Joshua-Byrd/GroupProject",
                description: "This was a group project, completed with another student, as the final project of CIT594 at The University of Pennsylvania, It utilizes a rudimentary MVC pattern where the model accepts either a JSON or CSV file of tabular data and parses it into various data structures, while the view provides the user with a CLI menu consisting of multiple data analysis functions. The controller of course acts as the go-between for the model and view and provides validation for incoming files before passing them to the model."},
                {
                id: projectCount++,
                heading: "Data Analysis using Python and Jupyter Notebook",
                github: "https://github.com/Joshua-Byrd/Exit_Surveys_Analysis/blob/master/Exit_Surveys_Analysis.ipynb",
                description: " In this project, I analyzed two datasets using Python and Pandas in Jupyter Notebook. Both datasets consisted of employee exit surveys and were obtained from the Department of Education, Training, and Employment; and from the Technical and Further Education Institute, both in Queensland, Autralia. Each contained various data points about employees such as employee id and start and end dates, as well as information about why employees left their positions. The project consisted of cleaning the data to deal with null values and odd entries, as well as getting both sets into workable shape. Then basic analysis to determine why employees left their positions, if it differed between short- and long-term employees, and how much of a role job dissatisfaction played in their leaving."},
                {
                id: projectCount++,
                heading: "Pool Maintenance Program",
                github: "https://github.com/Joshua-Byrd/PMP",
                description: "A simple CLI Python app for pool operators, PMP prompts the user for their chemical test readings,then calculates and prints the water's saturation index and what (if any) chemicals and how much to be added. Also provides options to export daily results to a csv file."}

            ]
        }
    },

    methods: {},
})

//custom component for main header/navbar
app.component("header-navbar", {
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
    props: {
        header: {
            type: String,
            default: "DEFAULT HEADER"
        }
    },
    methods: {}
})
app.mount("#vue-projects-main");

