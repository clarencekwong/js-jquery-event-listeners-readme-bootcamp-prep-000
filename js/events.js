//define functions here
function getIt() {
  $("p").on("click", function(e) {
    alert("Hey!")
  })
}
function frameIt() {
  $("img").on("load", function(e) {
    $("img").addClass("tasty")
  })
}
function pressIt() {
  $(document).on("keydown", function(e) {
    if (e.switch === 71) {
      alert("You have pressed G!")
    }
  })
}
function submitIt() {
  $("form").on("submit", function() {
    alert("Your form is going to be submitted now.")
  })
}
$(document).ready(function(){

// call functions here
getIt();
frameIt();
pressIt();
submitIt();
});
