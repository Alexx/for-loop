$(document).ready(function(){
  var numberMultipliers = function(multiplier, count) {
    if(multiplier < 0 || count < 0 || multiplier > count) {
      return console.log("Do not enter a negative number or a multiplier that is higher than the count.")
    } else if (isNaN(multiplier) || isNaN(count) || multiplier === "" || count === "") {
      return console.log("Please enter a number.")
    } else {
      for(var i = multiplier; i <= count; i += multiplier) {
        console.log(i);
      }
    }

  };
  numberMultipliers(8, 4);
});
