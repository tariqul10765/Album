$(document).ready(function(){
    var menu ="close";

    $('.navbar-toggle').click(function() {
        if(menu == "close") {
            $('.navbar-collapse').css('-webkit-transform', 'translate(0, 0)');
            menu= "open";
        }
        else{
            $('.navbar-collapse').css('-webkit-transform', 'translate(-100%, 0)');
            menu="close";
        }

          });
    });