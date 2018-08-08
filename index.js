
document.addEventListener("DOMContentLoaded", function() {

  let currentColor = "white"
  let curclr = document.querySelector(".curclr")

  document.querySelector(".tbl").addEventListener('click', function(e) {
    var div = e.target.closest('div')
    if( div !== null) {
      div.style.backgroundColor= currentColor
    }
  }, false);

  document.querySelector("footer").addEventListener('click', function(e) {
    var div = e.target.closest('div');
    if( div !== null) {
      currentColor = div.style.backgroundColor
      curclr.style.backgroundColor = currentColor
    }
    }, false);



});
