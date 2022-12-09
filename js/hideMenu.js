$(document).ready(function() {
    $(function() {
        $('#showPhoneNav').click(function() {
            $("#myNav").slideToggle('normal', function(){ //
                // If a menu is showing - hide it. If the menu is hiding - show it
            if ($('#myNav').is(':visible')) {
                $('showPhoneNav').text('Hide Navigation');
            } else {
                $('#showPhoneNav').text('Show Navigation');
            } // end of if
        }); // end of slidetoggle
            }); // end of myNav
        }); //end showPhoneNav
    }); // end of ready