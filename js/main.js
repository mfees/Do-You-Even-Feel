SC.initialize({
  client_id: '48726095adc9106006eafbdb701eb2a6'
});


$(document).ready(function() {
                
                $.getJSON("https://soundcloud.com/oembed?maxheight=180&url=https://soundcloud.com/user699424009/sets/what-a-d-k&format=json", function (dataMad) {
                   $('.mad').click(function () {
                            event.preventDefault();
                            $('iframe').remove();
                            $('.audio-player').append(dataMad.html); 
                            $('.music-section').css( "background-color", "#4e4847"); 
                            $('.music-section').css( "border-bottom", "5px solid #383231");
                        });
                    });
   
               $.getJSON("https://soundcloud.com/oembed?maxheight=180&url=https://soundcloud.com/user699424009/sets/trollin&format=json", function (dataJoyful) {
                   $('.joyful').click(function () {
                            event.preventDefault();
                            $('iframe').remove();
                            $('.audio-player').append(dataJoyful.html); 
                            $('.music-section').css( "background-color", "#61A598");  
                            $('.music-section').css( "border-bottom", "5px solid #569387");
                        });
                    });
               
                $.getJSON("https://soundcloud.com/oembed?maxheight=180&url=https://soundcloud.com/user699424009/sets/susanna&format=json", function (dataScared) {
                   $('.scared').click(function () {
                            event.preventDefault();
                            $('iframe').remove();
                            $('.audio-player').append(dataScared.html); 
                            $('.music-section').css( "background-color", "#E2E5EE");
                            $('.music-section').css( "border-bottom", "5px solid #caccd4");
                        });
                    });
                
                $.getJSON("https://soundcloud.com/oembed?maxheight=180&url=https://soundcloud.com/user699424009/sets/beast-mode&format=json", function (dataPowerful) {
                   $('.powerful').click(function () {
                            event.preventDefault();
                            $('iframe').remove();
                            $('.audio-player').append(dataPowerful.html); 
                            $('.music-section').css( "background-color", "#66668B");
                            $('.music-section').css( "border-bottom", "5px solid #5b5b7c");
                        });
                    });
                
                $.getJSON("https://soundcloud.com/oembed?maxheight=180&url=https://soundcloud.com/user699424009/sets/thursday-night&format=json", function (dataPeaceful) {
                   $('.peaceful').click(function () {
                            event.preventDefault();
                            $('iframe').remove();
                            $('.audio-player').append(dataPeaceful.html); 
                            $('.music-section').css( "background-color", "#DDD5A4");
                            $('.music-section').css( "border-bottom", "5px solid #c5be92");
                        });
                    });
                
                
                $.getJSON("https://soundcloud.com/oembed?maxheight=180&url=https://soundcloud.com/user699424009/sets/cuddle-puddle&format=json", function (data){         
                   $('.sad').click(function () {
                            event.preventDefault();
                            $('iframe').remove();
                            $('.audio-player').append(data.html); 
                            $('.music-section').css( "background-color", "#D1CBCD");
                            $('.music-section').css( "border-bottom", "5px solid #bab5b7");
                        });
                    });
                });


//$(document).ready ( function () {
//    
//        $("a").click(function() {
//          $(this).next().toggleClass('closed');                 
//    });
//});


//$('button').click(function () {
//    $('button').removedClass("selected");
//    $(this).addClass("selected");
//    var flickrAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
//    var animal = $(this).text();
//    var flickrOptions = {
//        tags: animal,
//        format: "json"
//    };
//    function displayPhotos(data) {
//        var photoHTML = '<ul>';
//        $.each( data.items, function (i, photo) {
//            photoHTML += '<li class="mad">';
//            photoHTML += '<a href="' + photo.link + '"class="image">';
//            photoHTML += '<img src="' + photo.media.m + '"></a></li>';
//        });
//        photoHTML += '</ul>';
//        $('#photos').html(photoHTML);
//    }
//    $.getJSON(flickrAPI, flickrOptions, displayPhotos);
//};
