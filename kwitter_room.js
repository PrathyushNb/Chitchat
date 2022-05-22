
//ADD YOUR FIREBASE LINKS HERE
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

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room_name - " + Room_names);
row = "<div class = 'room_name' id="+Room_names+"onclick = 'redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();


user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome "+user_name+"!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";

}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
window.location = "kwitter_page.html";
}

function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}


