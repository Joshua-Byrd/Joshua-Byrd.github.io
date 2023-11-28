//Create and mount the app inside the main section of the page
const app = Vue.createApp({
    //data is a function that returns an object containing variables
    data: function() {
        return {
            greeting: "Hello!"
        }
    }
}); 
app.mount("#vue-projects-main");

