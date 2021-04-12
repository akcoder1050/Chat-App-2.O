var firebaseConfig = {
  apiKey: "AIzaSyBBdGcz0m-bk_Ob9NMb66Z_RNriaGAZAVA",
  authDomain: "suitify-19968.firebaseapp.com",
  databaseURL: "https://suitify-19968-default-rtdb.firebaseio.com",
  projectId: "suitify-19968",
  storageBucket: "suitify-19968.appspot.com",
  messagingSenderId: "295060199309",
  appId: "1:295060199309:web:b082f8f34533e9dccc8fc4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser() {
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "kwitter_room.html";
}