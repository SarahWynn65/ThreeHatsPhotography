// This must be updated with valid information from emailjs.com account. See https://www.emailjs.com/pricing/ for pricing (~$9-15/mo).


document.getElementById("emailForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from reloading
console.log('eventlistener triggered');

    emailjs.init("_HTBJxvoOIIe3pIXH"); // Replace with your EmailJS Public Key

    const serviceID = "3Hats"; // Replace with your EmailJS Service ID
    const templateID = "template_3Hats_Basic"; // Replace with your EmailJS Template ID

    const message = "return email address:\n" + document.getElementById("sender_email").value + "\n\nmessage:\n" + document.getElementById("message").value;

console.log("message is: ", message);
// the 'email' parameter is only set to sarah.wynn@comcast.net because I'm using the free option on emailjs; on paid options it should be set to the value of 'sender_email'.

    const templateParams = {
        from_name: document.getElementById("from_name").value,
        from_email: "sarah.wynn@comcast.net",
        // email: document.getElementById("from_email").value,
        sender_email: document.getElementById("sender_email").value,
        message: message
    };

    console.log('templateParams is: ', templateParams)

    emailjs.send(serviceID, templateID, templateParams)
        .then(response => {
            console.log("Email sent successfully!");
            alert("Email sent successfully!");
        })
        .catch(error => {
            console.log("Failed to send email. Try again later.");
            alert("Failed to send email. Try again later.");
            console.error(error);
        });
});



// const btn = document.getElementById('button');

// document.getElementById('form')
//  .addEventListener('submit', function(event) {
//    event.preventDefault();

//    btn.value = 'Sending...';

//    const serviceID = 'default_service';
//    const templateID = 'template_3Hats_Basic';

//    emailjs.sendForm(serviceID, templateID, this)
//     .then(() => {
//       btn.value = 'Send Email';
//       alert('Sent!');
//     }, (err) => {
//       btn.value = 'Send Email';
//       alert(JSON.stringify(err));
//     });
// });