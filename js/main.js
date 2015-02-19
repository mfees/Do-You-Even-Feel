SC.initialize({
  client_id: '48726095adc9106006eafbdb701eb2a6',
  redirect_uri: 'http://localhost:8888/callback'
});


$(document).ready(function() {
//    
//                 SC.get('http://api.soundcloud.com/playlists/82022730.json?client_id=48726095adc9106006eafbdb701eb2a6', function(playlist) {
//                    console.log(playlist);   
//                    for (var i = 0; i < playlist.tracks.length; i++) {
//                    return playlist.tracks;
//  }
//});
    
    
    $.get("https://api.soundcloud.com/tracks/42633860/streams?client_id=48726095adc9106006eafbdb701eb2a6", function(sound){
        $('#audio-player').attr('src', sound.http_mp3_128_url);
});
    
//             $.getJSON("http://api.soundcloud.com/playlists/82022730.json?client_id=48726095adc9106006eafbdb701eb2a6", function (dataMad) {
//                   $('.mad').click(function () {
//                           $('iframe').remove();
//                           $('#audio-player').attr('src', dataMad.permalink_url);
//                           $('.music-section').css( "background-color", "#4e4847");       
//                        });
//                    });
//                
                $.getJSON("https://soundcloud.com/oembed?maxheight=180&url=https://soundcloud.com/user699424009/sets/what-a-d-k&format=json", function (dataMad) {
                   $('.mad').click(function () {
                          event.preventDefault(); 
                          $('iframe').remove();
                           $('#audio-player').remove();
                           $('.audio-player').append(dataMad.html); 
                           $('.music-section').css( "background-color", "#4e4847");       
                        });
                    });
   
               $.getJSON("https://soundcloud.com/oembed?maxheight=180&url=https://soundcloud.com/user699424009/sets/trollin&format=json", function (dataJoyful) {
                   $('.joyful').click(function () {
                            event.preventDefault(); 
                           $('#audio-player').remove();
                           $('iframe').remove();
                           $('.audio-player').append(dataJoyful.html); 
                           $('.music-section').css( "background-color", "#61A598");       
                        });
                    });
               
                $.getJSON("https://soundcloud.com/oembed?maxheight=180&url=https://soundcloud.com/user699424009/sets/susanna&format=json", function (dataScared) {
                   $('.scared').click(function () {
                           event.preventDefault(); 
                           $('#audio-player').remove();
                           $('iframe').remove();
                           $('.audio-player').append(dataScared.html); 
                           $('.music-section').css( "background-color", "#E2E5EE");       
                        });
                    });
                
                $.getJSON("https://soundcloud.com/oembed?maxheight=180&url=https://soundcloud.com/user699424009/sets/beast-mode&format=json", function (dataPowerful) {
                   $('.powerful').click(function () {
                           event.preventDefault(); 
                           $('#audio-player').remove();
                           $('iframe').remove();
                           $('.audio-player').append(dataPowerful.html); 
                           $('.music-section').css( "background-color", "#66668B");
                           
                        });
                    });
                
                $.getJSON("https://soundcloud.com/oembed?maxheight=180&url=https://soundcloud.com/user699424009/sets/thursday-night&format=json", function (dataPeaceful) {
                   $('.peaceful').click(function () {
                           event.preventDefault(); 
                           $('#audio-player').remove();
                           $('iframe').remove();
                           $('.audio-player').append(dataPeaceful.html); 
                           $('.music-section').css( "background-color", "#DDD5A4");
                        
                        });
                    });
                
                
                
                $.getJSON("https://soundcloud.com/oembed?maxheight=180&url=https://soundcloud.com/user699424009/sets/cuddle-puddle&format=json", function (data){         
                   $('.sad').click(function () {
                           event.preventDefault(); 
                           $('#audio-player').remove();
                           $('iframe').remove();
                           $('.audio-player').append(data.html); 
                           $('.music-section').css( "background-color", "#D1CBCD");       
                        });
                    });
                });
             
            var playlist = SC.get('/playlists/82022730', function(playlist) {
            for (var i = 0; i < playlist.tracks.length; i++) {
             return playlist.tracks[i].length;
  }
}); 


                $("<iframe width=\"100%\" height=\"180\" scrolling=\"no\" frameborder=\"no\" src=\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Fplaylists%2F82019062&show_artwork=true&maxheight=180\"></iframe>");

