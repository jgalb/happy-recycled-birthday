// After the API loads, call a function to enable the search box.
document.search = function(){
  search();
};

function handleAPILoaded() {
  $('#search-button').attr('disabled', false);
}

// Search for a specified string.
function search() {
  var q = $('#query').text();
  var request = gapi.client.youtube.search.list({
    q: q,
    part: 'snippet'
  });

  request.execute(function(response) {
    var str = JSON.stringify(response.result);
    console.log(str);
    // $('#search-container').html('<pre>' + str + '</pre>');
  });
}