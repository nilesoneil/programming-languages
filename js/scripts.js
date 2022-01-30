$(document).ready(function() {
  $("form#survey").submit(function(event) {
    const dates = $("#dates").val();
    const cuisine = $("#cuisine").val();
    const pets = $("#pets").val();