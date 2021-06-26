// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAWsgIzTYv0UertzQMJFkKP_zBuN99GdgU",
    authDomain: "kwitter-6e2aa.firebaseapp.com",
    databaseURL: "https://kwitter-6e2aa-default-rtdb.firebaseio.com",
    projectId: "kwitter-6e2aa",
    storageBucket: "kwitter-6e2aa.appspot.com",
    messagingSenderId: "837125808355",
    appId: "1:837125808355:web:6f0c10a61209d6ae00e5d6",
    measurementId: "G-KPQ8FGDTFK"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

function addRoom()
{
 room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
   purpose : "adding room name"
});

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)' >#" + Room_names;
      document.getElementById("output").innerHTML += row;
      });
    });

}
 
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "kwitter.html";
}

