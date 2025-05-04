const settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.postmarkapp.com/email",
  "method": "POST",
  "headers": {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "X-Postmark-Server-Token": "server token"
  },
  "processData": false,
  "data": "{\n  \"From\": \"mark.rogers@bentley.com\",\n  \"To\": \"keith.gunaratne@bentley.com\",\n  \"Subject\": \"Postmark test\",\n  \"TextBody\": \"Hello dear Postmark user.\",\n  \"HtmlBody\": \"<html><body><strong>Hello</strong> dear Postmark user.</body></html>\",\n  \"MessageStream\": \"outbound\"\n}"
};

$.ajax(settings).done(function (response) {
  console.log(response);
});