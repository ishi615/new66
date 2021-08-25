var firebaseConfig = {
    apiKey: "AIzaSyCBWXx01ARcMaaHVGETQLBXvc1YwVK3Dgg",
    authDomain: "kwitter-84503.firebaseapp.com",
    databaseURL: "https://kwitter-84503-default-rtdb.firebaseio.com",
    projectId: "kwitter-84503",
    storageBucket: "kwitter-84503.appspot.com",
    messagingSenderId: "429482966552",
    appId: "1:429482966552:web:f0c7d5b06591ee18decd6d"
  };
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("username");
room_name = localStorage.getItem("roomname");

//YOUR FIREBASE LINKS


function send(){
    msg= document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name : user_name,
        message:msg,
        like:0
    });
document.getElementById("msg").value = " ";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
name1 = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_img = "<h4>" +name1 +"<img class ='user_tick' src= 'tick.png'> </h4>"
message1 = "<h4 class='message_h4'>" + message + "</h4>";
like_button= "<button class = 'btn btn-warning' id="+firebase_message_id+" value = "+like+" onclick ='update_like(this.id)'>"
span = "<span class = 'glyphicon glyphicon-thumbs-up'> Like:" +like+ "</span></button></hr>"
row = name_with_img + message1 + like_button + span;
document.getElementById("output").innerHTML += row; 


 } });  }); }
 getData();
function update_like(message_data){
    button_id = message_data;
    likes = document.getElementById(button_id).value;
    updated_likes = Number(likes)+ 1;
    
    firebase.database().ref(room_name).child(message_data).update({
        like : updated_likes
    })
    }

 function logout()
 {
       localStorage.removeItem("username");
       localStorage.removeItem("roomname");
       window.location = "index.html";

 }