// dylan hunter
// conditionals worksheet


var kidHeight = prompt("enter kids height");
var minHeight = 48;
var parentHeight = 45;
// if the child is old enough, print to the console "you can ride!"
// if the kid is over 48 inches in height
if(kidHeight > minHeight) {
    // code performed if condition is true

    console.log("you can ride the coaster!");

} else if (kidHeight > parentHeight){

    // code performed if false
    console.log("you can ride but only with a parent present!");

}else {
    console.log("sorry, you've got some growing to do first!");


}
