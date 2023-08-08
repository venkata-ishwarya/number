var randomNumber=Math.floor(Math.random()*100)+1;
var attempts=0;

document.getElementById('btn').addEventListener('click',function(){
    var guess=parseInt(document.getElementById('guessInput').value);
    attempts++;
    if(guess===randomNumber){
         displayMessage("Congratulations!You guessed the Number in" + attempts + "attempt");
         document.getElementById('btn').disabled=true;
    }
    else if(guess<randomNumber){
        displayMessage("Too low! try a higher number.");
    }
    else{
        displayMessage("Too high! Try a lower Number.")
    }

});
function displayMessage(Message){
    document.getElementById('msg').textContent=Message;
}