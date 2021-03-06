let projectCount = 0;

//Create and mount the app inside the main section of the page
const app = Vue.createApp({
  data: function () {
    //data is a function that returns an object containing variables
    return {
      projects: [
        {
          id: projectCount++,
          heading: "Personal Portfolio Website",
          github: "https://joshua-byrd.github.io/",
          description:
            "This portfolio website (the site you are currently viewing) was created for the term project for CS601 at Boston University. It consists primarily of HTML, CSS, and vanilla JavaScript, although per the requirements of the project, the current page was built using Vue.js. Full source code can be found at the Github link above.",
          logo: "./images/icons/javascript.svg",
          alt: "The PostgresQL logo.",
        },
        {
          id: projectCount++,
          heading: "PostgreSQL Fitness Database",
          github: "https://github.com/Joshua-Byrd/CS669_term_project",
          description:
            "This PostgreSQL database was my term project for CS669 at Boston University. I built it to be used for a fitness and nutrition tracking app. With this database, an app could store data about users' workouts, food eaten, and so on, and query for statistics for both. Included in  the script are queries to populate all tables, stored procedures to apply transactions like creating a new template entry and associating a template with a users, and triggers for updating a users' personal bests and logging a password change by a user.",
          logo: "./images/icons/postgresql-icon.svg",
          alt: "The PostgresQL logo.",
        },
        {
          id: projectCount++,
          heading: "MVC App in Java",
          github: "https://github.com/Joshua-Byrd/GroupProject",
          description:
            "This was a group project, completed with another student, as the final project of CIT594 at The University of Pennsylvania, It utilizes a rudimentary MVC pattern where the model accepts either a JSON or CSV file of tabular data and parses it into various data structures, while the view provides the user with a CLI menu consisting of multiple data analysis functions. The controller of course acts as the go-between for the model and view and provides validation for incoming files before passing them to the model.",
          logo: "./images/icons/java-icon.svg",
          alt: "The Java logo.",
        },
        {
          id: projectCount++,
          heading: "Data Analysis in Python",
          github:
            "https://github.com/Joshua-Byrd/Exit_Surveys_Analysis/blob/master/Exit_Surveys_Analysis.ipynb",
          description:
            " In this project, I analyzed two datasets using Python and Pandas in Jupyter Notebook. Both datasets contained data from employee exit surveys, and the project consisted of cleaning the data to deal with null values and odd entries followed by basic analysis to determine why employees left their positions, if it differed between short- and long-term employees, and how much of a role job dissatisfaction played in their leaving.",
          logo: "./images/icons/python-icon.svg",
          alt: "The Python logo.",
        },
        {
          id: projectCount++,
          heading: "FSM CSV Parser",
          github:
            "https://github.com/Joshua-Byrd/CIT594-Module7-Programming-Assignment",
          description:
            "A CSV parser built in Java using a finite state machine, completed as part of the curriculum of CIT594 at the University of Pennsylvania.",
          logo: "./images/icons/java-icon.svg",
          alt: "The java logo.",
        },
        {
          id: projectCount++,
          heading: "Pool Maintenance Program",
          github: "https://github.com/Joshua-Byrd/PMP",
          description:
            "A simple CLI Python app for pool operators, PMP prompts the user for their chemical test readings,then calculates and prints the water's saturation index and what (if any) chemicals and how much to be added. Also provides options to export daily results to a csv file.",
          logo: "./images/icons/python-icon.svg",
          alt: "The Python logo.",
        },
      ],
    };
  },

  methods: {},
});

app.mount("#vue-projects-main");
