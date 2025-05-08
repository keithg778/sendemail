$(document).ready(function(){


// code fragment
var data = {
    service_id: 'service_te7kz9m',
    template_id: 'template_nkavvdn',
    user_id: 'RW1HRpw2mxpPmkVyK',
    template_params: {
        'username': 'ComplyPro'
      
    }
};
 
$.ajax('https://api.emailjs.com/api/v1.0/email/send', {
    type: 'POST',
    data: JSON.stringify(data),
    contentType: 'application/json'
}).done(function() {
    alert('Your mail is sent!');
}).fail(function(error) {
    alert('Oops... ' + JSON.stringify(error));
});
// code fragment

});





