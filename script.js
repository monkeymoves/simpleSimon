const RED = "red";
const BLUE = "blue";
const GREEN = "green";
const YELLOW = "yellow";

var simon = {

    sendColor: function (color) {
        
        if(!simon.sequence.length){
            //start a new game
            simon.nextSequence();
        }
        else {
            
            if(color === simon.sequence[simon.step]){
                // go to next stepp
                if (simon.step === simon.sequence.length -1){
                    console.log("seq complete")
                    simon.step = 0;
                    simon.nextSequence();
                    
                    
                }
                else {
                    if(simon.step === 2){
                        $("#errorMsg").html("Congratulations <br> You won & completed 3 rounds");
                        simon.step === 0;
                        var audioWinner = $('<audio autoplay></audio>');
                        audioWinner.append('<source src="sounds/winner.mp3" type="audio/mp3" />');
                        
                        $('[data-action=sound]').html(audioWinner);
                        
                    }
                    simon.step++;
                }
                
            }
            
            else {
                
                //lose condiotion
                // alert("Sorry you entered the wrong sequence");
               
                $("#errorMsg").html("Sorry you entered the wrong sequence");
                var audioWrong = $('<audio autoplay></audio>');
                audioWrong.append('<source src="sounds/wrong.mp3" type="audio/mp3" />');
               
                $('[data-action=sound]').html(audioWrong);
                
                simon.sequence = [];
                simon.step =0;
                
            }
            
        }
        console.log("NEW COLOR: " + color);
    }, 
    
    sequence: [],
    colors: [RED, BLUE, GREEN, YELLOW],
    step: 0,
    nextSequence: function(){
        $("#errorMsg").html("");
        
        var nextColor = simon.colors[Math.floor(Math.random()* simon.colors.length)];
        console.log("random color is ", nextColor);  
        simon.sequence.push(nextColor);
        console.log("the seq is ", simon.sequence);
        lightup(simon.sequence);
      
    }
};


function lightup(seq) {
    console.log("this is lightup seq " + seq);
  
    var counter = 0;
    var j = 0;
    var i = setInterval(function() {
      counter++;
      flashMe(seq[j]);
      j++;
      if (counter === seq.length) {
        clearInterval(i);
      }
    }, 1000); // SET THIS TO HOWEVER LONG YOU WANT TO WAIT BETWEEN "FLASHES" (milliseconds)
  }
  
  function flashMe(x) {
    console.log("X: " + x);
    
    $("#" + x)
      .fadeTo("slow", 0)
      .fadeTo("slow", 1);
      var audio = $('<audio autoplay></audio>');
      audio.append('<source src="sounds/' + x + '.mp3" type="audio/mp3" />');
      $('[data-action=sound]').html(audio);
      

  }
  
 


$(document).ready(function () {
    $("#red").click(function () {
        simon.sendColor(RED);
    });
    $("#green").click(function () {simon.sendColor(GREEN);});
    $("#blue").click(function () {simon.sendColor(BLUE);});
    $("#yellow").click(function () {simon.sendColor(YELLOW);});
    $("#startMe").click(function () {simon.sequence = []; simon.nextSequence();});
    
});


