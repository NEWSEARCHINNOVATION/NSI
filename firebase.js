  var firebaseConfig = {
    apiKey: "AIzaSyCXyRoWOmFpUoMtya9Dwv_1S34YXeLTai8",
    authDomain: "new-search-innovations.firebaseapp.com",
    databaseURL: "https://new-search-innovations.firebaseio.com",
    projectId: "new-search-innovations",
    storageBucket: "new-search-innovations.appspot.com",
    messagingSenderId: "935478226292",
    appId: "1:935478226292:web:fa40b03bb51341dc9b1021",
    measurementId: "G-XHFQSY3B8Q"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
/*  count auth=firebash.auth();
  function signUp() {
     var name = document.getElementById("name");
     var dob = document.getElementById("dob");
     var email = document.getElementById("email");
     var number = document.getElementById("number");
     var uname = document.getElementById("uname");
     var psw = document.getElementById("psw");
     const promise = auth.createUserWithEmailAndPassword(uname.value,name.value,dob.value,email.value,number.value,psw.value);
     promise.catch(e => alert(e.message));
     alert("Signed Up");
  }
  function signIn() {
     var email = document.getElementById("email");
     var password = document.getElementById("password");
     const promise = auth.signInWithEmailAndPassword(email.value, password.value);
     promise.catch(e => alert(e.message));
  }
  function signOut() {
    auth.signOut();
    alert("Signed Out");
  }
  auth.onAuthStateChanged(function(user){
    if(user) {
    var email = user.email;
    alert("Active User " + email);
    }
    else {
      alert("No Active User");
    }
  });
*/
