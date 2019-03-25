$(document).ready(function() {
let hand = null;
console.log(hand)

 $('[data-row]').click(function() {
    console.log("working")

   if(hand) {
         if ($(this).children().data("size") === undefined  

|| $(this).children().data("size")>$(hand).data("size")) {

$(this).prepend(hand);
hand = null;

if ($(".destination").children().length===4){
alert("You Win!");
        }
         }
       } else {   
     
hand = $(this).children().first().detach();
      console.log("this is working")
    }
   })
  });