$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    const dates = $("select#dates").val();
    const cuisine = $("select#cuisine").val();
    const pets = $("select#pets").val();


    if (dates === 'movies', 'bowling', 'dinner'  && cuisine === 'italian' && pets === 'dogs', 'cats') {
      $("#ruby").show();
    } else if (dates === 'movies', 'bowling', 'dinner' && cuisine === 'thai' && pets === 'dogs', 'cats') {
      $("#javascript").show();
    } else if (dates === 'movies', 'bowling', 'dinner' && cuisine === 'mexican' && pets === 'dogs', 'cats') {
      $("#rust").show();
    }
  });
});