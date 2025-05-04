$(document).ready(function(){

// code fragment
// the form id is myForm
$('#myForm').on('submit', function(event) {
    event.preventDefault(); // prevent reload
    
    var formData = new FormData(this);
    formData.append('service_id', 'service_fx90nh1');
    formData.append('template_id', 'template_zaskzx5');
    formData.append('user_id', 'RW1HRpw2mxpPmkVyK');

const settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.postmarkapp.com/email",
  "method": "POST",
  "headers": {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "X-Postmark-Server-Token": "c34cf555-7142-49a4-a3cc-3f693ed01853"
  },
  "processData": false,
  "data": "{\n  \"From\": \"mark.rogers@bentley.com\",\n  \"To\": \"keith.gunaratne@bentley.com\",\n  \"Subject\": \"Postmark test\",\n  \"TextBody\": \"Hello dear Postmark user.\",\n  \"HtmlBody\": \"<html><body><strong>Hello</strong> dear Postmark user.</body></html>\",\n  \"MessageStream\": \"outbound\"\n}"
};

    $.ajax(settings).done(function() {
        alert('Your mail is sent!');
    }).fail(function(error) {
        alert('Oops... ' + JSON.stringify(error));
    });
});
// code fragment

});
