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
        console.log("the seq is ", simon.sequence);
        lightup(simon.sequence);
      
    }
};

function lightup(seq) {
        
    for (var i = 0; i < seq.length; i++) {
        var seqselect = (seq[i]);
        console.log(seqselect);

        setTimeout(function () {
            document.getElementById(seqselect).classList.add('simon-flash');
            setTimeout(function() {
                document.getElementById(seqselect).classList.remove('simon-flash');
            }, 1400);

        }, 1000);
   
       
}

}




$(document).ready(function () {
    $("#red").click(function () {
        simon.sendColor(RED);
    });
    $("#green").click(function () {simon.sendColor(GREEN);});
    $("#blue").click(function () {simon.sendColor(BLUE);});
    $("#yellow").click(function () {simon.sendColor(YELLOW);});
    $("#startMe").click(function () {simon.nextSequence();});
    
});


