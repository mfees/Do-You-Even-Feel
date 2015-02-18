SC.initialize({
  client_id: '48726095adc9106006eafbdb701eb2a6'
});


$(document).ready(function() {
                
                $.getJSON("https://soundcloud.com/oembed?maxheight=180&url=https://soundcloud.com/user699424009/sets/what-a-d-k&format=json", function (dataMad) {
                   $('.mad').click(function () {
                           $('iframe').remove();
                           $('.audio-player').append(dataMad.html); 
                           $('.music-section').css( "background-color", "#4e4847");       
                        });
                    });
   
               $.getJSON("https://soundcloud.com/oembed?maxheight=180&url=https://soundcloud.com/user699424009/sets/trollin&format=json", function (dataJoyful) {
                   $('.joyful').click(function () {
                           $('iframe').remove();
                           $('.audio-player').append(dataJoyful.html); 
                           $('.music-section').css( "background-color", "#61A598");       
                        });
                    });
               
                $.getJSON("https://soundcloud.com/oembed?maxheight=180&url=https://soundcloud.com/user699424009/sets/susanna&format=json", function (dataScared) {
                   $('.scared').click(function () {
                           $('iframe').remove();
                           $('.audio-player').append(dataScared.html); 
                           $('.music-section').css( "background-color", "#E2E5EE");       
                        });
                    });
                
                $.getJSON("https://soundcloud.com/oembed?maxheight=180&url=https://soundcloud.com/user699424009/sets/beast-mode&format=json", function (dataPowerful) {
                   $('.powerful').click(function () {
                           $('iframe').remove();
                           $('.audio-player').append(dataPowerful.html); 
                           $('.music-section').css( "background-color", "#66668B");       
                        });
                    });
                
                $.getJSON("https://soundcloud.com/oembed?maxheight=180&url=https://soundcloud.com/user699424009/sets/thursday-night&format=json", function (dataPeaceful) {
                   $('.peaceful').click(function () {
                           $('iframe').remove();
                           $('.audio-player').append(dataPeaceful.html); 
                           $('.music-section').css( "background-color", "#DDD5A4");       
                        });
                    });
                
                
                
                $.getJSON("https://soundcloud.com/oembed?maxheight=180&url=https://soundcloud.com/user699424009/sets/cuddle-puddle&format=json", function (data){         
                   $('.sad').click(function () {
                           $('iframe').remove();
                           $('.audio-player').append(data.html); 
                           $('.music-section').css( "background-color", "#D1CBCD");       
                        });
                    });
                });
            

