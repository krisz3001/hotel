window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
function calc(){
    let ejdb=document.getElementById('ejdb').value;
    let fo=document.getElementById('fo').value;
    let ar=4000;
    document.getElementById('result').innerHTML="Teljes ár: "+ejdb*fo*ar+"Ft";

}