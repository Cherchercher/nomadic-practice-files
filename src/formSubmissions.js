// Script.js 
function validate() { 
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

	error_message.style.padding = "10px"; 
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
		error_message.innerHTML = 
			errors.join("<br>"); 
		return false;} 
	else {
        window.open("mailto:"+HOST_EMAIL+"?subject="+subject+"&body="+message+"&cc="+email); 
		// alert( 
		// 	"Form Submitted Successfully!"); 
		// return true;}
    }
}