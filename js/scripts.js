$(document).ready(function(event) {
  $("form#survey").submit(function(event) {
    const dates = $("#dates").val();
    const cuisine = $("#cuisine").val();
    const pets = $("#pets").val();
    
    
    


    if (dates === "dinner" || cuisine === "thai") {
      $("#ruby").show();
      $("#javascript").hide();
      $("#rust").hide();
    } else if (dates === "bowling" || cuisine === "italian") {
      $("#ruby").hide();
      $("#javascript").show();
      $("#rust").hide();
    } else if (dates === "movie" || cuisine === "mexican") {
      $("#ruby").hide();
      $("#javascript").hide();
      $("#rust").show();
    } else {
      $("#ruby").hide();
      $("#javascript").hide();
      $("#rust").show();
    }
    event.preventDefault();
  });
});