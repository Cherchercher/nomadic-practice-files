
// Setting data in local storage
localStorage.setItem('username', 'john_doe');

// Retrieving data from local storage
const username = localStorage.getItem('username');
console.log(username); // Output: john_doe

// Removing data from local storage
localStorage.removeItem('username');


// Browser Cookies:
// Cookies are small pieces of data that are sent from a website and stored on the user's device.

document.cookie = 'username=john_doe; expires=Sun, 10 Apr 2025 12:00:00 UTC; path=/';

// Retrieving cookies
const cookies = document.cookie;
console.log(cookies); // Output: "username=john_doe; ..."

// Deleting a cookie (by setting its expiration date to the past)
document.cookie = 'username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

// Session storage allows you to store data for the duration of the page session. The data is cleared when the page session ends (typically when the browser is closed).

// Setting data in session storage
sessionStorage.setItem('token', 'abc123');

// Retrieving data from session storage
const token = sessionStorage.getItem('token');
console.log(token); // Output: abc123

// Removing data from session storage
sessionStorage.removeItem('token');



// These examples demonstrate how to set, retrieve, 
// and remove data using local storage, browser cookies, 
// and session storage in JavaScript.
//  Keep in mind that local storage and session storage have specific methods (`setItem`, `getItem`, `removeItem`), 
//  while cookies are managed using the `document.cookie` property. 
//  Additionally, cookies require manual manipulation of the cookie string for setting and deleting.

