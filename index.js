$(document).ready(function() {
  emailjs.init("user_pYdR315kh4v9QIZtaLMEw");
});

postComment = () => {
  // const name = document.getElementsByName("name")[0];
  const name = $('input[name="name"]').val() ;
  const email = $('input[name="email"]').val() ;
  const msg = $('textarea[name="msg"]').val() ;

  var templateParams = {
    from: name,
    email: email,
    to: "ultimate_assault@yahoo.com",
    msg: msg
  };

  emailjs.send('service_c7r7vbo', 'template_22tuh1g', templateParams)
    .then(function(response) {
       alert("Your Comment Was Submitted Successfully :)") ;
    }, function(error) {
       alert("Failed to Submit the Comment :(") ;
    });
}
