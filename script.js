
var url = "https://itunes.apple.com/search?term=kanye+west&limit=10";

function requestAPI(){
    artistName = $("#artistName").val();
    limit = $("#resultLimit").val();
    url = "https://itunes.apple.com/search?term=" + artistName + "&limit=" + limit;
    $.ajax({
        url: url,
        type: 'GET',
        crossDomain: true,
        dataType: 'jsonp',
        success: function(result) {
            execute(result) },
        error: function() {
            alert('Failed!');
        }
    });
}



function execute(result){
    $("#fillItIn").html("");
    console.log(result);
    for(var i = 0; i < limit; i++){
        var imageURL = result["results"][i]["artworkUrl100"];
        var trackName = result["results"][i]["trackName"];
        var song = result["results"][i]["previewUrl"];

        $("#fillItIn").append('<tr class="tr"> ' +
            '<th>' + (i + 1) + '</th>' +
            '<th><img  onclick="playSong(' + song + ')" src=' + imageURL + '></th> ' +
            '<th><audio controls src="' + song + '" type="audio/m4a"></audio></th>' +
            '<th>' + trackName + '</th>' +
            '</tr>');
    }

}

$(document).ready(function(){
    $(".th").on("mouseenter", function(){
        $(this).animate({"background-color": "red"}, "400ms");
        console.log(this);
    })

});
