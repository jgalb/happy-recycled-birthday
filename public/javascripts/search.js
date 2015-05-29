// After the API loads, call a function to enable the search box.
document.search = function(name){
  search(name);
};

function handleAPILoaded() {
  $('#search-button').attr('disabled', false);
}

// Search for a specified string.
function search(name) {
  var q = $('#query').text();
  q = '"happy+birthday+'+name+'"';
  var request = gapi.client.youtube.search.list({
    q: q,
    part: 'id',
    order: 'viewCount',
    type: 'video',
    maxResults: '50',
    videoDuration: 'short'
  });

  request.execute(function(response) {
    // var str = JSON.stringify(response.result);
    var items = response.result.items;
    var lastIndex =  items.length - 1;
    console.log(items[lastIndex].id.videoId);
    document.post('https://www.youtube.com/watch?v='+items[lastIndex].id.videoId);
    // $('#search-container').html('<pre>' + str + '</pre>');
  });
}