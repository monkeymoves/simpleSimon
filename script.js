const RED = "RED";
const BLUE = "BLUE";
const GREEN = "GREEN";
const YELLOW = "YELLOW";

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
                    simon.step++;
                }
                
            }
            
            else {
                
                //lose condiotion
                alert("Wrong fkd up");
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
        
        var nextColor = simon.colors[Math.floor(Math.random()* simon.colors.length)];
        console.log("random color is ", nextColor);  
        simon.sequence.push(nextColor);
        console.log("the seq is ", simon.sequence)
      
    }
};


$(document).ready(function () {
    $("#red").click(function () {simon.sendColor(RED)});
    $("#green").click(function () {simon.sendColor(GREEN)});
    $("#blue").click(function () {simon.sendColor(BLUE)});
    $("#yellow").click(function () {simon.sendColor(YELLOW)});

});

