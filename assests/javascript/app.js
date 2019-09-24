$(document).ready(function() {
    
    var sports = ["basketball", "football", "soccer", "tennis", "bowling"];

    // loop to create the buttons
    for (let i = 0; i < sports.length; i++) {
        var sportsBtn = $("<button>");
        sportsBtn.addClass("sports-button");
        sportsBtn.attr("data-name", sports[i]);
        sportsBtn.text(sports[i]);
        $("#buttons-view").append(sportsBtn);
    }

    // function to create new buttons when user submits the request
    function renderButtons() {

        $("#buttons-view").empty();
        
        for (let i = 0; i < sports.length; i++) {
            var newBtn = $("<button>");
            newBtn.addClass("sports-button");
            newBtn.attr("data-name", sports[i]);
            newBtn.text(sports[i]);
            $("#buttons-view").append(newBtn);
        
        }
    }

        renderButtons();

        // event to allow a new gif and button to be displayed when the add button is clicked
        $("#new-gif").on("click", function(event){
            event.preventDefault();

            var addition = $("#gif-input").val().trim();

            sports.push(addition);

            renderButtons();

            $("#gif-input").val("");
        });

        // display the gif image to the DOM
        function displayGif() {

            $("#gifs").empty();

            var sport = $(this).attr("data-name");
            var quaryURL = "api.giphy.com/v1/gifs/search?q=" + sport + "&api_key=MqOe5HSv0B9EyOTItfIIZuVN9HSOR75j";

            $.ajax ({
                url: quaryURL,
                method: "GET"
            }).then(function(responce){
                console.log(responce);

                var results = responce.data;
                
            })
        }

});