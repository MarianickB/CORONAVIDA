
const loggedOutLnk=document.querySelectorAll('.logged-out');
const loggedInLnk=document.querySelectorAll('.logged-in');
const mapp=document.getElementById("map");

const setupUI=(user) => {
  if (user){
    //toggle ui to show
    loggedInLnk.forEach(e => e.style.display = 'block');
    loggedOutLnk.forEach(e => e.style.display= 'none');
    document.getElementById("title").style.display="block";
    if(document.getElementById("button")){
      document.getElementById("button").style.display="block";
    }
    if(document.getElementById("instructions")){
      document.getElementById("instructions").style.display="block";
    };
  }
  else {
    loggedInLnk.forEach(e => e.style.display = 'none');
    loggedOutLnk.forEach(e => e.style.display= 'block');
    mapp.innerHTML = "<h1>Log in to use our service.</h1>";
    document.getElementById("title").style.display="none";
    if(document.getElementById("button")){
      document.getElementById("button").style.display="none";
    }
    if(document.getElementById("instructions")){
      document.getElementById("instructions").style.display="none";
    };
  }
}

document.addEventListener('DOMContentLoaded', function() {

  var modals=document.querySelectorAll('.modal');
  M.Modal.init(modals);

});
