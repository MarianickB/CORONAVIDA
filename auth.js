//listen auth
auth.onAuthStateChanged(user =>{
  if(user){
    setupUI(user);
    if(firebase.auth().currentUser != null){
      var docRef = db.collection("users").doc(firebase.auth().currentUser.uid);

      docRef.get().then(function(doc) {
        if (doc.exists) {
          LatLong = doc.data().coords;
          initMap();

        } else {
          // doc.data() will be undefined in this case
          LatLong = [];
        }
        }).catch(function(error) {
          console.log("Error getting document:", error);
        });

    }else {console.log("error");}



  } else {
    //write here what's visible
    setupUI();

  }
})

// signup
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // get user info
  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-password'].value;

  // sign up the user & add firestore data
  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    // close the signup modal & reset form
    const modal = document.querySelector('#modal-signup');
    M.Modal.getInstance(modal).close();
    signupForm.reset();
  });
});

// login
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (eve) => {
  eve.preventDefault();

  // get user info
  const email = loginForm['login-email'].value;
  const password = loginForm['login-password'].value;

  // log the user in
  auth.signInWithEmailAndPassword(email, password).then((cred) => {
    // close the signup modal & reset form
    const modal = document.querySelector('#modal-login');
    M.Modal.getInstance(modal).close();
    loginForm.reset();
  });

});

// logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', (eve) => {
  eve.preventDefault();
  auth.signOut();
});
