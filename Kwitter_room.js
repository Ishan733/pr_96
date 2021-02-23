var firebaseConfig = {
    apiKey: "AIzaSyCEJnFBEXV2axkNl0n09UA2BFJwqEQrYnc",
    authDomain: "chat-app-3-67887.firebaseapp.com",
    databaseURL: "https://chat-app-3-67887-default-rtdb.firebaseio.com",
    projectId: "chat-app-3-67887",
    storageBucket: "chat-app-3-67887.appspot.com",
    messagingSenderId: "608453985604",
    appId: "1:608453985604:web:150d624d954e540d784311",
    measurementId: "G-9XWJ9QL8SM"
  };

  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "welcome" + user_name + "!";

function addroom(){

    room_name= document.getElementById("room_name").value ;
    firebase.database().ref("/").child(room_name).update({
purpose:"adding room name"


    });
    localStorage.setItem("room_name",room_name);
    window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
console.log("room name", room_name);
row = "<div class='room_name' id=" + Room_names+" onclick='redirectToRoomName(this.id) '>#" + Room_names +"<div><hr>";
document.getElementById("output").innerHTML += row;

//End code
    });});}
getData();
function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name", name);
window.location ="Kwitter_page.html";

}
function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";

}