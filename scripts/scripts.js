console.log('sourced');

var redClick = 0;
var yellowClick = 0;
var greenClick= 0;
var blueClick = 0;

$(document).ready(function(){
  $('.redButton').on('click', function(){
    console.log('clicked button');
    redClick ++;
$('#redCount').html(redClick);
$('#outputDiv').append(//squared element here);
});

 });
 $('.blueButton').on('click', function(){
   console.log('clicked button');
   blueClick ++;
$('#blueCount').html(blueClick);
$('#outputDiv').append(//squared element here);
});
$('.greenButton').on('click', function(){
  console.log('clicked button');
  greenClick ++;
$('#greenCount').html(greenClick);
$('#outputDiv').append(//squared element here);
});
$('.yellowButton').on('click', function(){
  console.log('clicked button');
  yellowClick ++;
$('#yellowCount').html(yellowClick);
$('#outputDiv').append(//squared element here);
});
