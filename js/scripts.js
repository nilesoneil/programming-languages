$(document).ready(function(event) {
  $("form#survey").submit(function(event) {

    const dates = $("#dates").val();
    const cuisine = $("#cuisine").val();
    const pets = $("#pets").val();
    const gender = $("#gender").val();
    const season =$("#season").val();

    
    if (dates === "dinner" || cuisine === "thai" && gender === "female") {
      $("#ruby").show();
      $("#javascript").hide();
      $("#rust").hide();
    } else if (dates === "bowling" || cuisine === "italian" || gender === "male") {
      $("#ruby").hide();
      $("#javascript").show();
      $("#rust").hide();
    } else if (dates === "movie" || cuisine === "mexican" || season === "winter") {
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