$(document).ready(
    function(){
        $('#button').click(function() {
    let toAdd = $('input[name=checkListItem]').val();
    $(".list").append("<div class='item'>" + toAdd + "</div>");
    $(document).on('click', '.item', function() {
      $(this).wrap("<strike>");
    });
  });
});

$(function() {
  $("#clear-button").click(function() {
    $(".list").remove();
  });
});