console.log('sourced');

var redClick = 0;
var yellowClick = 0;
var greenClick= 0;
var blueClick = 0;

$(document).ready(function(){

$('.color-button').on('click', function(){
console.log($( this ).attr( 'data-color' ));
if( $( this ).attr( 'data-color' ) == 'yellow'){
yellowClick++;
$('#yellow').html('Total yellow: ' + yellowClick);
var yellowBlock = '<div class="yellow color-cube"></div>';
$('.container').append(yellowBlock);
}
else if ( $( this ).attr( 'data-color' ) == 'red'){
redClick++;
$('#red').html('Total red: ' + redClick);
var redBlock = '<div class="red color-cube"></div>';
$('.container').append(redBlock);

}
else if ( $( this ).attr( 'data-color' ) == 'green'){
greenClick++;
$('#green').html('Total green: ' + greenClick);
var greenBlock = '<div class="green color-cube"></div>';
$('.container').append(greenBlock);
}
else if ( $( this ).attr( 'data-color' ) == 'blue'){
blueClick++;
$('#blue').html('Total blue: ' + blueClick);
var blueBlock = '<div class="blue color-cube"></div>';
$('.container').append(blueBlock);
}
});
});
