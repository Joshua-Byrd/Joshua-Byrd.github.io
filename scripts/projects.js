let projectCount = 0;

//Create and mount the app inside the main section of the page
const app = Vue.createApp({
  data: function () {
    //data is a function that returns an object containing variables
    return {
      projects: [
      {
        id: projectCount++,
        heading: "The Agora",
        github: "https://github.com/Joshua-Byrd/the_agora",
        description:
          "The Agora is a Kanban-style news aggregator built with Angular and the NewsAPI. Users can fetch live headlines and organize them into boards such as 'To Read,' 'Reading Now,' and 'Archived' using Angular CDK’s drag-and-drop functionality. Local storage caching reduces API calls and ensures articles remain available between sessions. This project highlights Angular’s modern component paradigm, external API integration, and designing interactive user experiences.",
        logo: "./images/icons/angular_gradient.png",
        alt: "The Angular logo.",
      },  
      {
        id: projectCount++,
        heading: "Desolate Depths",
        github: "https://github.com/Joshua-Byrd/DesolateDepths",
        description:
          "Desolate Depths is a Java-based text adventure game inspired by classics like Zork. Players explore a prebuilt dungeon, engage in combat with randomized monsters, and manage an inventory of items, potions, and gold. The game integrates SQLite for persistent state, uses multithreading for to incorporate background ambient music, and employs object-oriented design patterns to manage complex game logic. This project reinforced my understanding of OOP and system design in Java.",
        logo: "./images/icons/java-icon.svg",
        alt: "The Java logo",
      },
      {
        id: projectCount++,
        heading: "PostgreSQL Fitness Database",
        github: "https://github.com/Joshua-Byrd/CS669_term_project",
        description:
          "A backend schema designed for a fitness and nutrition tracking app. Built in PostgreSQL, the database includes tables for users, workouts, food intake, and performance stats. Features include stored procedures for handling transactions like creating workout templates, triggers for logging password changes and updating personal bests, and scripts for populating sample datasets. This project deepened my experience in database normalization, referential integrity, and backend data management.",
        logo: "./images/icons/postgresql-icon.svg",
        alt: "The PostgreSQL logo.",
      },
      {
        id: projectCount++,
        heading: "Goodreads Lite",
        github: "https://github.com/Joshua-Byrd/GoodReadsImitation",
        description:
          "Goodreads Lite is a web server that replicates core Goodreads functionality, built with Node.js, Express, and MongoDB. Users can search for books by author, title, or ISBN; manage 'Read' and 'Want to Read' lists; and update their own profiles. An administrative panel allows admins to add, edit, or delete users and books. This project showcases full-stack development with RESTful API design and NoSQL schema modeling.",
        logo: "./images/icons/javascript.svg",
        alt: "The JavaScript logo.",
      },
      {
        id: projectCount++,
        heading: "Nutrition Tracker",
        github: "https://github.com/Joshua-Byrd/NutritionTracker",
        description:
          "An Android application written in Kotlin with Jetpack Compose and SQLite. The app allows users to search a food database, add items to a daily log, and view nutrition summaries including macro and micronutrient breakdowns. The project demonstrates mobile-first design, persistent data storage, and building a responsive user interface with modern Android tools.",
        logo: "./images/icons/Kotlin_Icon.svg",
        alt: "The Kotlin logo.",
      },
    ],
  };
},

  methods: {},
});

app.mount("#vue-projects-main");
