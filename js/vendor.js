$(document).ready(function() {
  var channels = ["ESL_SC2","ESL_CSGO","NVIDIAGeForceES","CooLifeGame","plg"],
  api ='https://wind-bow.gomix.me/twitch-api/',
  clientID='c1ohy7babk6lwuv8tic5s113mv4izg';
  end = '?callback=?';

  for (var i = 0; i < channels.length; i++) {
    addChanel(channels[i]);
  }

  function addChanel(channelName) {
    $.ajax({
      url: api +"streams" +'/'+ channelName+end,
      dataType: 'json',
      success: function(data){
        console.log(data);
        if (data["stream"] == null)
        {
        $('#chanels').append('<article class="chanel divider-color"><img class="logo" src="'+'https://dummyimage.com/50x50/ecf0e7/5c5457.jpg&text=0x3F'
+'" alt=""><h3 class="title">'+channelName+'</h3><h5 class="description">'+'Offline'+'</h5></article>');
        } else {
        var channel=data.stream.channel;
          console.log(channel.display_name+' no online');
          $('#chanels').append('<article id="'+channel.display_name+'" class="chanel divider-color"><img class="logo" src="'+channel.logo+'" alt=""><h3 class="title">'+channel.display_name+'</h3><h5 class="description">'+channel.status+'</h5><span class="fa fa-play preview play"></span><img class="preview" src="'+data.stream.preview.large+'" alt=""><div class="container-btn"><a class="fa fa-external-link btnS text-primary-color accent-color divider-color box-shadow " href="'+channel.url+'" target="_blank"><span>Go</span></a><button class="btnS divider-color accent-color box-shadow" id="btn-preview-'+channel.display_name+'" type="button" name="button">Preview</button></div></article>');
          $('#btn-preview'+channel.display_name).on("click", function(event) {
              $('#'+channel.display_name).toggleClass( "view" );
            }
          );
          $('#btn-preview-'+channel.display_name).on("click", function(event) {
              $('#'+channel.display_name).toggleClass( "view" );
            }
          );
          console.log(channel.display_name+'is online');
        }
      }
    });
  }
});
