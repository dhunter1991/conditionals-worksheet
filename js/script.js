// dylan hunter
// conditionals worksheet


var userName = prompt("please create a username for this account");
var password = prompt("now create a password");

var newUser = prompt ("enter username");
var newPassword = prompt("enter password");

if (userName && password  == newUser && newPassword) {
    console.log ("welcome " + userName, + "!");
}else if ( userName != newUser) {
    console.log ("user name not found. Try again.");
} if (password != newPassword){
    console.log ("password does not match our records");

}







