const firebaseConfig = {
      apiKey: "AIzaSyBn_CPywCteMdLx1Un_dV5wMaXArKe_rzM",
      authDomain: "class-test-b07e1.firebaseapp.com",
      databaseURL: "https://class-test-b07e1-default-rtdb.firebaseio.com",
      projectId: "class-test-b07e1",
      storageBucket: "class-test-b07e1.appspot.com",
      messagingSenderId: "13452148586",
      appId: "1:13452148586:web:39d138045c63dd9e3bef13"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "WELCOME " + user_name + "!";

function add_room(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room_name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name: " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div> <hr>";
      document.getElementById("output").innerHTML+= row;
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
   localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
