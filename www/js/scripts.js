$(document).ready(function(){
var emails =
{
  "email_of_sender": "",
  "email_message" : ""
}

var email_sender = $('#email_sender');
var email_message = $('#email_message');

console.log("hello worlds");
//console.log(emails.email_of_sender);

$('#buttonz').click(function() {
//  var a = document.getElementById("email_sender").value;
  //emails.email_message
//  var b = document.getElementById("email_message").value;
  emails.email_of_sender = email_sender.val();
  emails.email_message = email_message.val();

$.ajax({
  type: 'POST',
  url: '/api',
  data: emails,
  success: function() {
    console.log(emails.email_of_sender);
    console.log(emails.email_message);
  },
  error: function(){
    alert('error');
  }
});



  //console.log(emails.email_of_sender);
  //console.log(emails.email_message);
});
/*
function send_email() {
  //emails.email_of_sender
  var a = document.getElementById("email_sender").value;
  //emails.email_message
  var b = document.getElementById("email_message").value;
  emails.email_of_sender = a;
  emails.email_message = b;
  console.log(emails.email_of_sender);
  console.log(emails.email_message);
  //console.log(a + " " + b);
}
*/
/*document.getElementById("buttonz").addEventListener("click", function(){
    alert("Hello World!");
});
*/
});
