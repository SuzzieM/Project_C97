
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyAcbt0SFegsL_dLCDzleE8qSTUlRaymeXc",
      authDomain: "gwitter-1710.firebaseapp.com",
      databaseURL: "https://gwitter-1710-default-rtdb.firebaseio.com",
      projectId: "gwitter-1710",
      storageBucket: "gwitter-1710.appspot.com",
      messagingSenderId: "312963458785",
      appId: "1:312963458785:web:a0f191c6458d9cd3a7f9a0",
      measurementId: "G-D4QTP043QC"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);


var user_name = localStorage.getItem("user_name");
var room_name = localStorage.getItem("room_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
        purpose : "creating room name"    
      });

      localStorage.setItem("room_name", room_name);

      window.location = "gwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name " + Room_names)
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", room_name);
      window.location = "gwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}