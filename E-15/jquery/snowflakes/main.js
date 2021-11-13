$(function () {

    // array for styles
    let styles = ["large","medium", "small"];

    //creating flakes
    for (let f = 0; f < 350; f++) {
        //choosing styles randomly from arrays
        let rand = Math.floor((Math.random() * 3));
        //choosing positions on X randomly
        let tranX = Math.floor((Math.random() * 333) + "%");
        //choosing positions on X randomly
        let tranY = Math.floor((Math.random() * 333) + "%");
        //choosing position left randomly
        let posLft = Math.floor((Math.random() * window.innerWidth)) + "px";
        //choosing position top randomly
        let posTp = "-" + Math.floor((Math.random() * window.innerHeight)) + "px";
        //choosing animation duration randomly
        let time = Math.floor((Math.random() * 15) + 6) + "s";

        $("body").append(`<span class="flake ${styles[rand]}"
        style="transform:translate(${tranX}, ${tranY}); left: ${posLft}; top:${posTp}; animation-duration: ${time}">
        <i class="far fa-snowflake"></i>
        </span>`);
    }
});