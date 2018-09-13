$( document ).ready(function(){
    var Random=Math.floor(Math.random()*101+19)

    $('#randomNumber').text(Random);

    var num1= Math.floor(Math.random()*11+1)
    var num2= Math.floor(Math.random()*11+1)
    var num3= Math.floor(Math.random()*11+1)
    var num4= Math.floor(Math.random()*11+1)

    var userTotal= 0; 
    var wins= 0;
    var losses = 0;

  $('#wins').text(wins);
  $('#losses').text(losses);

  function reset(){
        Random=Math.floor(Math.random()*101+19);
        console.log(Random)
        $('#randomNumber').text(Random);
        num1= Math.floor(Math.random()*11+1);
        num2= Math.floor(Math.random()*11+1);
        num3= Math.floor(Math.random()*11+1);
        num4= Math.floor(Math.random()*11+1);
        userTotal= 0;
        $('#totalScore').text(userTotal);
        } 

  function youWin(){
  alert("You won!");
    wins++; 
    $('#wins').text(wins);
    reset();
  }
  

  function youLoser(){
  alert ("You lose!");
    losses++;
    $('#losses').text(losses);
    reset()
  }

    $('#one').on ('click', function(){
      userTotal = userTotal + num1;
      console.log("New finalScore= " + finalScore);
      $('#finalScore').text(userTotal); 
          if (userTotal == Random){
            youWin();
          }
          else if ( userTotal > Random){
            youLoser();
          }   
    })  

    $('#two').on ('click', function(){
      userTotal = userTotal + num2;
      console.log("New finalScore= " + finalScore);
      $('#finalScore').text(userTotal); 
          if (userTotal == Random){
            youWin();
          }
          else if ( userTotal > Random){
            youLoser();
          }   
    })  
     
    $('#three').on ('click', function(){
      userTotal = userTotal + num3;
      console.log("New finalScore= " + finalScore);
      $('#finalScore').text(userTotal);
          if (userTotal == Random){
            youWin();
          }
          else if ( userTotal > Random){
            youLoser();
          }   
    })  

    $('#four').on ('click', function(){
      userTotal = userTotal + num4;
      console.log("New finalScore= " + finalScore);
      $('#finalScore').text(userTotal); 
          if (userTotal == Random){
            youWin();
          }
          else if ( userTotal > Random){
            youLoser();
          }   
    })    
  }); 