
emailjs.init('jv36V8efWAPk34RgC')

submitEmail = function(params) {
	let error_message = 
	document.getElementById("error_message"); 
let errors = []; 
	emailjs.send('default_service', 'contact_form', params)
		.then(() => {
			alert('Email sent!');
		}, (error) => {
			errors.push(error.message);
		});
;
if (errors.length > 0) { 
	error_message.style.padding = "10px"; 
	error_message.innerHTML = 
		errors.join("<br>"); 
	return false;} 
}


document.getElementById("form").addEventListener("submit", function(event) {


event.preventDefault();
let name = 
	document.getElementById("name").value; 
let subject = 
	document.getElementById("subject").value; 
let email = 
	document.getElementById("email").value; 
let message = 
	document.getElementById("message").value; 
let error_message = 
	document.getElementById("error_message"); 

HOST_EMAIL = "cher@nomadichacker.com";
let errors = []; 

if (name.length < 5) { 
	errors.push("Please Enter a valid Name");} 
if (subject.length == 0) { 
	errors.push("Please Enter a Correct Subject");} 
if (email.indexOf("@") == -1 ) { 
	errors.push( 
		"Please Enter a valid Email");} 
if (message.length <= 20) { 
	errors.push( 
		"Please Enter More Than 20 Characters");} 

if (errors.length > 0) { 
	error_message.style.padding = "10px"; 
	error_message.innerHTML = 
		errors.join("<br>"); 
	return false;} 
else {
	submitEmail({user_name: name, topic:subject, message, user_email:email, from_name:name, reply_to:"cherhuang@goplanatrip.com"})
}
})