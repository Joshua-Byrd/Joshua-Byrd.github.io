let projectCount = 0;

//Create and mount the app inside the main section of the page
const app = Vue.createApp({
  data: function () {
    //data is a function that returns an object containing variables
    return {
      projects: [
        {
          id: projectCount++,
          heading: "Desolate Depths",
          github: "https://github.com/Joshua-Byrd/DesolateDepths",
          description:
            "Desolate Depths is a text-based adventure game in the style of Zork and Curses. Per the genre norm, the player is presented with a description of their current location and can enter commands such as 'go north', 'get shortsword', or 'consume health potion' to interact with the environment. Additionally, the game generates random encounters with monsters that the player is able to engage in combat with, possibly earning gold or items.",
          logo: "./images/icons/java-icon.svg",
          alt: "The Java logo",
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
          heading: "GoodReads Imitation",
          github: "https://github.com/Joshua-Byrd/GoodReadsImitation",
          description:
            "This web server, built with Node/Express/Mongo.db, recreates some of the basic functionality of GoodReads.com, the popular book logging and review website. A user can search for books (by author, title, or ISBN) and add them to their read or want-to-read list, and view and edit their own profile. An administrator can view and search for both users or books, as well as add, edit, or delete users or books.",
          logo: "./images/icons/javascript.svg",
          alt: "The JavaScript logo.",
        },
        {
          id: projectCount++,
          heading: "Nutrition Tracker",
          github:
            "https://github.com/Joshua-Byrd/NutritionTracker",
          description:
            "This Android application, written in Kotlin, allows users to track their daily nutritional intake. A user is able to search a database of food items and add them to their current day, and the app displays a list of all foods eaten as well as a summary of their nutritional content",
          logo: "./images/icons/Kotlin_Icon.svg",
          alt: "The Kotlin logo.",
        },
      ],
    };
  },

  methods: {},
});

app.mount("#vue-projects-main");
