$(document).ready(function() {
  $("form#survey").submit(function(event) {
    const dates = $("select#dates").val();
    const cuisine = $("select#cuisine").val();
    const pets = $("select#pets").val();
    event.preventDefault();
    


    if (dates === 'movie') {
      $("#ruby").show();
      $("#javascript").hide();
      $("#rust").hide();
    } else if (cuisine === 'thai') {
      $("#ruby").hide();
      $("#javascript").show();
      $("#rust").hide();
    } else (pets === dogs) {
      $("#ruby").hide();
      $("#javascript").hide();
      $("#rust").show();
      
    }
  });
});