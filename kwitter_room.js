
//ADD YOUR FIREBASE LINKS HERE
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

    username =localStorage.getItem("username");
    document.getElementById("user_name").innerHTML= "Welcome" + username+ "!"; 
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row = "<div class = 'roomname' id ="+Room_names+" onclick= 'redirect(this.id)'>#" + Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();

 function add_Room(){
       room_name = document.getElementById("room_name").value;
       firebase.database().ref("/").child(room_name).update({
             purpose :"adding user"
       });
       localStorage.setItem("roomname", room_name);
       window.location="kwitter_page.html";
 }
 function redirect(name)
 {
       localStorage.setItem("roomname", name);
       window.location = "kwitter_page.html";
 }
 function logout()
 {
       localStorage.removeItem("username");
       localStorage.removeItem("roomname");
       window.location = "index.html";

 }

