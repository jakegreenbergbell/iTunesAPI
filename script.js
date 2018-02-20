
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

        $("#fillItIn").append('<tr> ' +
            '<th>' + (i + 1) + '</th>' +
            '<th><img src=' + imageURL + '></th> ' +
            '<th>' + trackName + '</th>' +
            '</tr>');
    }

}
