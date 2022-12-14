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
    //YOUR FIREBASE LINKS

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

    function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name, 
            message: msg, 
            like: 0
      });
      document.getElementById("msg").value = "";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4>" + name +"<img class = 'user_tick' src = 'tick.png' '></h4>";
message_with_tag = "<h4 class = 'message_h4'>" + message +"</h4>";
like_button = "<button class = 'btn btn-warning' id = "+ firebase_message_id + "value = "+ like +"onclick = 'updateLike(this.id)' >";
span_with_tag = "<span class ='glyphicon glyphicon-thumbs-up'> Like: " +like +"</span> </button> <hr>";

row = name_with_tag + message_with_tag + span_with_tag + like_button;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function updateLike(message_id){
      console.log("Click on like button-"+ message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      update_likes = Number(likes) + 1;
      console.log(update_likes);
      
      firebase.database().ref(room_name).child(message_id).update({
            like: update_likes
      });
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
      
}
