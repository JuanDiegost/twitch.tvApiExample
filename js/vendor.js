$(document).ready(function() {
  $.ajax({
    url: "https://api.twitch.tv/kraken/streams/" + channelName,
    dataType: 'json',
    headers: {
      'Client-ID': your_client_id
    }
    success: function(channel)
    {
      if (channel["stream"] == null)
      {
        alert(nickname+" is not online");
      } else {
        alert(nickname+" is online!");
      }
    }
  });
});
