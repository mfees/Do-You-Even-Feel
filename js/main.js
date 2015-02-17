$(document).ready ( function () {
    
        $("a").click(function() {
          $(this).next().toggleClass('closed');                 
    });
});
