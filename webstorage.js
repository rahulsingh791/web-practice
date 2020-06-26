

function savename(){
  var fname = document.getElementById('fname').value;
  var lname = document.getElementById('lname').value

  if(localStorage) {
      localStorage.setItem("lname", lname);
      localStorage.setItem("fname", fname);
      alert("Hi, " + localStorage.getItem("fname") + " " + localStorage.getItem("lname"));
  } else {
      alert("Sorry, your browser do not support session storage.");
  }
}
