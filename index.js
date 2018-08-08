
document.addEventListener("DOMContentLoaded", function() {


  
  document.querySelector(".tbl").addEventListener('click', function(e) {
    var div = e.target.closest('div');
    if( div !== null) {
      console.log(div.id);
    }
  }, false);



});
