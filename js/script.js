// dylan hunter
// conditionals worksheet


var gasEfficiency = prompt("enter the gas milage of your vehicle");
var gaugeReading = prompt("enter the amount of fuel in the car in percentage");
var carTankCapacity = prompt("enter your cars fuel capacity");
var amountOfMiles = (carTankCapacity * gasEfficiency * gaugeReading);


if (amountOfMiles > 200) {

    console.log ("you can continue without stopping");
}else{

    console.log ("you should stop for gas now");
}
