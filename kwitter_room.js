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

 
    user_name = localStorage.getItem("user_name")
    document.getElementById("welcome").innerHTML= "Welcome " + user_name

    function add_room(){
      add = document.getElementById("room").value
      firebase.database().ref("/").child(add).update({
            purpose:" adding a room name"
      })
      localStorage.setItem("Room",add)
      window.location="kwitter_page.html"
    }

    function getData() 
    {firebase.database().ref("/").on('value', function(snapshot)
    {document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot) 
    {childKey  = childSnapshot.key;
       Room_names = childKey;
       row = "<div class='room_name' id="+Room_names+" onclick='redirect(this.id)'>#"+ Room_names+ "</div><hr>"
       document.getElementById("output").innerHTML+=row
      });});}

getData();

function redirect(name) {
      localStorage.setItem("Room",name)
      window.location="kwitter_page.html"
      
}

function log_out(){
      localStorage.removeItem("User_name")
      localStorage.removeItem("Room")
      window.location="index.html"
}