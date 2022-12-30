// Create a function called makeNoise that takes in an object and returns
// the response from calling the noise method.


var makeNoise;
var animal = {
    type: "cat",
    name: "kitty",
    sounds() { 
      console.log("meow meow") }
 };
 var makeNoise=function (animals){
    return animal.sounds;
 }
 
