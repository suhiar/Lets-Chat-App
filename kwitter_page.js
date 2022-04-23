//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyBTiLItE3Wv2UAZvirQjj5OibjmsYu3zjQ",
      authDomain: "hw-kwitter-db1b7.firebaseapp.com",
      databaseURL: "https://hw-kwitter-db1b7-default-rtdb.firebaseio.com",
      projectId: "hw-kwitter-db1b7",
      storageBucket: "hw-kwitter-db1b7.appspot.com",
      messagingSenderId: "774858573523",
      appId: "1:774858573523:web:8cd9c068528f49aa023626"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name")
    room = localStorage.getItem("Room")

    function send(){
          msg = document.getElementById("message").value
          firebase.database().ref(room).push({
                name:user_name,
                message:msg,
                like:0
          })
          document.getElementById("message").value=""
    }

function getData() 
{ firebase.database().ref("/"+room).on('value', function(snapshot) 
{ document.getElementById("output").innerHTML = ""; 
snapshot.forEach(function(childSnapshot) 
{ childKey  = childSnapshot.key;
      childData = childSnapshot.val(); 
      if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
name=message_data["name"]
message=message_data["message"]
like=message_data["like"]
name_img="<h4>"+name+"<img src='tick.png' class='user_tick'></h4> "
message1="<h4 class='message_h4'>" +message+ "</h4>"
like_button="<button class='btn btn-primary' id="+firebase_message_id+" value=" +like+ " onclick='update_like(this.id)'>"
span_tag="<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+" </span> </button> <hr>"
row = name_img + message1 + like_button + span_tag
document.getElementById("output").innerHTML += row

//End code
      } });  }); }
getData();

function update_like(message_id){
      button_id=message_id
      likes=document.getElementById(button_id).value
      updated_likes=Number(likes)+1
      firebase.database().ref(room).child(message_id).update({
            like:updated_likes
      })

}

function log_out(){
      localStorage.removeItem("User_name")
      localStorage.removeItem("Room")
      window.location="index.html"
}