$("#cat-button").on("click", function () {

    // Storing our giphy API URL for a random cat image
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=cats";

    // Perfoming an AJAX GET request to our queryURL
    $.ajax({
        url: queryURL,
        method: "GET"
    })

        // After the data from the AJAX request comes back
        .then(function (response) {

            // Saving the image_original_url property
            var imageUrl = response.data.image_original_url;

            // Creating and storing an image tag
            var catImage = $("<img>");

            // Setting the catImage src attribute to imageUrl
            catImage.attr("src", imageUrl);
            catImage.attr("alt", "cat image");

            // Prepending the catImage to the images div
            $("#images").prepend(catImage);
        });
});

var movies = [];

// Function for displaying movie data
function renderButtons() {

    // Deleting the movie buttons prior to adding new movie buttons
    // (this is necessary otherwise we will have repeat buttons)
    $("#cat-button").empty();

    // Looping through the array of movies
    for (var i = 0; i < movies.length; i++) {

        // Then dynamicaly generating buttons for each movie in the array.
        // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
        var a = $("<button>");
        // Adding a class
        a.addClass("movie");
        // Adding a data-attribute with a value of the movie at index i
        a.attr("data-name", movies[i]);
        // Providing the button's text with a value of the movie at index i
        a.text(movies[i]);
        // Adding the button to the HTML
        $("#buttons-view").append(a);
    }
}

// This function handles events where one button is clicked
$("#add-movie").on("click", function (event) {
    // event.preventDefault() prevents the form from trying to submit itself.
    // We're using a form so that the user can hit enter instead of clicking the button if they want
    event.preventDefault();

    // This line will grab the text from the input box
    var movie = $("#movie-input").val().trim();
    // The movie from the textbox is then added to our array
    movies.push(movie);

    // calling renderButtons which handles the processing of our movie array
    renderButtons();
});

// Calling the renderButtons function at least once to display the initial list of movies
renderButtons();
