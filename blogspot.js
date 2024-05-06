function opentutorial() {
  document.getElementById("tutorialshow").style.height = "100%";
}

function closetutorial() {
  document.getElementById("tutorialshow").style.height = "0%";
}

function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

// Get the modal
var modalbahaya1 = document.getElementById('pdewatogel, p');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalbahaya1) {
    modal.style.display = "none";
  }
}  

//randomize order of contents with DIV class="group1"
randomizeContent("acak")
//randomize order of contents with DIV class="group1"
randomizeContent("topgame")
