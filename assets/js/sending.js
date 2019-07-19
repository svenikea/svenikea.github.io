$(document).ready(function () {
    $('#contact-form').submit(function (e) { 

        let name = document.getElementById('inputname'),
        email = document.getElementById('inputemail'),
        message = document.getElementById('inputmessage')
        if (!name.value || !email.value || !message.value){
            window.alert("Please check your entries");
            return false ;
        }

    });
});