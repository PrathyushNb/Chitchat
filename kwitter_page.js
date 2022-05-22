user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send(){

msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
});

document.getElementById("msg").value = "" ; 
}


//YOUR FIREBASE LINKS
const config = {
      apiKey: "AIzaSyC5r2ExHSru7nqr4O4RchXCmFwdAmTGN_8",
      authDomain: "kwitter-2f5ef.firebaseapp.com",
      databaseURL: "https://kwitter-2f5ef-default-rtdb.firebaseio.com",
      projectId: "kwitter-2f5ef",
      storageBucket: "kwitter-2f5ef.appspot.com",
      messagingSenderId: "259802710830",
      appId: "1:259802710830:web:2e929b8fe9c4536698f0bf"
    };
    
    // Initialize Firebase
    firebase.initializeApp(config);


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data ['message'];
like =message_data['like'];
name_with_tag = "h4"+ name +"<img class= 'user tricket' src = 'stick.png'></h4>";
message_with_tag = "<h4 class = message_h4'>"+message+"</h4>";
like_button ="<button class = 'btn btn-warning' id="+firebase_message_id+" value = "+like+" onclick='updatelike(this.id)'>";
span_with_tag = "<span class ='glyphicon glyphicon-thumbs-up'>like: "+ like +"</span></button><hr>";

row = name_with_tag +  message_with_tag +  like_button + span_with_tag;
document.getElementById("output").innerHTML += row;


//End code
      } });  }); }
getData();

function updatelike(message_id){
console.log("clicked on like button -" + message_id);
button_id = message_id;
likes = document.getElementById(button_id).value;
updated_likes = Number(likes)+1;
console.log(updated_likes);


firebase.database().ref(room_name).child(message_id).update({
like : updated_likes
});
}

function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location.replace("index.html");
}
