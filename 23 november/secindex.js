$(document).ready(function(){
$('.head1').html("hi all")

$('.head1').css("background-color","red")

let a = $('.head2') 
a.html("Aditi")
a.css({
    "color":"orange",
    "background-color":"whitesmoke",
    "padding":"20px"
})
// sliding effect
$('#btn').click(function(){
    $('#para').slideUp(2000)
})

$('#btn1').click(function(){
$('#para').slideDown(2000)
})

 $('#btn2').click (function(){
$('#para').slideToggle(2000)
 })

 $('#btn3').click (function(){
$('#para').fadeIn(2000)
 })

 $('#btn4').click (function(){
$('#para').fadeOut(2000)
 })

 $('#btn5').click (function(){
$('#para').fadeToggle(2000)
 })


}
)
// we pass object for multiple css in css