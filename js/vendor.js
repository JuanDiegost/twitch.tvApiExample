<<<<<<< HEAD
$(document).ready(function () {
  var channels = ["ESL_SC2", "ESL_CSGO", "GrietaGaming", "CooLifeGame", "plg", "renzohgg", "lvpes"],
    api = 'https://wind-bow.gomix.me/twitch-api/',
    clientID = 'c1ohy7babk6lwuv8tic5s113mv4izg';
=======
$(document).ready(function() {
  var channels = ["ESL_SC2","ESL_CSGO","NVIDIAGeForceES","CooLifeGame","plg","OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"],
  api ='https://wind-bow.gomix.me/twitch-api/',
  clientID='c1ohy7babk6lwuv8tic5s113mv4izg';
>>>>>>> 5149f784f340e27959f29459dd7ac4228455e40d
  end = '?callback=?';

  for (var i = 0; i < channels.length; i++) {
    addChanel(channels[i], i + 1 == channels.length);
  }

  $("#all").on("click", function (event) {
    event.preventDefault();
    $("#chanels").removeClass("online-v");
    $("#chanels").removeClass("offline-v");
  });

  $("#online").on("click", function (event) {
    event.preventDefault();
    $("#chanels").addClass("online-v");
    $("#chanels").removeClass("offline-v");
  });

  $("#offline").on("click", function (event) {
    event.preventDefault();
    $("#chanels").removeClass("online-v");
    $("#chanels").addClass("offline-v");
  });

  function addChanel(channelName, last) {
    $.ajax({
      url: api + "streams" + '/' + channelName + end,
      async: false,
      dataType: 'json',
      success: function (data) {
        console.log(data);
        if (data["stream"] == null) {
          $('#chanels').append('<article class="chanel divider-color offline-a card"><img class="logo" src="' + 'https://dummyimage.com/50x50/ecf0e7/5c5457.jpg&text=0x3F'
            + '" alt=""><p class="title">' + channelName + '</p><p class="description">' + 'Offline' + '</p></article>');
        } else {
          var channel = data.stream.channel;
          $('#slider').append('<li><a class="" href="' + channel.url + '" target="_blank"><img src="' + data.stream.preview.large + '"><div class="caption center-align"><h3>' + channel.display_name + '</h3><h5 class="light grey-text text-lighten-3">' + channel.status + '</h5></div></a></li>');
          $('#chanels').append('<article id="' + channel.display_name + '" class="chanel divider-color online-a card"><img class="logo" src="' + channel.logo + '" alt=""><p class="title">' + channel.display_name + '</p><span class="fa fa-play preview play"></span><div class="container-btn"><a class="fa fa-external-link btnS text-primary-color accent-color divider-color box-shadow " href="' + channel.url + '" target="_blank"><span>Go</span></a></div></article>');
          $('#btn-preview' + channel.display_name).on("click", function (event) {
            $('#' + channel.display_name).toggleClass("view");
          }
          );
        }
        if (last) {
          $(".progress").css("display","none");
          $(".slider").slider();
        }
      }
    });
  }
});
