/*$('#contact-form').submit(function (e){
    let name = document.getElementById('name'),
     email= document.getElementById('email'),
     message = document.getElementById('message');
     if (name.value == "" || email.value == "" || message.value == ""){
         alert.console.error("Please check your entries");
     }
     else {
         $.ajax({
             url: "https://formspree.io/tohop1966@gmail.com",
             method: "POST",
             data: $(this).serialize(),
             dataType: "json"
         })
         e.preventDefault()
         $(this).get(0).reset()
         alertify.success("Email sent")

     }
})*/
(function () {
    $(document).ready(function () {
      return $('#contact-form').submit(function (e) {
        let email, message, name;
        name = document.getElementById('name');
        email = document.getElementById('email');
        message = document.getElementById('message');
        if (!name.value || !email.value || !message.value) {
          alertify.error('Please check your entries');
          return false;
        } else {
          $.ajax({
            method: 'POST',
            url: '//formspree.io/tophop1966@gmail.com',
            data: $('#contact-form').serialize(),
            datatype: 'json' });
  
          e.preventDefault();
          $(this).get(0).reset();
          return alertify.success('Message sent');
        }
      });
    });
  
  }).call(this);
  