//The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/8.1.1/firebase-app.js"></script>

//TODO: Add SDKs for Firebase products that you want to use
//     https://firebase.google.com/docs/web/setup#available-libraries
<script src="https://www.gstatic.com/firebasejs/8.1.1/firebase-analytics.js"></script>

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
  count auth=firebash.auth();
  function signUp() {
     var email = document.getElementById("email");
     var password = document.getElementById("password");
     const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
     promise.catch(e => alert(e.message));
     alert("Signed Up");
  }
  function signIn() {
     var email = document.getElementById("email");
     var password = document.getElementById("password");
     const promise = auth.signInWithEmailAndPassword(email.value, password.value);
     promise.catch(e => alert(e.message));
  }
