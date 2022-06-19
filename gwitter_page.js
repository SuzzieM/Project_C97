//YOUR FIREBASE LINKS
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

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
       console.log(message_data);
       name = message_data['name'];
       message = message_data['Message'];
       like = message_data['like'];
       name_with_tag = "<h4>"+ name +"<img class='user_tick src='tick.png'</h4>";
       message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
       like_button ="<button class='btn btn-success' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
       span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

       row = name_with_tag + message_with_tag + like_button + span_with_tag;
       document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            Message:msg,
            like:0
      });

      document.getElementById("msg").innerHTML = " ";
}

function updateLike(message_id)
{
      console.log("clicked on like button - " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updateLikes = Number(likes) + 1;
      console.log(updateLikes);

      firebase.database().ref(room_name).child(message_id).update({
            like : updateLikes
      });
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

function back()
{
      window.location = "kwitter_room.html";
}