// . ke left side selector hota hai and right side function hota hai
// html page ko document kehte hai
// ready function document ko ready krne ka kamm krta hai jb ready function ready nhi hoga to jquery kaam nhi krega
$(document).ready(
function(){
$('h1').click(function()
{
alert("clicked")
})
$('h2').click(function()
{
alert("click")
})
}
)