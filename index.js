// Write your code in this file!
function scuberGreetingForFeet(number){
  if (number <= 400) {
    return 'This one is on me!'
  } else if (number >= 2000 && (number < 2501)){
    return 'I will gladly take your thirty bucks.'
  } else if ( number <= 2501){
    return 'No can do.'
  }
}

function ternaryCheckCity(city){
  if (city === "NYC"){
    return "Ok, sounds good."
  } else {
    return "No go."
  }
}
