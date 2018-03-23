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
  $()
}
$(document).ready(function(){

// call functions here
getIt();
frameIt();
pressIt();
});
