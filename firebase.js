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
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
function signUp(){
    var name = document.getElementById("name").value;
    var dob = document.getElementById("dob").value;
    var email = document.getElementById("email").value;
    var number = document.getElementById("number").value;
    var uname = document.getElementById("uname").value;
    var password = document.getElementById("psw").value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
	.then((success) => {
            var user = firebase.auth().currentUser;
            var uid;
            if (user != null) {
                uid = user.uid;
            }
            var firebaseRef = firebase.database().ref();
            var userData = {
                Name: name,
                DOB: dob,
                Email: email,
                Password: password,
		UserName: uname,
		MobileNumber: number,
            }
            firebaseRef.child("NSI-USERS/"+uid+"/PersonalDetails/").set(userData);
	})
	.then((then) => {
	myfunc2();
        })
      .catch((error) => {
      	var errorCode = error.code;
      	var errorMessage = error.message;
      	alert(errorMessage);
    });
}
function signIn(){
    var email = document.getElementById("uname").value;
    var password = document.getElementById("psw").value;
    firebase.auth().signInWithEmailAndPassword(email, password).then((success) => {
	window.location.replace("http://newsearchinnovation.github.io/NSI/Users?"+email);
        }).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
	    alert(errorMessage);
            });
}
function signOut(){
    firebase.auth().signOut().then((value) => {
        window.location.replace("http://newsearchinnovation.github.io/NSI");
    }).catch(function(error) {
	var errorMessage=error.message;
        let errorMessage = error.message;
	alert(errorMesage);    
    });
}
function insertData() {
    var name=document.getElementById("name").value;
    var gender=document.getElementById("gender").value;
    var country=document.getElementById("country").value;
    firebase.database().ref('user/'+name).set({
       userName: name,
        userGender: gender,
        userCountry: country,
    });
}
function getdata() {
    var user=document.getElementById("user").value;
    firebase.database().ref('user/'+user).once('value').then(function (snapshot) {
        var name=snapshot.val().userName;
        var gender=snapshot.val().userGender;
        var country=snapshot.val().userCountry;
        document.getElementById("name").innerHTML=name;
        document.getElementById("gender").innerHTML=gender;
        document.getElementById("country").innerHTML=country;
    })
}
