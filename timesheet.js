$.document(function())

<script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
    crossorigin="anonymous"></script>
<script src="https://www.gstatic.com/firebasejs/7.10.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/7.10.0/firebase-database.js"></script>

    

    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyB7_gZewMFcaDJwrkoNoLhMY73wVTEaT_w",
      authDomain: "aka-timesheet-db.firebaseapp.com",
      databaseURL: "https://aka-timesheet-db.firebaseio.com",
      projectId: "aka-timesheet-db",
      storageBucket: "aka-timesheet-db.appspot.com",
      messagingSenderId: "708660578764",
      appId: "1:708660578764:web:c3942ca24d429a17913569"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  
 
 var = firebase.database();

 var = clickCounter =0;

 database.ref().on("value", function(snapshot)


 $("#click-button").on("click", function (event) {
     event.preventDefault()
    var = name = $("#emp-name").val().trim();
    var = role = $("#role").val().trim();
    var = stdt = $("#Start-Date").val().trim();
    var = rate = $("#rate").val().trim();
 
    var = newEmp = {
     name
     role
     stdt
     rate
    }
    
    database.ref().push(newEmp) {

    console.log(newEmp.name);
    console.log(newEmp.role);
    console.log(newEmp.stdt);
    console.log(newEmp.rate);
    }
}

database.on("child_added", function (childsnap){
    console.log(childsnap.val());
}