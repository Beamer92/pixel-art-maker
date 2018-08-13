
document.addEventListener("DOMContentLoaded", function() {

  let currentColor = "white";
  let curclr = document.querySelector(".curclr");
  let table = document.querySelector(".tbl");
  let dragflag = 0;
  let clrPicker = document.querySelector(".clrPick");
  
    let tblWid = table.offsetWidth
    let squares = Math.floor(tblWid/22)
  //  console.log(squares + '     ' + squares * 15)

    for(let i = 0; i < (15 * squares); i++)
    {
      let newdiv = document.createElement("div")
      newdiv.setAttribute("id", `${i}`)
      table.appendChild(newdiv)
    }

    table.addEventListener('click', function(e) {
    var div = e.target.closest('div')
	e.preventDefault();
    if( div !== null) {
	  dragflag = 0;
      div.style.backgroundColor = currentColor
      console.log(dragflag + " click")
    }
  }, false);

  table.addEventListener('mousedown', function(e){
	  e.preventDefault();
    dragflag = 1;
    console.log(dragflag + " mousedown")
  }, false);

  table.addEventListener('mouseup', function(e) {
	  e.preventDefault();
    dragflag = 0;
     console.log(dragflag + " mouseup")
  }, false);
  
  window.addEventListener('mouseup', function(e) {
	e.preventDefault();
	dragflag = 0;
    console.log(dragflag + "Window mouseup")
	  
  }, false);

 
  table.addEventListener('mouseover', function(e) {
	 e.preventDefault();
    if(dragflag === 1)
    {
       console.log(dragflag + " mouseover")
      var div = e.target.closest('div');
      if( div !== null) {
          div.style.backgroundColor= currentColor
      }
    }
  }, false);

  document.querySelector("footer").addEventListener('click', function(e) {
	 e.preventDefault();
    var div = e.target.closest('div');
    if( div !== null) {
      currentColor = div.style.backgroundColor
      curclr.style.backgroundColor = currentColor
    }
    }, false);

	clrPicker.addEventListener('change', function(e) {
	  currentColor = clrPicker.value;
      curclr.style.backgroundColor = currentColor	
	}, false);

});
